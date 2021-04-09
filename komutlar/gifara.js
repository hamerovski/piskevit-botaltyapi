const Discord = require('discord.js');
const db = require('quick.db')
const fetch = require('node-fetch')
exports.run = (client, message, args) => { 
  let apikey = "MQ11794US9LB"//NOT KISMINI OKU!
  let sexdiyorum = args.slice(0).join(" ")
  let osuruk = ["1","2","3","4","5","6","7","8","9","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41","42","43","44","45","46","47","48","49","50"]  
  let randomdene = (osuruk[Math.floor(Math.random() * osuruk.length)])
  fetch(`https://g.tenor.com/v1/search?q=${sexdiyorum}&key=${apikey}&limit=1&pos=${randomdene}`).then(res => res.json()).then(json => { 
 if(!sexdiyorum) return message.channel.send("neyi arıcaksın?")
let halilazdım = new Discord.MessageEmbed()
  .setAuthor(client.user.username, client.user.avatarURL())
  .setTitle("İşte gifin")
  .setDescription(`**Gif ismi ${json.results[0].h1_title}**\n **Gif id ${json.results[0].id}**`)
  //.setFooter('luki','https://cdn.discordapp.com/avatars/792820827711471636/623a613c02d1f770171dc2a663026adc.webp')
  .setImage(json.results[0].media[0].gif.url) 
  .setColor('#ec3b83')
message.channel.send(halilazdım)    
  })
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ['gif-search', 'gifara'], 
  permLevel: 0
};

exports.help = {
  name: 'gif-ara',
  description: '', 
  usage: ''
};
