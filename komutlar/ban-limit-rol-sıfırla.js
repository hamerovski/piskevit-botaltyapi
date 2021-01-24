const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let kanal = await db.fetch(`banrol_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Ban limit rolü zaten ayarlanmamış!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`banrol_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Ban limit rolü sıfırlandı!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = await db.fetch(`banrol_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Ban limit role is not already set!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`banrol_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Ban limit role reset!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban-limit-role-reset"],
  permLevel: 3
};

exports.help = {
  name: "ban-limit-rol-sıfırla",
  description: "ban-limit-rol-sıfırla",
  usage: "ban-limit-rol-sıfırla"
};
