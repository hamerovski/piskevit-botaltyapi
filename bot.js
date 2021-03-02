const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const chalk = require('chalk');
const moment = require('moment');
var Jimp = require('jimp');
const { Client, Util } = require('discord.js');
const fs = require('fs');
const db = require('quick.db');
const http = require('http');
const express = require('express');
require('./util/eventLoader.js')(client);
const path = require('path');
const snekfetch = require('snekfetch');
const ffmpeg = require("ffmpeg-static");
const ytdl = require('ytdl-core');


//------------------------------------------------------------------------------------------------------------------
var queue = {
    nowplayng: [],
    list: []
};
var disp;

client.on("message", async (message) => {

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

  if(message.content.startsWith(prefix)) {

    if(command == 'play' || command == 'p') {
        if (message.member.voice.channel) {
            async function play() {
                const connection = await message.member.voice.channel.join();
                const dispatcher = connection.play(await ytdl(queue.list[0], { filter: 'audio' }));
                disp = dispatcher;
        
                dispatcher.on('start', async () => {
                    queue.nowplayng[0] = queue.list[0];
                    await queue.list.shift();
                });

                dispatcher.on('finish', async () => {
                    if(!queue.nowplayng[0]) {
                        var m = await message.channel.send('No queda ninguna cancion...');
                        queue.list = [];
                        queue.nowplayng = [];
                        dispatcher.destroy();
                        connection.disconnect();
                        message.member.voice.channel.leave();
                        await m.delete({ timeout: 5000 })
                        return
                    } else {
                        play();
                    }
                });
            }


            if(args[0]) {
                if(!queue.nowplayng[0]) {
                    queue.list.push(`${args.slice(0).join(' ')}`);
                    play();
                } else {
                    queue.list.push(`${args.slice(0).join(' ')}`);
                    var m = await message.channel.send(`Se añadio a la cola ${args.slice(0).join(' ')}`)
                    await m.delete({ timeout: 5000 });
                    return
                }
            } else {
                var m = await message.channel.send('Debes de poner un **Link de YouTube**')
                await m.delete({ timeout: 5000 });
                return
            }
        } else {
            var m = await message.channel.send('Debes de estar en un canal de voz')
            await m.delete({ timeout: 5000 });
            return
        }
    }

    if(command == 'volume' || command == 'v') {
        if (message.member.voice.channel) {
            if(!args[[0]]) {
                if(!queue.nowplayng[0]) {
                    var m = await message.channel.send('No hay ninguna cancion')
                    await m.delete({ timeout: 5000 });
                    return
                } else {
                    let nowvolume = disp.volume;
                    var m = await message.channel.send(`Volumen acutal es: ${nowvolume * 100}`)
                    await m.delete({ timeout: 5000 });
                    return
                }
            } else {
                if(!queue.nowplayng[0]) {
                    var m = await message.channel.send('No hay ninguna cancion')
                    await m.delete({ timeout: 5000 });
                    return
                } else {
                    const uservolume = Number.parseInt(args[0]);
                    disp.setVolume(uservolume / 100);
                    var m = await message.channel.send(`El volumen se seteo a: ${uservolume}`)
                    await m.delete({ timeout: 5000 });
                    return
                }
            }
        } else {
            var m = await message.channel.send('Debes de estar en un canal de voz')
            await m.delete({ timeout: 5000 });
            return
        }
    }

    if(command == 'pause' || command == 'pa') {
        if (message.member.voice.channel) {
            if(!queue.nowplayng[0]) {
                var m = await message.channel.send('No hay ninguna cancion')
                await m.delete({ timeout: 5000 });
                return
            } else {
                disp.pause(true);
                var m = await message.channel.send('Se pauso la musica')
                await m.delete({ timeout: 5000 });
                return
            }
        } else {
            var m = await message.channel.send('Debes de estar en un canal de voz')
            await m.delete({ timeout: 5000 });
            return
        }
    }

    if(command == 'resume' || command == 'r') {
        if (message.member.voice.channel) {
            if(!queue.nowplayng[0]) {
                var m = await message.channel.send('No hay ninguna cancion')
                await m.delete({ timeout: 5000 });
                return
            } else {
                disp.resume();
                var m = await message.channel.send('Se resumio la musica')
                await m.delete({ timeout: 5000 });
                return
            }
        } else {
            var m = await message.channel.send('Debes de estar en un canal de voz')
            await m.delete({ timeout: 5000 });
            return
        }
    }

    if(command == 'now' || command == 'song') {
        if (message.member.voice.channel) {
            if(!queue.nowplayng[0]) {
                var m = await message.channel.send('No hay ninguna cancion')
                await m.delete({ timeout: 5000 });
                return
            } else {
                var m = await message.channel.send(`Ahora esta sonando: ${queue.nowplayng[0]}`)
                await m.delete({ timeout: 5000 });
                return
            }
        } else {
            var m = await message.channel.send('Debes de estar en un canal de voz')
            await m.delete({ timeout: 5000 });
            return
        }
    }

    if(command == 'skip' || command == 's') {
        if (message.member.voice.channel) {
            if(!queue.nowplayng[0]) {
                var m = await message.channel.send('No hay ninguna cancion')
                await m.delete({ timeout: 5000 });
                return
            } else {
                disp.emit('finish');
                var m = await message.channel.send('Se salto de cancion')
                await m.delete({ timeout: 5000 });
                return
            }
        } else {
            var m = await message.channel.send('Debes de estar en un canal de voz')
            await m.delete({ timeout: 5000 });
            return
        }
    }

    if(command == 'clear-queue' || command == 'cq') {
        if (message.member.voice.channel) {
            if(!queue.nowplayng[0]) {
                var m = await message.channel.send('No hay ninguna cancion')
                await m.delete({ timeout: 5000 });
                return
            } else {
                queue.list = [];
                var m = await message.channel.send('Se elimino la queue')
                await m.delete({ timeout: 5000 });
                return
            }
        } else {
            var m = await message.channel.send('Debes de estar en un canal de voz')
            await m.delete({ timeout: 5000 });
            return
        }
    }

    if(command == 'stop' || command == 'end') {
        if (message.member.voice.channel) {
            if(!queue.nowplayng[0]) {
                var m = await message.channel.send('No hay ninguna cancion')
                await m.delete({ timeout: 5000 });
                return
            } else {
                queue.list = [];
                queue.nowplayng = [];
                disp.emit('finish');
                var m = await message.channel.send('Se paro la musica y se elimino la queue')
                await m.delete({ timeout: 5000 });
                return
            }
        } else {
            var m = await message.channel.send('Debes de estar en un canal de voz')
            await m.delete({ timeout: 5000 });
            return
        }
    }

    if(command == 'queue' || command == 'q') {
        if(!args[0]) {
            function mapas(contenido) {
                let q = contenido.map((song, i) => {
                return `${i === 0 ? '1' : `${i+1}`} -> ${song}`
            }).join('\n\n');       
                return `${q}`
            }

            if(!queue.list[0]) {
                var m = await message.channel.send('No hay ninguna queue usa !now o !song para ver cual esta sonando ahora')
                await m.delete({ timeout: 5000 });
                return
            } else {

                var playngnow;

                if(queue.nowplayng[0] == undefined) {
                    playngnow = 'No hay ninguna cancion sonando...';
                } else {
                    playngnow = `${queue.nowplayng[0]}`;
                }


            const embed = new Discord.MessageEmbed()
            .setColor("RANDOM")
            .setTitle('Queue')
            .setTimestamp()
            .setDescription(`\nAhora -> ${playngnow}
            
            ${mapas(queue.list)}`);
            
            var m = await message.channel.send(embed)
            await m.delete({ timeout: 30000 });
            return
            }
        } else {
            queue.list.push(`${args.slice(0).join(' ')}`);
            var m = await message.channel.send('Se añadio **`' + args.slice(0).join(' ') + '`** a la lista de la queue')
            await m.delete({ timeout: 5000 });
            return
        }
       }
  }
});

