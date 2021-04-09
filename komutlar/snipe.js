const Discord = require('discord.js');
const database = require('quick.db');

exports.run = async (client, message, args) => {
  if(!database.fetch(message.guild.id) || database.fetch(message.guild.id).length <= 0) return createEmbed('Daha önce hiç mesaj silinmemiş.', 'RED');
  if(!args[0]) return createEmbed('Bir sayı belirtmelisin.', 'RED');
  if(isNaN(args[0])) return createEmbed('Bir sayı belirtmelisin.', 'RED');
  if(args[0] > database.fetch(message.guild.id).length) args[0] = database.fetch(message.guild.id).length;


  var silinenler = database.fetch(message.guild.id).slice(database.fetch(message.guild.id).length-args[0]);

  const embed = new Discord.MessageEmbed()
  .setColor('BLUE')
  .setDescription(silinenler.sort((a, b) => a.messageCREATEDAT - b.messageCREATEDAT).reverse().map(x => `**${x.authorTAG}**: ${x.messageCONTENT}`).slice(0, 50).join('\n'))
  .setTitle('hm, tüm silinenler');
  if(embed.description.length > 1000) return createEmbed('Silinen mesajların arasında çok uzun bir mesaj bulunduğu için bunu gösteremiyorum.', 'RED');

  return message.channel.send(embed);

  function createEmbed(desc, color) {
    return message.channel.send(new Discord.MessageEmbed()
    .setDescription(desc)
    .setColor(color)
    .setAuthor(message.author.username, message.author.displayAvatarURL({ dynamic: true, size: 2048 })));
  }

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'snipe'
};
