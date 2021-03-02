const Discord = require("discord.js");
const client = new Discord.Client();

exports.run = (client, message) => {
  let user = message.mentions.members.first();
  if (!user) return message.reply("Bir kullanıcı etiketlemelisin!");
  if (user.id === message.author.id) return message.reply('Kendinden bişey dızlayamasın düdük!');
  if (user.id === `796460091334590525`) return message.reply('Benden bişey dızlayamasın düdük!');

  var dıızla = [
    "5 ELMAS DIZLADIN ",
    "BÜYÜLÜ ELMAS KAZMA DIZLADIN",
    "BÜYÜLÜ ELYTRA DIZLADIN HEMDE FİŞEKLE BERABER",
    "KÖYLÜ DIZLADIN",
    "BÜYÜ MASASI DIZLAMAYA ÇALIŞIRKEN YAKALANDIN",
    "50TL LİK TAMİR KİTABI DIZLADIN",
    "BÜYÜLÜ ALTIN ELMA DIZLADIN",
    "KEMİK DIZLADIN TEBRİKLER EMADI BESLEMEYİ UNUTMA🤪",
    "CİCİ BEBE DIZLADIN ARTIK BANADA VERİRSİN 🤪",
    "CONCON KRİSTALİ DIZLADIN",
    "MELİS BABANIN GÖZLÜĞÜNÜ DIZLAMAYA ÇALIŞIRKEN YAKALANDIN",
    "MİNECRAFT PRE DIZLAMAYA ÇALIŞIRKEN YAKALANDIN",
    "ŞEREFİNİ DIZLADIN",
    "İKİNCİ BİR BEYİN DIZLADIN DIZLADIN"
  ];
  var dızla = dıızla[Math.floor(Math.random() * dıızla.length)];
  message.channel
    .send("DIZLAMAYA GİDİYORSUN<a:emoji_6:807914379479089173>")
    .then(nmsg => nmsg.edit(`${user} KİŞİSİNDEN ${dızla}<a:emoji_18:807915975072415764>`));
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["dizla"],
  permLevel: 0
};

exports.help = {
  name: "dızla",
  description: "dızla",
  usage: "dızla"
};
