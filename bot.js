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

const DisTube = require('distube')
const distube = new DisTube(client, { searchSongs: true, emitNewSongOnly: true })
client.on("message", async (message) => {
    if (message.author.bot) return;
    if (!message.content.startsWith(ayarlar.prefix)) return;
    const args = message.content.slice(ayarlar.prefix.length).trim().split(/ +/g);
    const command = args.shift();


//Altan Usta ama Dcye giremeyen#1158
//Altan Usta ama Dcye giremeyen#1158

    if (command == "çal")
        distube.play(message, args.join(" "));
//Altan Usta ama Dcye giremeyen#1158
//Altan Usta ama Dcye giremeyen#1158

    if (["repeat", "loop"].includes(command))
        distube.setRepeatMode(message, parseInt(args[0]));

    if (command == "durdur") {
        distube.stop(message);
        message.channel.send("Müzik başarı ile durduruldu");
    }

    if (command == "geç")
        distube.skip(message);

    if (command == "sıra") {
        let queue = distube.getQueue(message);
        message.channel.send('Şuan Sırada:\n' + queue.songs.map((song, id) =>
            `**${id + 1}**. ${song.name} - \`${song.formattedDuration}\``
        ).slice(0, 10).join("\n"));
    }

    if ([`3d`, `bassboost`, `echo`, `karaoke`, `nightcore`, `vaporwave`].includes(command)) {
        let filter = distube.setFilter(message, command);
        message.channel.send("Şuanki Sıradakiler Fitrelemesi: " + (filter || "Kapalı"));
    }
});


const status = (queue) => `Ses: \`${queue.volume}%\` | Filre: \`${queue.filter || "Kapalı"}\` | Loop: \`${queue.repeatMode ? queue.repeatMode == 2 ? "Bütün sıradakı" : "Bu şarkı" : "Kapalı"}\` | Otomatik oynatma: \`${queue.autoplay ? "Açık" : "Kapalı"}\``;

