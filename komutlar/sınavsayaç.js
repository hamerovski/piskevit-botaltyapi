const discord = require('discord.js')
const db = require('quick.db')
const ms = require("parse-ms");
 const talkedRecently = new Set();

exports.run = async(client, message, args) => {



  let command = args[0];
  const e20bot =  new discord.MessageEmbed()
  .setColor('#30b480')
  .setTitle('⬡ E20 Bot Sınav Bilgi Sistemi', client.user.avatarURL())
  .setDescription (`
  ⬡ /sınavsayaç lgs1 : LGS 1. oturuma kalan süreyi gösterir.
  ⬡ /sınavsayaç lgs2 : LGS 2. oturuma kalan süreyi gösterir.
  ⬡ /sınavsayaç tyt : TYT sınavına kalan süreyi gösterir.
  ⬡ /sınavsayaç ayt : AYT sınavına kalan süreyi gösterir.
  ⬡ /sınavsayaç ydt : YDT sınavına kalan süreyi gösterir.
  Örnek Kullanım : /sınavsayaç ayt`)
  .setThumbnail(message.author.avatarURL({dynamic:true}))
  if(!command) return message.channel.send(e20bot)//meftun!#3544
   
  if(command.toLowerCase() === "ayt") {
    

  let yilbasi = new Date("2021-06-27 10:15:00");
  let zaman = ms(yilbasi - Date.now());
        const enesamcan = new discord.MessageEmbed()
	.setTitle('AYT Sınavına Kalan Süre')
  .setColor("30b480")
  .addField(`Gün`,`**${zaman.days}**` ,true)
  .addField(`Saat`,`**${zaman.hours}**` ,true)
  .addField(`Dakika`,`**${zaman.minutes}**` ,true)
  .setFooter(`⬡ E20 Bot Sınav Bilgi Sistemi`)
        message.channel.send(enesamcan)//meftun!#3544

    
}
   
  if(command.toLowerCase() === "tyt") {
    
  let yilbasi = new Date("2021-06-26 10:15:00");
  let zaman = ms(yilbasi - Date.now());

        const enesamcan = new discord.MessageEmbed()
	.setTitle('TYT Sınavına Kalan Süre')
  .setColor("30b480")
  .addField(`Gün`,`**${zaman.days}**` ,true)
  .addField(`Saat`,`**${zaman.hours}**` ,true)
  .addField(`Dakika`,`**${zaman.minutes}**` ,true)
  .setFooter(`⬡ E20 Bot Sınav Bilgi Sistemi`)
        message.channel.send(enesamcan)//meftun!#3544
    
    }
 
  if(command.toLowerCase() === "ydt") {

      let yilbasi = new Date("2021-06-20 15:45:00");
  let zaman = ms(yilbasi - Date.now());
    
        const enesamcan = new discord.MessageEmbed()
	.setTitle('YDT Sınavına Kalan Süre')
  .setColor("30b480")
  .addField(`Gün`,`**${zaman.days}**` ,true)
  .addField(`Saat`,`**${zaman.hours}**` ,true)
  .addField(`Dakika`,`**${zaman.minutes}**` ,true)
  .setFooter(`⬡ E20 Bot Sınav Bilgi Sistemi`)
        message.channel.send(enesamcan)//meftun!#3544
    

    }
 
  if(command.toLowerCase() === "lgs1") {
    
      let yilbasi = new Date("2021-06-06 09:30:00");
  let zaman = ms(yilbasi - Date.now());
  
        const enesamcan = new discord.MessageEmbed()
	.setTitle('LGS 1. Oturuma Kalan Süre')
  .setColor("30b480")
  .addField(`Gün`,`**${zaman.days}**` ,true)
  .addField(`Saat`,`**${zaman.hours}**` ,true)
  .addField(`Dakika`,`**${zaman.minutes}**` ,true)
  .setFooter(`⬡ E20 Bot Sınav Bilgi Sistemi`)
        message.channel.send(enesamcan)//meftun!#3544
  
    
  }
  if(command.toLowerCase() === "lgs2") {

      let yilbasi = new Date("2021-06-06 11:30:00");
  let zaman = ms(yilbasi - Date.now());

        const enesamcan = new discord.MessageEmbed()
	.setTitle('LGS 2. Oturuma Kalan Süre')
  .setColor("30b480")
  .addField(`Gün`,`**${zaman.days}**` ,true)
  .addField(`Saat`,`**${zaman.hours}**` ,true)
  .addField(`Dakika`,`**${zaman.minutes}**` ,true)
  .setFooter(`⬡ E20 Bot Sınav Bilgi Sistemi`)
       message.channel.send(enesamcan)//meftun!#3544
  
    }

  
};
exports.conf = {
 enabled: true,
  guildOnly: false,
  aliases: ["sinavsayac" , "sinav-sayac"],
}

exports.help = {

  name: 'sınavsayaç',
   description: "Seçtiğiniz sınava ne kadar kaldığını gösterir.",
    usage: '/sınavsayaç -sınav-'

}
