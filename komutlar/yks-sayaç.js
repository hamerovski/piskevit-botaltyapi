const Discord = require("discord.js");

exports.run = (client, message, params) => {

const virus = new Discord.MessageEmbed()

      .setAuthor("YKS SAYAÇ")
      .setColor("RANDOM")
       .setFooter("Piskevit")
      .setTimestamp()
      .setDescription("")
      .setImage('https://www.powr.io/countdown-timer/i/27534675#page');

return message.channel.send(virus);
 
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "yks-sayaç",
  description: "YKS SAYAÇI BY HAMEROVSKİ",
  usage: "yks-sayaç"
};
