const Discord = require("discord.js");

exports.run = (client, message, args) => {
if(!message.member.hasPermission("BAN_MEMBERS")) return message.channel.send("Yeterli yetkin yok!")
  let user = client.guilds.get(args[0])

  if(!user) return message.channel.send("Kimin banını kaldıracağımın ID'sını belirtmedin.")
  
  message.guild.unban(user);
  
  
  message.channel.send(`${user} ID'lı kullanıcının banı kaldırıldı.`)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0  
};

exports.help = {
  name: 'unban',
  description: 'Kişiyi banlar',
  usage: '-unban @üye'
} 
