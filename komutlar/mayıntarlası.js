const Discord = require("discord.js");
const Minesweeper = require('discord.js-minesweeper');

module.exports.run = async (bot, message, args) => {
  const satır = parseInt(args[0]);
  const sütun = parseInt(args[1]);
  const mayın = parseInt(args[2]);

  if (!satır) {
    return message.channel.send(':warning: Lütfen satır sayısını belirtin.');
  }

  if (!sütun) {
    return message.channel.send(':warning: Lütfen sütun sayısını girin.');
  }

  if (!mayın) {
    return message.channel.send(':warning: Lütfen mayın sayısını belirtiniz.');
  }

  const mayınoyun = new Minesweeper({ satır, sütun, mayın });
  const ss = mayınoyun.start();

  return ss
    ? message.channel.send(ss)
    : message.channel.send(':warning: Geçersiz veri.');
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['mayın-tarlası'],
  permLevel: 0
}

exports.help = {
  name: 'mayıntarlası',
  description: "",
  usage: ''
}
