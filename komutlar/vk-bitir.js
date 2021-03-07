const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı
exports.run = async(client, message, args) => {
if(!message.member.roles.cache.find(x => x.name == "Vampir Köylü Yetkilisi")) return message.channel.send(`Bu komutu kullanabilmek için önce **Vampir Köylü Yetkilisi** olmalısınız.`)
var role = message.guild.roles.cache.find(x2 => x2.name === "Vampir Köylü Yetkilisi");
let mesaj = message.author || message.mentions.users.first()
message.guild.member(mesaj).roles.remove(role);
let dmirbotuser = message.author

const roller = ["Köylü", "Büyücü"]

    db.delete(`vampirköylü${message.guild.id}${dmirbotuser.id}`,roller)
    db.set(`yaşıyor${message.guild.id}`, 0)
    db.set(`yönetici${message.guild.id}`,"DeAktif");
    db.delete(`${message.guild.id}ölüliste`)
    db.set(`durum${message.guild.id}`,"DeAktif");
    message.channel.send('Oyun bitirildi.')
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı

}
exports.conf = {
     enabled: true,
     guildOnly: true,
     aliases: ["oyunubitir"],
     permLevel: 0
      };
      
exports.help = {
       name: "bitir"
      };