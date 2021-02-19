const Discord = require('discord.js');
const { RichEmbed } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const youtube = new YouTube('AIzaSyCzIA5MMDC9sFJELCkzb-tnf-7n3RI_KEg');

exports.run = async (client, message, args) => {
    const queue = client.queue;
    
    var searchString = args.slice(0).join(' ');
    var url = args[0] ? args[0].replace(/<(.+)>/g, '$1') : '';
    var serverQueue = queue.get(message.guild.id);//böyle amk

    var voiceChannel = message.member.voice.channel;//tüm thisleri message yap 

    const embed = new RichEmbed()
    .setColor("#0f0f0f")
    .setTitle(":x: Missing args")
    .setDescription("!!play [Link or query]")
    if (!args[0]) return message.channel.send(embed);
        
    const voiceChannelAdd = new RichEmbed()
    .setColor("#0f0f0f")
    .setDescription(`:x: **You have to be in a voice channel to use this command.**`)
    if (!voiceChannel) return message.channel.send(voiceChannelAdd);

    var permissions = voiceChannel.permissionsFor(client.user);
    if (!permissions.has('CONNECT')) {
      const warningErr = new RichEmbed()
      .setColor("#0f0f0f")
      .setDescription(`:x: I don't have enough permission to join any voice channel.`)
      return message.channel.send(warningErr);
    }
    if (!permissions.has('SPEAK')) {
      const musicErr = new RichEmbed()
      .setColor("#0f0f0f")
      .setDescription(`:x: I can't turn on music/i can't play songs because I'm not allowed to talk on the channel or my microphone is off.`)
      return message.channel.send(musicErr);
    }
      if (url.match(/^https?:\/\/(www.youtube.com|youtube.com)\/playlist(.*)$/)) {
      var playlist = await youtube.getPlaylist(url);
      var videos = await playlist.getVideos();
      for (const video of Object.values(videos)) {
        var video2 = await youtube.getVideoByID(video.id);
        await handleVideo(video2, message.message, voiceChannel, true);
      }
      const PlayingListAdd = new RichEmbed()
      .setColor("#0f0f0f")
      .setDescription(`[${playlist.title}](https://www.youtube.com/watch?v=${playlist.id}) added to the playlist of the song!`)
      return message.channel.send(PlayingListAdd);
    } else {
      try {
        var video = await youtube.getVideo(url);
      } catch (error) {
      try {
          var videos = await youtube.searchVideos(searchString, 10);
          
          var r = 1
        
          var video = await youtube.getVideoByID(videos[r - 1].id);
        } catch (err) {
          console.error(err);
          const songNope = new RichEmbed()
          .setColor("#0f0f0f")
          .setDescription(`:x: No song could be found with the name you were looking for!`) 
          return message.channel.send(songNope);
        }
      }
      return handleVideo(video, message, voiceChannel);
    }

    async function handleVideo(video, message, voiceChannel, playlist = false) {
        var serverQueue = queue.get(message.guild.id);
        
        var song = {
          id: video.id,
          title: video.title,
          durationh: video.duration.hours,
          durationm: video.duration.minutes,
          durations: video.duration.seconds,
          url: `https://www.youtube.com/watch?v=${video.id}`,
          thumbnail: `https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`,
          requester: message.author.tag,
        };
        if (!serverQueue) {
          var queueConstruct = {
            textChannel: message.channel,
            voiceChannel: voiceChannel,
            connection: null,
            songs: [],
            volume: 3,
            playing: true
          };
          queue.set(message.guild.id, queueConstruct);
      
          queueConstruct.songs.push(song);
      
          try {
            var connection = await voiceChannel.join();
            queueConstruct.connection = connection;
            play(message.guild, queueConstruct.songs[0]);
          } catch (error) {
            console.error(`:x: I couldn't get into the audio channel ERROR: ${error}`);
            queue.delete(message.guild.id);
            return message.channel.send(`:x: I couldn't get into the audio channel ERROR: ${error}`);
          }
        } else {
          serverQueue.songs.push(song);
          
          if (playlist) return undefined;
      
          const songListBed = new RichEmbed()
          .setColor("RANDOM")
          .setDescription(`[${song.title}](https://www.youtube.com/watch?v=${song.id}) added to queue!`)
          return message.channel.send(songListBed);
        }
        return undefined;
      }
        function play(guild, song) {
        var serverQueue = queue.get(guild.id);
      
        if (!song) {
          serverQueue.voice.channel.leave();
          voiceChannel.leave();
          queue.delete(guild.id);
          return;
        }
      
        const dispatcher = serverQueue.connection.play(ytdl(song.url))
         .on('end', reason => {
            serverQueue.songs.shift();
            play(guild, serverQueue.songs[0]);
          })
          .on('error', error => console.error(error));
        dispatcher.setVolumeLogarithmic(serverQueue.volume / 5);
        
        let y = ''
        if (song.durationh === 0) {
            y = `${song.durationm || 0}:${song.durations || 0}`
        } else {
            y = `${song.durationh || 0}:${song.durationm || 0}:${song.durations || 0}`
        }

        const playingBed = new RichEmbed()
        .setColor("#0f0f0f")
        .setAuthor(`Now Playing`, song.thumbnail)
        .setDescription(`[${song.title}](${song.url})`)
        .addField("Estimated time until playing", `${y}`, true)
        .addField("The User Who Opened the Song", `${song.requester}`, true)
        .setThumbnail(song.thumbnail)
        serverQueue.textChannel.send(playingBed);
      }  
};

exports.conf = {
    enabled: true,
    aliases: ['p', 'oynat', 'çal'],
    permLevel: 0
};

exports.help = {
    name: 'play',
    description: 'Belirttiğiniz şarkıyı bulunduğunuz sesli kanalda çalar/oynatır.',
    usage: 'oynat [şarkı adı]'
};
