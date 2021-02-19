const db = require('quick.db')
const Discord = require('discord.js');
const client = new Discord.Client();

const radyo = {
    alem    : "http://scturkmedya.radyotvonline.com/stream/80/",
    cnnturk : "https://radyo.dogannet.tv/cnnturk",
    fenomen : "http://fenomen.listenfenomen.com/fenomen/128/icecast.audio",
    kral    : "http://46.20.3.204/",
    kralpop : "http://46.20.3.201/;",
    line    : "http://radioline.fm:8000/",
    metro   : "http://17773.live.streamtheworld.com/METRO_FM_SC",
    radyod  : "http://radyo.dogannet.tv/radyod",
    superfm : "http://17733.live.streamtheworld.com/SUPER_FM_SC",
    slow    : "https://radyo.dogannet.tv/slowturk",
    JoyFm    : "https://playerservices.streamtheworld.com/api/livestream-redirect/JOY_FM.mp3",
    fenomenfm : "https://fenomenturk.listenfenomen.com/fenomenturk/128/icecast.audio ",
     show:   "http://46.20.3.229/;",
    taksimclup: "http://cast1.taksim.fm:8016"

}

exports.run = function(bot, message, args) {

  message.delete(10000).catch(console.error);
    if (!message.member.voice.channel) return message.reply("**:bangbang: Sana bağlanmam için ilk önce sesli bir kanala katılmalısın. :bangbang:**").then(m => m.delete(15000)).catch(console.error);
    else {
        if (!args[0] || args[0] === "help" || args[0] === "yardım") {
            message.reply("**\n \n  🎵 Radyo İstasyonları 🎵 \n \n``1 = AlemFM``  \n``2 = CnnTurkFM``\n``3 = FenomenFM`` \n``4 = KralFM``\n``5 = KralPopFM``\n``6 = LineFM``\n``7 = MetroFM`` \n``8 = RadyoDFM``\n``9 = SuperFM``\n``10 = SlowTurk``\n``11 = JoyFM``\n``12 = FenomenTURK``\n``13 = SlowFm``\n``14 = TaksimClup`` \n \nÖrnek kullanım: /radyo <Radyo Numarası> \nKapatmak için: /radyo kapat**").then(m => m.delete(40000)).catch(console.error);
        } else if (args[0].toLowerCase() === "alem" || args[0] === "alem") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.alem);
                message.reply("🎧 | **Başarılı! `AlemFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "cnn" || args[0] === "2") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.cnnturk);
                message.reply("🎧 | **Başarılı! `CNNTurk` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "fenomen" || args[0] === "3") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.fenomen);
                message.reply("🎧 | **Başarılı! 🎻`FenomenFM`🎻 çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "kral" || args[0] === "4") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.kral);
                message.reply("🎧 | **Başarılı! `KralFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "kralpop" || args[0] === "5") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.kralpop);
                message.reply("🎧 | **Başarılı! `KralPOP` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "line" || args[0] === "6") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.line);
                message.reply("🎧 | **Başarılı! `LineFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "metro" || args[0] === "7") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.metro);
                message.reply("🎧 | **Başarılı! `MetroFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        }  else if (args[0].toLowerCase() === "radyod" || args[0] === "8") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.radyod);
                message.reply("🎧 | **Başarılı! `Radyo D FM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "super" || args[0] === "9") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.superfm);
                message.reply("🎧 | **Başarılı! `SüperFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
        } else if (args[0].toLowerCase() === "slow" || args[0] === "10") {
           message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.slow);
                message.reply("🎧 | **Başarılı! `SlowTÜRK` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
            } else if (args[0].toLowerCase() === "Joy" || args[0] === "11") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.JoyFm);
                message.reply("🎧 | **Başarılı! `JoyFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
    
            } else if (args[0].toLowerCase() === "FENOMEN TURK" || args[0] === "12") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.fenomenfm);
                message.reply("🎧 | **Başarılı! `FenomenTÜRK` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
            
                 } else if (args[0].toLowerCase() === "show" || args[0] === "13") {
            message.member.voice.channel.join().then(connection => {
                var dispatcher = connection.play(radyo.show);
                message.reply("🎧 | **Başarılı! `ShowFM` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
            })
            
                 } else if (args[0].toLowerCase() === "taksimclup" || args[0] === "14") {
            message.member.voice.channel.join().then(connection => {
              var dispatcher = connection.play(radyo.taksimclup);
                message.reply("🎧 | **Başarılı! `TaksimClup` çalınıyor.**").then(m => m.delete(10000)).catch(console.error);
          })                                                                                        
        } else if (args[0].toLowerCase() === "kapat" || args[0].toLowerCase() === "bitir") {
                message.member.voice.channel.leave();
    return message.channel.send(`Bu kanaldan ayrıldım ${message.member.voice.channel}.`);
        }
    }
    }
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'radyo',
  description: '',
  usage: 'radyo'
};
