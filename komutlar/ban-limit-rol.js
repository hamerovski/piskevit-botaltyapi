const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let kanal = message.mentions.roles.first();
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Lütfen bir rol etiketleyiniz!`);
      message.channel.send(embed);
      return;
    }
    db.set(`banrol_${message.guild.id}`, kanal.id);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Ban limit rolü; ${kanal} olarak ayarlandı!\nNot: Eğer ayarlardan herhangi bir limit sayısı ayarlanmadıysa işlemez!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = message.mentions.roles.first();
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Please tag a role!`);
      message.channel.send(embed);
      return;
    }
    db.set(`banrol_${message.guild.id}`, kanal.id);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Ban limit role; Set to ${kanal}!\nNote: It will not work if no limit is set from the settings!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban-limit-role"],
  permLevel: 3
};

exports.help = {
  name: "ban-limit-rol",
  description: "ban-limit-rol",
  usage: "ban-limit-rol"
};
