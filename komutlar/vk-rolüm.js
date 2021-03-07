const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();

exports.run = async(client, message, args) => {
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı
     let ardademruser = message.author

     const roller = ["Köylü", "Büyücü"]
     const rolata = roller[Math.floor(Math.random()*roller.length)];

     let rol = await db.get(`vampirköylü${message.guild.id}${ardademruser.id}`,rolata) || "Oyunda DEĞİLSİN"

     ardademruser.send(new Discord.MessageEmbed().setColor('#efff00').setFooter('Sessiz ol kimseye söyleme!').setDescription(`İşte rolün: ${rol}`))
    message.channel.send(`${ardademruser} rolünü özelden gönderdim.`)

// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı

}
exports.conf = {
     enabled: true,
     guildOnly: true,
     aliases: ["rol"],
     permLevel: 0
      };
      
exports.help = {
       name: "rolüm"
      };