//---------------------------------------------------------------------------------------------------------------------------------




var prefix = ayarlar.prefix;

const log = message => {
    console.log(`${message}`);
};

client.commands = new Discord.Collection();
client.aliases = new Discord.Collection();
fs.readdir('./komutlar/', (err, files) => {
    if (err) console.error(err);
    log(`${files.length} komut yüklenecek.`);
    files.forEach(f => {
        let props = require(`./komutlar/${f}`);
        log(`Yüklenen komut: ${props.help.name}.`);
        client.commands.set(props.help.name, props);
        props.conf.aliases.forEach(alias => {
            client.aliases.set(alias, props.help.name);
        });
    });
});



client.reload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.load = command => {
    return new Promise((resolve, reject) => {
        try {
            let cmd = require(`./komutlar/${command}`);
            client.commands.set(command, cmd);
            cmd.conf.aliases.forEach(alias => {
                client.aliases.set(alias, cmd.help.name);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.login(ayarlar.token);



client.on('message', msg => {   if (msg.author.bot) return;    
 if (msg.content.toLowerCase().includes('günaydın'))msg.reply('🌞 Günaydın :)');   if (msg.content.toLowerCase().includes('iyi geceler')) msg.reply(' 🌙 Sana da iyi geceler');  if (msg.content.toLowerCase().includes('iyi akşamlar')) msg.reply('🌓 sana da iyi akşamlar'); 
});

//-------------Kendini Sağirlaştirma Komutu ---------------\\

client.on('voiceStateUpdate', async (___, newState) => {
if (
newState.member.user.bot &&
newState.channelID &&
newState.member.user.id == client.user.id &&
!newState.selfDeaf
) {
newState.setSelfDeaf(true);
}
});
//---------------------------------------------------------\\

//----------- YKS GERİ SAYIM -------------
client.on("ready",async message => {
  

  
  
  var mesajid = "804426306212331520"
  var kanalid = "804426055314047026"
  var sunucuid = "796847477080850462"
  var tarih = "June 26 2021 10:15:00 UTC+3" //İNGİLİZCE AY / GÜN / YIL / SAAT / DAKİKA / SANİYE 
  var bitiş = "Zaman doldu koçum geçmiş olsun"
  var yenilemearalığı = 5000 // milisaniye cinsinden EN AZ 5 SANİYE
  


  
  
let kanall = await client.channels.fetch(kanalid) 
const countdownTextNow = (output) => {
    return (date) => {
        const ms = msCountdown(date)
        const days = Math.floor( ms/(1000*60*60*24) );
        const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);
        return output(days,hours,minutes,seconds);
    };
}
const msCountdown = date => Date.parse(date) - Date.parse(new Date());

const countdown = (param) => {
   
     
      
        const cd = () => {
            if (msCountdown(param.date) < 0) {
            
             client.channels.cache.get(kanalid).send(`${param.end}`).catch(err=>console.log(err));
                return;
            }
       

          kanall.messages.fetch(mesajid).then(x => {
      x.edit(`${(countdownTextNow)(param.output)(param.date)}`)
   
   })
           .then(a=>setTimeout(cd, param.timeout))
                .catch(err=>console.log(err))
 
        }; 
        cd();
    }

  console.log(`${countdown({
        date : tarih,
        output: (d,h,m,s) => `${d}gün ${h}saat ${m}dakika ${s}saniye`,
        end:  bitiş,
        timeout: yenilemearalığı
    })}`)
  
  
  
  
})
//---------------------------------------------------------------

//-----------------------EKLENİLENSUNUCUYAMESAJ------------------

client.on('guildCreate', guild => {
    let virus = guild.channels.filter(c => c.type === "text").random()
    virus.send("** <a:coolemoji:798101483077632021> Beni ekleyerek sunucunu elit bir hale getirdin h.o <a:coolemoji:798101483077632021> **");
});

//-----------------------EKLENİLENSUNUCUYAMESAJ------------------



//--------------------------------------

client.on('message', message =>{
const sa = message.content.toLowerCase()

if(sa === 'sa' || sa === 'sea' || sa === 'selamun aleyküm' || sa === 'selamün aleyküm' || sa === 'Selamun Aleyküm' || sa === 'Selamun aleyküm' || sa === 'Selamun Aleyküm') {
message.channel.send(`**Aleyküm Selam Hoş Geldin <@${message.author.id}> <a:pikahello:797177533123526678>**`)
    }
})

//-----------SA-AS----EMOJİ--------------


//----------- YKS GERİ SAYIM2 deadline-------------
client.on("ready",async message => {
  

  
   
  var mesajid = "804422471977140305"
  var kanalid = "804420750320205845"
  var sunucuid = "768453225958998076"
  var tarih = "June 26 2021 10:15:00 UTC+3" //İNGİLİZCE AY / GÜN / YIL / SAAT / DAKİKA / SANİYE 
  var bitiş = "Zaman doldu koçum geçmiş olsun"
  var yenilemearalığı = 5000 // milisaniye cinsinden EN AZ 5 SANİYE
  


  
  
let kanall = await client.channels.fetch(kanalid) 
const countdownTextNow = (output) => {
    return (date) => {
        const ms = msCountdown(date)
        const days = Math.floor( ms/(1000*60*60*24) );
        const hours = Math.floor((ms % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((ms % (1000 * 60)) / 1000);
        return output(days,hours,minutes,seconds);
    };
}
const msCountdown = date => Date.parse(date) - Date.parse(new Date());

const countdown = (param) => {
   
     
      
        const cd = () => {
            if (msCountdown(param.date) < 0) {
            
             client.channels.cache.get(kanalid).send(`${param.end}`).catch(err=>console.log(err));
                return;
            }
       

          kanall.messages.fetch(mesajid).then(x => {
      x.edit(`${(countdownTextNow)(param.output)(param.date)}`)
   
   })
           .then(a=>setTimeout(cd, param.timeout))
                .catch(err=>console.log(err))
 
        }; 
        cd();
    }

  console.log(`${countdown({
        date : tarih,
        output: (d,h,m,s) => `${d}gün ${h}saat ${m}dakika ${s}saniye`,
        end:  bitiş,
        timeout: yenilemearalığı
    })}`)
  
  
  
  
})
//-----------



client.unload = command => {
    return new Promise((resolve, reject) => {
        try {
            delete require.cache[require.resolve(`./komutlar/${command}`)];
            let cmd = require(`./komutlar/${command}`);
            client.commands.delete(command);
            client.aliases.cache.forEach((cmd, alias) => {
                if (cmd === command) client.aliases.delete(alias);
            });
            resolve();
        } catch (e) {
            reject(e);
        }
    });
};

client.elevation = message => {
    if (!message.guild) {
        return;
    }
    let permlvl = 0;
    if (message.member.hasPermission("BAN_MEMBERS")) permlvl = 2;
    if (message.member.hasPermission("ADMINISTRATOR")) permlvl = 3;
    if (message.author.id === ayarlar.sahip) permlvl = 4;
    return permlvl;
};

var regToken = /[\w\d]{24}\.[\w\d]{6}\.[\w\d-_]{27}/g;
// client.on('debug', e => {
//   console.log(chalk.bgBlue.green(e.replace(regToken, 'that was redacted')));
// });

client.on('warn', e => {
    console.log(chalk.bgYellow(e.replace(regToken, 'that was redacted')));
});

client.on('error', e => {
    console.log(chalk.bgRed(e.replace(regToken, 'that was redacted')));
});



////--------------BOTA DM ATANLAR BAŞLANGIÇ-------------////

client.on("message", msg => {
  var dm = client.channels.cache.get("797114065582555136");
  if (msg.channel.type === "dm") {
    if (msg.author.id === client.user.id) return;
    const botdm = new Discord.MessageEmbed()
      .setTitle(`${client.user.username} Dm`)
      .setTimestamp()
      .setColor("RANDOM")
      .setThumbnail(`${msg.author.avatarURL()}`)
      .addField("Gönderen", msg.author.tag)
      .addField("Gönderen ID", msg.author.id)
      .addField("Gönderilen Mesaj", msg.content);

    dm.send(botdm);
  }
  if (msg.channel.bot) return;
});
///--------BOTA DM ATANLAR SONU-------------////

client.on('guildDelete', guild => {

let plasmic = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(" Bot Kicklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('785431902848679956').send(plasmic);
 
});

//--------------------------------------------------------//

client.on('guildCreate', guild => {

let plasmicc = new Discord.MessageEmbed()

.setColor("RANDOM")
.setTitle(" Bot Eklendi ")
.addField("Sunucu Adı:", guild.name)
.addField("Sunucu sahibi", guild.owner)
.addField("Sunucu Sahibi'nin ID'si", guild.ownerID)
.addField("Sunucunun Kurulu Olduğu Bölge:", guild.region)
.addField("Sunucudaki Kişi Sayısı:", guild.memberCount)

   client.channels.cache.get('797114065582555136').send(plasmicc);

});


client.on('ready', ()=>{
client.channels.cache.get('797114111040684113').join()
})

