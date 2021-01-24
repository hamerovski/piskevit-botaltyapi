const Discord = require ("discord.js")

exports.run = async (client, message, args) => {
  
  
  const itfaiye = new Discord.MessageEmbed()
  .setTitle("Korkma İtfaiye Yolda!!")
  .setColor('#d60c0c')
  .setImage("https://phoneky.co.uk/thumbs/screensavers/down/fun/funnyfiree_IwX3hWNj.gif")
  message.channel.send(itfaiye)
};


exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["110", "ara110"]
};

exports.help = {
  name: "itfaiye",
  description: "itfaiye falan geliyo işte",
  usage: "p.itfaiye işteeğğ nolcak başka"
};