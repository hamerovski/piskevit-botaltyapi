const Discord = require("discord.js");
const bot = require("../bot.js");
exports.run = (client, message, params) => {
  var ne = [
    "https://www.falderyasi.com/medya/tarot/adalet-tarot-karti-www.falderyasi.com.png
    **Tarot Adalet Kartı**
    Dengeyi ve olumlu kararları simgeler.
    Özellikle hayatın dengesini kuran hareket, bu kartı ifade eder. 
    Bu kartı seçen kişi; kalp, zihin, ruh sağlığı, materyalizm, iş ve hareket için eşit zaman garantisiyle hayatını düzenlemeye başlar. 
    Bu kişi, adaleti sağlamak için iç dürtülerini kullanır. “Ne ekersen onu biçersin” adalet kartının temel anlamıdır. 
    Ayrıca bu kart, okulu sembolize eder.
",
    "**deneme**"
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