distube
    .on("playSong", (message, queue, song) => message.channel.send(
        `Oynatılıyor \`${song.name}\` - \`${song.formattedDuration}\`\nŞu kişi tarafından istendi: ${song.user}\n${status(queue)}`
    ))
    .on("addSong", (message, queue, song) => message.channel.send(
        `Şarkı ${song.name} - \`${song.formattedDuration}\` şu kişi tarafından sıraya eklendi ${song.user}`
    ))
   
    .on("addList", (message, queue, playlist) => message.channel.send(
        `Eklendi \`${playlist.name}\` oynatma listesine (${playlist.songs.length} songs) şu kişi tarafından \n${status(queue)}`
    ))
    .on("searchResult", (message, result) => {
        let i = 0;
          message.channel.send(`**1 ile 10 arasında bir sayı seçin lütfen**\n${result.map(song => `**${++i}**. ${song.name} - \`${song.formattedDuration}\``).join("\n")}\n*1-10 arasında bir sayı girmesseniz seçim 60 saniye içinde iptal edilir*`);
    })
    .on("searchCancel", (message) => message.channel.send(`Arama iptal edildi`))
    .on("error", (message, e) => {
        console.error(e)
        message.channel.send("Beklenmedik bir hatayla karşılaştım: " + e);
    });

//-----------------------------------------------SNİPE------------------------------------------------------\\
client.on('messageDelete', async message => {// can#0002
  if(message.author.bot || !message.content) return;
  require('quick.db').push(message.guild.id, {
    author: message.author,
    authorTAG: message.author.tag,
    authorID: message.author.id,
    authorUSERNAME: message.author.username,
    authorDISCRIMINATOR: message.author.discriminator,
    messageID: message.id,
    messageCHANNEL: message.channel,
    messageCHANNELID: message.channel.id,
    messageCONTENT: message.content,
    messageCREATEDAT: message.createdAt
  });
});
//-----------------------------------------------SNİPE------------------------------------------------------\\

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

client.on('message', message => {
  if (message.content.startsWith("/virüs")) {
      if(!message.author.id === '') return;
    if (message.author.bot) return
         message.delete();
           let args = message.content.split(' ').slice(1);

                 let virusname = args.join('Aktarma işlemi, iptal edildi!');
               if (virusname < 1) {
                   return message.channel.send("Lütfen, bir isim belirtiniz!");
               }
               message.channel.send({embed: new Discord.MessageEmbed().setTitle(virusname + " hazırlanmakta!").setColor(0x808080)}).then(function(m) {
           setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 1%').setColor(0x808080)})
           }, 1000)
           setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 2%').setColor(0x808080)})
           }, 2000)
             setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 3%').setColor(0x808080)})
           }, 3000)
           setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 4%').setColor(0x808080)})
           }, 4000)
             setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 28%').setColor(0x808080)})
           }, 5000)
             setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 35%').setColor(0x808080)})
           }, 6000)
             setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 78%').setColor(0x808080)})
           }, 7000)
             setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 80%').setColor(0x808080)})
           }, 8000)
             setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 86%').setColor(0x808080)})
           }, 9000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 89%').setColor(0x808080)})
           }, 10000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 90%').setColor(0x808080)})
           }, 11000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 95%').setColor(0x808080)})
           }, 12000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 96%').setColor(0x808080)})
           }, 13000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 97%').setColor(0x808080)})
           }, 14000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor 98%').setColor(0x808080)})
           }, 15000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 99%').setColor(0x808080)})
           }, 16000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs, yükleniyor! 100%').setColor(0x808080)})
           }, 17000)
           setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs için aktarma işlemi başlatılıyor!').setColor(0x808080)})
           }, 18000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle(virusname + ' adlı virüs için dosyalar hazırlanıyor!').setColor(0x808080)})
           }, 19000)
             setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle('Dosya, aktarılıyor: ' + virusname + ".exe").setColor(0x808080)})
           }, 22000)
             setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle('İşlemin gerçekleşmesine, son 5sn.').setColor(0x808080)})
           }, 25000)
             setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle('İşlemin gerçekleşmesine, son 4sn.').setColor(0x808080)})
           }, 26000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle('İşlemin gerçekleşmesine, son 3sn.').setColor(0x808080)})
           }, 27000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle('İşlemin gerçekleşmesine, son 2sn.').setColor(0x808080)})
           }, 28000)
              setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle('İşlemin gerçekleşmesine, son 1sn.').setColor(0x808080)})
           }, 29000)
           setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle('Virüs, ekleniyor!').setColor(0x808080)})
         }, 30000)
            setTimeout(function() {
             m.edit({embed: new Discord.MessageEmbed().setTitle('Virüs, eklendi!').setColor(0x808080)})
         }, 31000)
            setTimeout(function() {
             m.delete()
         }, 32000)
           setTimeout(function() {
             message.channel.send('**Virüs, sızdırıldı!**')
         }, 33000)
            setTimeout(function() {
           message.channel.send('**Sunucuya Sızılıyor...!**')
         }, 33000)
          setTimeout(function() {
            message.channel.send('**Sunucu Bilgileri Ele Geçirildi...**')
          }, 99999)

         setTimeout(function() {
           message.channel.send('**Sunucu Üyelerinin Bilgileri Ele Geçiriliyor...**')
         }, 99999)

        setTimeout(function() {
          message.channel.send('**Üye Bilgileri Ele Geçirildi...**')
        }, 99999)

       setTimeout(function() {
         message.channel.send('**Üyelerin İP Adresi Alınıyor...**')
       }, 99999)

      setTimeout(function() {
        message.channel.send('**Sistemlerine Sızılıyor**')
      }, 99999)

     setTimeout(function() {
       message.channel.send('**Sisteme Sızıldı...**')
     }, 99999)

    setTimeout(function() {
      message.channel.send('**Bilgiler Pays a Atılıyor...**')
    }, 99999)

   setTimeout(function() {
     message.channel.send('**Bilgiler Atıldı...**')
   }, 99999)
  })
       }
});




//--------------------------------------------------------//


client.on('ready', ()=>{
client.channels.cache.get('797114111040684113').join()
})

