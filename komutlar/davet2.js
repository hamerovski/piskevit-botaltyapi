const  Discord = require("discord.js"); 
const { MessageButton } = require('discord-buttons');
exports.run = (client, message, args) => {
  const embed = new Discord.MessageEmbed()
  .setTitle(':book:  Lİnklerim  :book:')

  let buton1 = new MessageButton()
  .setStyle('green')
  .setLabel('Davet') 
  .setID('davet')
  //
  let buton2 = new MessageButton()
  .setStyle('green') 
  .setLabel('Destek sunucusu') 
  .setID('destek')

  let buton3 = new MessageButton()
  .setStyle('green') 
  .setLabel('Web site') 
  .setID('Website')

  let buton4 = new MessageButton()
  .setStyle('green') 
  .setLabel('Oy ver') 
  .setID('oy')

message.channel.send({embed: embed , buttons: [
  buton1, buton2, buton3, buton4
]});}


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'davet2'
};
