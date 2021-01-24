const Discord = require("discord.js"),
  db = require("quick.db");

module.exports.run = async (client, message, args) => {
  let kontrol = await db.fetch(`dil_${message.guild.id}`);
  let prefix = (await db.fetch(`prefix_${message.guild.id}`)) || "g!";
  if (kontrol == "TR_tr") {
    let kanal = await db.fetch(`slimido_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Ban limit zaten ayarlanmamış!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`slimido_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Ban limit sıfırlandı!`);
    message.channel.send(embed);
    return;
  } else {
    let kanal = await db.fetch(`slimido_${message.guild.id}`)
    if (!kanal) {
      const embed = new Discord.RichEmbed()
        .setColor("BLACK")
        .setFooter(client.user.username, client.user.avatarURL)
        .setDescription(`Ban limit is not already set!`);
      message.channel.send(embed);
      return;
    }
    db.delete(`slimido_${message.guild.id}`);
    const embed = new Discord.RichEmbed()
      .setColor("BLACK")
      .setFooter(client.user.username, client.user.avatarURL)
      .setDescription(`Ban limit reset!`);
    message.channel.send(embed);
    return;
  }
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ban-limit-reset"],
  permLevel: 3
};

exports.help = {
  name: "ban-limit-sıfırla",
  description: "ban-limit-sıfırla",
  usage: "ban-limit-sıfırla"
};
