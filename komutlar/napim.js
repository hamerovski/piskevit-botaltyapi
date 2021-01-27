const Discord = require("discord.js");

exports.run = (client, message, params) => {

const virus = new Discord.MessageEmbed()

      .setAuthor(message.author.username + " Lafı Koydu !!")
      .setColor("RED")
       .setFooter("Piskevit")
      .setTimestamp()
      .setDescription("")
      .setImage('https://cdn.discordapp.com/attachments/746447848631042231/779019603904430130/20201119_184539.jpg');

return message.channel.send(virus);

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "napim",
  description: "Lafı Koy",
  usage: "napim"
};
