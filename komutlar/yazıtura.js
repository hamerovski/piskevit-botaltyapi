const Discord = require('discord.js')

exports.run = async (client, msg, args) => {
  let yazıtura=[
    "Yazı",
    "Tura",

  ]
var para = yazıtura[Math.floor(Math.random() * yazıtura.length)];

exports.run = (client, message, args) => {

  let yazıİçeriği = args.slice().join(' ')
  msg.channel.send('Yazı mı Tura mı?')
  .then(nmsg => nmsg.edit('Yazı mı Tura mı?')) 
  .then(nmsg => nmsg.edit('Yazı mı Tura mı?')) 
  .then(nmsg => nmsg.edit('Yazı mı Tura mı?')) 
  .then(nmsg => nmsg.edit('Yazı mı Tura mı?')) 
  .then(nmsg => nmsg.edit('Yazı mı Tura mı?')) 
  .then(nmsg => nmsg.edit('Yazı mı Tura mı?')) 
  .then(nmsg => nmsg.edit('Yazı mı Tura mı?')) 
  .then(nmsg => nmsg.edit('https://64.media.tumblr.com/1e44de7f02e71d30c66fed615a6803b1/tumblr_inline_pagvo01aaQ1ttj61q_640.gif'))
  .then(nmsg => nmsg.edit('https://64.media.tumblr.com/1e44de7f02e71d30c66fed615a6803b1/tumblr_inline_pagvo01aaQ1ttj61q_640.gif'))
  .then(nmsg => nmsg.edit('https://64.media.tumblr.com/1e44de7f02e71d30c66fed615a6803b1/tumblr_inline_pagvo01aaQ1ttj61q_640.gif'))
  .then(nmsg => nmsg.edit(`**${para}** çıktı`)) 
}

  }
  


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
 };
 
exports.help = {
  name: 'yazıtura',
  description: 'yazitura',
  usage: 'yazıtura'
 }
