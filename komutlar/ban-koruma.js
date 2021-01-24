const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Lütfen log kanalını etiketleyiniz!`);
      message.channel.send(embed);
      return;
    }
    db.set(`bank_${message.guild.id}`, kanal.id);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Ban limit log kanalı; ${kanal} olarak ayarlandı!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = message.mentions.channels.first();
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Please tag the log channel!`);
      message.channel.send(embed);
      return;
    }
    db.set(`bank_${message.guild.id}`, kanal.id);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Ban limit log channel; Set to ${kanal}!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban-protection"],
  permLevel: 3
};

exports.help = {
  name: "ban-koruma",
  description: "ban-koruma",
  usage: "ban-koruma"
};
