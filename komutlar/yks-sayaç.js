const Discord = require ("discord.js");
const db = require("quick.db");
const ms = require("parse-ms");

exports.run = async (client, message, args) => {

  let yilbasi = new Date("2021-06-26 10:15:00");
  let zaman = ms(yilbasi - Date.now());

return message.channel.send(
    `:label: **YKS Sayacına Ait Bilgiler Aşşağıda;** \n\n> Gün: **${zaman.days}** \n> Saat: **${zaman.hours}** \n> Dakika: **${zaman.minutes}** \n\n:white_check_mark: **YKS'ye kalan vakit yukarıda dostum!**`
  );
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  kategori: "eğlence",
  permLevel: 0
};

exports.help = {
  name: "yks-sayaç",

  description:
    "YKS sınavına kaç gün kaç saat kaç dakika kaç saniye olduğunu gösterir.",
  usage: "yks-sayaç"
};
