const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();

exports.run = async(client, message, args) => {
     let rol = message.guild.roles.cache.find(x => x.name == "Vampir Köylü Yetkilisi")
     if(!rol) return message.channel.send(`Bu sunucuda **"Vampir Köylü Yetkilisi"** adında bir rol olmadığı için işleminiz gerçekleştirilemiyor.`);
     var role = message.guild.roles.cache.find(x2 => x2.name === "Vampir Köylü Yetkilisi");
     let mesaj = message.author
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı
     if(db.get(`yönetici${message.guild.id}`)=="Aktif") return message.channel.send(new Discord.MessageEmbed().setColor('#efff00').setDescription(`Mevcut oyunun yöneticisi var, bu yüzden dolayı katılamazsın.`))

    const roller = ["Köylü", "Büyücü"]
    const rolata = roller[Math.floor(Math.random()*roller.length)];
    message.guild.member(mesaj).roles.add(role);
    message.channel.send('Bu oyuna ilk katılan sensin ve bu oyunun yöneticisi de otomatik olarak sen oldun.')
    mesaj.send(new Discord.MessageEmbed().setColor('#efff00').setFooter(`Rolün: ${rolata}`).setDescription(`Vampir Köylü Oyununa Katıldın`))
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı
    db.set(`vampirköylü${message.guild.id}${mesaj.id}`,rolata)
    db.add(`yaşıyor${message.guild.id}`,1)
    db.set(`yönetici${message.guild.id}`,"Aktif");
    db.set(`durum${message.guild.id}`,"Aktif");



}
exports.conf = {
     enabled: true,
     guildOnly: true,
     aliases: ["oyunakatıl"],
     permLevel: 0
      };
      
exports.help = {
       name: "katıl"
      };