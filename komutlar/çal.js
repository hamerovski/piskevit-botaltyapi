const player = require("discordjs-ytdl-advanced")
const { MessageEmbed } = require("discord.js")

exports.run = async (client, message, args) => {
  if (!args[0]) return message.reply("Lütfen bir kelime girer misin?");
  if (message.member.voice.channel){
    try {
    const baglanti = await message.member.voice.channel.join()
    const altansarki = await player(args.join(""))
    altansarki.play(baglanti)
         const altanembed = new MessageEmbed()
        .setColor('#3498DB')
        .addField(`Şarkı Başlığı`,altansarki.title)
        .addField(`Şarkı Süresi`, altansarki.time)
         message.channel.send(altanembed);
  } catch(err) {
    message.channel.send("Şarkıyı bulamadım")
  }                    
  }else {
    message.reply("Lütfen Bir sesli kanala girer misin?")
  }
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['play',],
  permLevel: 3
};


exports.help = {
  name: "çal"
}
