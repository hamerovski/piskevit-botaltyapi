const Discord = require('discord.js');
 
exports.run = (client, message, args) => {

let channel = message.mentions.channels.first() || message.channel;
// DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı
let everyone = message.guild.roles.cache.find(a => a.name === '@everyone');
channel.updateOverwrite(everyone, { 'SEND_MESSAGES': false }, 'VK Yetkilisi: '+message.author.tag);
message.channel.send(`Gece oldu herkes uykuya!`);

 // DmirBOT Youtube Kanalına Ait Vampir Köylü Bot Altyapısı

    

};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'gece'
};