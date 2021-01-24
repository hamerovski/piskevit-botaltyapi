const db = require("quick.db")
const Discord = require("discord.js");

exports.run = function(client, message, args) {

  var user = message.author;
  var sebep = args.slice(0).join("  ");
  const sebep2 = new Discord.MessageEmbed()
  .setDescription(` \`${message.author.username}\` **AFK moduna geçmek için bir sebep belirtmelisin.**`)
  .setColor("#00ff88")
  .setFooter(`AFK Sistemi.`, client.user.avatarURL());
  if(!sebep) return message.channel.send(sebep2);
  
  db.set(`afk_${user.id}`, sebep);
  db.set(`afk_süre_${user.id}`, Date.now());
  const embed = new Discord.MessageEmbed()
  .setDescription(` \`${user.username}\` **Başarıyla AFK moduna girdin.**`)
  .setThumbnail(message.author.avatarURL())
  .setColor("#00ff88")
  .setFooter(`AFK Sistemi.`, client.user.avatarURL());
  message.channel.send(embed)
  
};  

exports.conf = {
  enabled: true, 
  guildOnly: true, 
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'afk',
};