const Discord = require("discord.js");

exports.run = (client, message, params) => {

const virus = new Discord.MessageEmbed()

      .setAuthor("YKS SAYAÇ")
      .setColor("RANDOM")
      function prepareFrame() {
        var ifrm = document.createElement("iframe");
        ifrm.setAttribute("src", "http://google.com/");
        ifrm.style.width = "640px";
        ifrm.style.height = "480px";
        document.body.appendChild(ifrm);
    }

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
