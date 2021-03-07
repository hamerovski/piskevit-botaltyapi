const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı
exports.run = async(client, message, args) => {


    let vampirköylüdurum = db.fetch(`yaşıyor${message.guild.id}`)
    if (vampirköylüdurum === null) vampirköylüdurum = 0;
    let ölüliste = db.get(`${message.guild.id}ölüliste`) || "Herhangi bir ölü yok"
    let durum = db.get(`durum${message.guild.id}`) 

    message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`**Vampir Köylü Oyun Bilgileri**\n**Oyun Durumu:** ${durum} \n**Yaşayan Kişi Sayısı:** ${vampirköylüdurum}\n\nÖlüler;\n${ölüliste}`))
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı


}
exports.conf = {
     enabled: true,
     guildOnly: true,
     aliases: ["oyundurumu"],
     permLevel: 0
      };
      
exports.help = {
       name: "durum"
      };