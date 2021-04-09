const Discord = require("discord.js");
const db = require("quick.db");

exports.run = async (client, message, args) => {
  let member =
    message.mentions.members.first() || message.guild.members.cache.get(args[0]);
  if (!member)
    return message.channel.send(
      new Discord.MessageEmbed()
        .setDescription("Bir Kullanıcı Etiketle")
        .setColor("DARK_PURPLE")
    );
  if (!member.voice.channel)
    return message.reply("Bu Kullanıcı Ses Kanalında Değil");
    let seskanali = member.voice.channel.name;

    if (message.member.voice.selfDeaf == true) {
      let sorgu = new Discord.MessageEmbed()
        .setColor("GOLD")
        .setAuthor(message.author.tag, message.author.avatarURL())
  
        .setDescription(
          `${member} İsimli Kişi **${seskanali}** Ses Kanalında Şuan Aktif Ve Kulaklığı Kapalı`
        );
  
      message.channel.send(sorgu);
    } else {
      let sorguu = new Discord.MessageEmbed()
        .setColor("GREY")
        .setAuthor(message.author.tag, message.author.avatarURL())
        .setDescription(
          `${member} İsimli Kişi **${seskanali}** Ses Kanalında Şuan Aktif Ve Kulaklığı Açık`
        );
  
      message.channel.send(sorguu);
    }
  
    if (!member.voice.channel)
      return message.reply("Ses Kanalında Yok");
  };

exports.conf = {
  enabled: true,
  aliases: ["kontrol"],
  permLevel: 0
};

exports.help = {
  name: "sessorgu",
  usage: `sesbilgi`
};
