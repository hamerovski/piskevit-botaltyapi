const Discord = require("discord.js");
const bot = require("../bot.js");
exports.run = (client, message, params) => {
  var ne = [
    "https://cdn.discordapp.com/attachments/810245973305458732/810247773655007262/12.jpg
Bu kart; vazgeçişi daha iyiye ulaşmak için elindekini kurban etme anlamı taşır.Ruhsal açıdan kurban etme ise kendini ibadete adamayı gösterir.Bu inanç sistemi ve olaylara bakış açısı tamamen değişebilir.Kişi,bireysel ihtiyaçlarını öne alarak diğerlerine öncelik vermekten vazgeçebilir."
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
  name: "tarot"
};
