const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  //let shardi = bot.shard.id + 1;

  if (kontrol == "TR_tr") {
    const duration = moment
      .duration(bot.uptime)
      .format("D [gün], H [saat], m [dakika], s [saniye]");
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .addField(`Versiyon`, `0.1`, true)
      .addField(`Aktiflik Süresi`, duration, true)
      .addField(`Sunucular`, bot.guilds.size.toLocaleString(), true)
      .addField(
        `Kullanıcılar`,
        bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
        true
      )
      .addField(`Gecikme`, bot.ping + "ms", true)
      .addField(
        `Ram Kullanımı`,
        `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
        true
      )
      //.addField(`Toplam Shard`, bot.shard.count, true)
      //.addField(`Bulunduğum Shard`, shardi, true)
      //.addField(`Genel Shard`, `${shardi}/${bot.shard.count}`, true)
      .addField(`Destek Sunucusu`, `[Tıkla!](https://discord.gg/dh7W6nQvvB)`, true)
      .addField(
        `Botu Ekleyin`,
        `[Tıkla!](https://discord.com/oauth2/authorize?client_id=801730181974327307&scope=bot&permissions=8)`,
        true
      )
      .addField(`Bota Oy Verin`, `[Tıkla!](https://top.gg/bot/665232633529368576/vote)`, true)
      .setFooter(bot.user.username, bot.user.avatarURL);
    message.channel.send(embed);
  } else {
    const duration = moment
      .duration(bot.uptime)
      .format("D [days], H [hours], m [minutes], s [seconds]");
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .addField(`Version`, `0.1`, true)
      .addField(`Activity Time`, duration, true)
      .addField(`Guilds`, bot.guilds.size.toLocaleString(), true)
      .addField(
        `Members`,
        bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(),
        true
      )
      .addField(`Ping`, bot.ping + "ms", true)
      .addField(
        `Used Ram`,
        `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
        true
      )
     // .addField(`Shard Count`, bot.shard.count, true)
      //.addField(`Shard İd`, shardi, true)
      //.addField(`General View`, `${shardi}/${bot.shard.count}`, true)
      .addField(`Support Server`, `[Click!](https://discord.gg/VbMuaVe)`, true)
      .addField(
        `Add Bot`,
        `[Click!](https://discordapp.com/oauth2/authorize?client_id=665232633529368576&scope=bot&permissions=8)`,
        true
      )
      .addField(`Vote The Bot`, `[Click!](https://top.gg/bot/665232633529368576/vote)`, true)
      .setFooter(bot.user.username, bot.user.avatarURL);
    message.channel.send(embed);
  }
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bot-info"],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "bot-bilgi",
  description: "bot-bilgi",
  usage: "bot-bilgi"
};
