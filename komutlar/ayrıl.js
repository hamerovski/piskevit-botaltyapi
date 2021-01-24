const Discord = require('discord.js');

exports.run = (client, message, args) => {
  if (message.author.id !== "325662919511769098") return message.reply(':no_entry: Sahibim Sen Değilsin');
   message.channel.send('İstediğin Sunucudan Ayrıldım Sahibım');
   message.guild.leave()
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ayrıl'],
  permLevel: 4,
  kategori: "yapımcı"
};

exports.help = {
  name: 'ayrıl',
  description: 'Bot Sunucudan Ayrılır.',
  usage: 'ayrıl'
};