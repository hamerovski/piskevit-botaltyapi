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

client.on("message",message=>{
    if(message.content==`<@!${client.user.id}>`) return message.channel.send(`<a:kral:798101479424000020> **Sanırım beni etiketlediniz.**\n > <a:kral:798101479424000020> Buyurun prefix(ön ek)im \`${prefix}\``);
})

//-------------Kendini Sağirlaştirma Komutu ---------------\\
//-----------------------------------------------ÇEKİLİŞ------------------------------------------------------\\

client.on('ready', async () => {// Can°B#1308
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  function destructMS(milli) {
    if (isNaN(milli) || milli < 0) {
      return null;
    }
  
    var d, h, m, s;
    s = Math.floor(milli / 1000);
    m = Math.floor(s / 60);
    s = s % 60;
    h = Math.floor(m / 60);
    m = m % 60;
    d = Math.floor(h / 24);
    h = h % 24;
    var yazi;
    if (d !== 0) yazi = `${d} gün`;
    if (h !== 0 && yazi) yazi = yazi + `, ${h} saat`;
    if (h !== 0 && !yazi) yazi = `${h} saat`;
    if (m !== 0 && yazi) yazi = yazi + `, ${m} dakika`;
    if (m !== 0 && !yazi) yazi = `${m} dakika`;
    if (s !== 0 && yazi) yazi = yazi + `, ${s} saniye`;
    if (s !== 0 && !yazi) yazi = `${s} saniye`;
    if (yazi) return yazi;
    if (!yazi) return `1 saniye`;
  };
client.guilds.forEach(async guild => {
const asd = await data.fetch(`..başladı.${guild.id}`);
if(asd) {
const interval = setInterval(async function(){
const kalanzaman = asd.süre - Date.now()   
const c = await guild.channels.get(asd.channel).fetchMessage(asd.message);
if (kalanzaman <= 0) {
clearInterval(interval)
await sleep(50)
const embed = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
  .setDescription(`**Ödül**: ${asd.ödül}

Başlatan: ${asd.host}`)
.setTimestamp(asd.süre)
  .setTitle(`Çekiliş bitti!`)
c.edit(embed)
data.delete(`çk.${c.id}`)
data.delete(`ödü.${c.id}`)
data.delete(`ma.${c.id}`)
const asdd = await c.reactions.get('🎉').fetchUsers({limit: c.reactions.get('🎉').count})
guild.channels.get(asd.channel).send(`Tebrikler, ${asdd.random()}! Bizden ${asd.ödül} kazandın.
Ödülünü alabilmek için: ${asd.host1} kişisine ulaş.`)
data.delete(`..başladı.${guild.id}`);
} else {
const kalanzamanyazi = destructMS(kalanzaman)
const embed2 = new Discord.RichEmbed()
  .setAuthor(client.user.username, client.user.avatarURL)
  .setTimestamp()
  .setFooter(`Çekiliş Sistemi`)
embed2.setDescription(`**Ödül**: ${asd.ödül}

Başlatan: ${asd.host}
Kalan zaman: ${kalanzamanyazi}

Katılmak için 🎉 tepkisine tıklayın.`)
c.edit(embed2)
                }
}, 5000)
}
})
})

//-----------------------------------------------ÇEKİLİŞ------------------------------------------------------\\
//-----------------------------------------------YAPAY ZEKA------------------------------------------------------\\
client.on("message", async message => {
  const Database = require("plasma-db");
const db = new Database("./database.json"); 
  const ai = require('@codare/codare.ai')
let kanal = db.fetch(`yapayzekakanal_${message.guild.id}`)
if(!kanal) return;
if(message.channel.id !== kanal) return;
if(message.author.bot == true) return;
let soru = message.content;
ai.sor(soru).then(enginar => {
return message.channel.send(enginar) 
});
})
//---------------------------------------------------------------------------------------------------------------------------------------\\
client.on("message", async message => {
  const ai = require('@codare/codare.ai')
let kanal = "825056008069316708"
if(message.channel.id !== kanal) return;
if(message.author.bot == true) return;
let soru = message.content;
ai.sor(soru).then(enginar => {
return message.channel.send(enginar) 

});
})

//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//
client.on("message" , message => {
  // Baş Tanımlar
  if(!message.guild) return;
  if(message.content.startsWith(ayarlar.prefix + 'afk')) return;

  // Let Tanımları & Data Veri Çekme İşlemleri
  let codemarefiafk = message.mentions.users.first()
  let codemarefikisi = db.fetch(`kisiid_${message.author.id}_${message.guild.id}`)
  let codemarefikisiisim = db.fetch(`kisiisim_${message.author.id}_${message.guild.id}`)

  // Eğer Afk Kişi Etiketlenirse Mesaj Atalım
  if(codemarefiafk){
    // Let Tanımları
    let cmfsebep = db.fetch(`cmfsebep_${codemarefiafk.id}_${message.guild.id}`)
    let codemarefikisi2 = db.fetch(`kisiid_${codemarefiafk.id}_${message.guild.id}`)

    if(message.content.includes(codemarefikisi2)){
      const cmfbilgiafk = new Discord.MessageEmbed()
      .setDescription(`${message.author} - Etiketlemiş Olduğun <@!${codemarefikisi2}> Kişisi Şuan **${cmfsebep}** Sebebiyle AFK`)
      .setColor("#36393F")
      .setFooter('kahve içiyo')
      message.channel.send(cmfbilgiafk)
    }
  }

  // Eğer Afk Kişi Mesaj Yazarsa Afk'lıktan Çıkaralım Ve Mesaj Atalım
  if(message.author.id === codemarefikisi){

    // Datadaki AFK Kullanıcı Verilerini Silelim
    db.delete(`cmfsebep_${message.author.id}_${message.guild.id}`)
    db.delete(`kisiid_${message.author.id}_${message.guild.id}`)
    db.delete(`kisiisim_${message.author.id}_${message.guild.id}`)

    // Afk'lıktan Çıktıktan Sonra İsmi Eski Haline Getirsin
    message.member.setNickname(codemarefikisiisim)

    // Bilgilendirme Mesajı Atalım
    const cmfbilgiafk = new Discord.MessageEmbed()
    .setAuthor(`Hoşgeldin ${message.author.username}`, message.author.avatarURL({dynamic: true, size: 2048}))
    .setDescription(`<@!${codemarefikisi}> Başarılı Bir Şekilde **AFK** Modundan Çıkış Yaptın.`)
    .setColor("#36393F")
    .setFooter('Seni özledim')
    message.channel.send(cmfbilgiafk)
  }  
})
//-------------------- Afk Sistemi --------------------//
//-------------------- Afk Sistemi --------------------//
//---------------------------------------------------------------------------------------------------------------------------------------\\



//----------- YKS GERİ SAYIM ---------------------------------------------------------------------------------------------------------------------
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



//--------------------------------------------------------//


client.on('ready', ()=>{
client.channels.cache.get('797114111040684113').join()
})

