const Discord = require('discord.js');
const db = require('quick.db');
const client = new Discord.Client();

exports.run = async(client, message, args) => {
  if(!message.member.roles.cache.find(x => x.name == "Vampir Köylü Yetkilisi")) return message.channel.send(`Bu komutu kullanabilmek için önce **Vampir Köylü Yetkilisi** olmalısınız.`)
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı
  let ardademruser = message.mentions.users.first()
  let dmirbotuser = message.author

  const roller = ["Köylü"]
  const rolata = roller[Math.floor(Math.random()*roller.length)];
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı
  ardademruser.send(new Discord.MessageEmbed().setColor('#efff00').setFooter(`Rolün: ${rolata}`).setDescription(`${dmirbotuser} tarafından vampir köylü oyununa dahil edildiniz.`))

    message.delete({ timeout: 1500 }) 
    db.add(`yaşıyor${message.guild.id}`,1)

}
exports.conf = {
     enabled: true,
     guildOnly: true,
     aliases: ["köylüyap"],
     permLevel: 0
      };
      
exports.help = {
       name: "köylü"
      };