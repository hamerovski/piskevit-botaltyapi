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

