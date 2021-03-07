const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();

exports.run = async(client, message, args) => {
if(!message.member.roles.cache.find(x => x.name == "Vampir Köylü Yetkilisi")) return message.channel.send(`Bu komutu kullanabilmek için önce **Vampir Köylü Yetkilisi** olmalısınız.`)
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı
let dmirbotuser = message.author
let ardademruser = message.mentions.users.first()
let mesaj = message.author || message.mentions.users.first()
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı

const roller = ["Köylü", "Büyücü"]
const rolata = roller[Math.floor(Math.random()*roller.length)];

let rol = await db.get(`vampirköylü${message.guild.id}${ardademruser.id}`,rolata) || "Rolsüz"
var role = message.guild.roles.cache.find(x2 => x2.name === `${rol}`);
db.push(`${message.guild.id}ölüliste`,message.mentions.users.first().tag)
    db.add(`yaşıyor${message.guild.id}`, -1)
    message.channel.send(`${dmirbotuser} isimli yetkili ${ardademruser} isimli oyuncuyu öldürdü.\n**Oyuncunun rolü:** ${rol}`)
    message.guild.member(mesaj).roles.add(role);
    db.delete(`vampirköylü${message.guild.id}${ardademruser.id}`,rolata)


}
exports.conf = {
     enabled: true,
     guildOnly: true,
     aliases: ["öl"],
     permLevel: 0
      };
      
exports.help = {
       name: "öldür"
      };