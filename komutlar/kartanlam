const Discord = require("discord.js");
const bot = require("../bot.js");
exports.run = (client, message, params) => {
  var ne = [
    "**Bu siteden anlamlarına bak!**  http://sozluk.falderyasi.com/tarot-kartlari-ve-anlamlari"
  ];
  var daşşak = Math.floor(Math.random() * ne.length);
  const motion = new Discord.MessageEmbed()
    .setDescription(`${ne[daşşak]}`)
    .setColor(0xe2ff00)
    .setTimestamp();
  message.channel.send(motion);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "tarotanlam"
};
