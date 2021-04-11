const Discord = require("discord.js");
const eksisozluk = require("eksisozlukjs");

exports.run = async (bot, message, args) => { 

eksisozluk.getEntry(args[0],function(result){
 const devtr = new Discord.MessageEmbed()
 .setTitle(bot.user.username + " - Ekşi Sözlük")
 .addField("Metin",result[0].text)
 .addField("Yazar",result[0].author)
 .setFooter(message.author.tag,message.author.avatarURL())
    message.channel.send(devtr)
})
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['ekşi','eksi'],
  permLevel: 0
};

exports.help = {
  name: 'ekşisözlük',
  description: '',
  usage: ''
};
