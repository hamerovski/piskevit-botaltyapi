const Discord = require("discord.js");
const bot = require("../bot.js");

exports.run = (client, message) => {
  if (!message.guild) {
    return message.author.send(``);
  }
  if (message.author.bot === true) {
    return;
  }
  if (!message.guild) {
    const motion = new Discord.MessageEmbed()
      .setColor(0xff0000)
      .setTimestamp()
      .setAuthor(message.author.username, message.author.avatarURL)
      .addField("**Eğlence Komutları Özel Mesajlarda Kullanılamaz!**");
    return message.author.sendEmbed(motion);
  }
  if (message.channel.type !== "dm") {
    const motion = new Discord.MessageEmbed()
      .setAuthor("Bot Ağladı Hemen Ondan Özür Dile Ya :(")
      .setColor(3447003)
      .setTimestamp()
      .setDescription("")
      .setImage(
        `https://media3.giphy.com/media/2rtQMJvhzOnRe/giphy.gif?cid=790b76115d398a482f6177556b32d70a&rid=giphy.gif`
      );
    return message.channel.send(motion);
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "ağla",
  description: "Botu Ağlatırsınız.",
  usage: "ağla"
};
