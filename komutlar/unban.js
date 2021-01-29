const Discord = require("discord.js");
module.exports.run = async (bot, message, args) => {
  if (!message.member.hasPermission("BAN_MEMBERS"))
    return message.channel.send(
      "BU KOMUTU KULLANA BILMEK ICIN YETKIN YETERSIZ!"
    );
  let unbanLog = message.guild.channels.find(m => m.name === "mod-log");
  if (!unbanLog) {
    message.guild.createChannel("mod-log");
  }
  let bannedMember = args[0];
  if (!bannedMember)
    return message.channel.send(
      "BAN KALDIRILACAK ID YAZ | **KULLANIM:** `unban @user <reason>`"
    );

  let bannedReason = args.slice(1).join(" ");
  if (!bannedReason)
    return message.channel.send(
      "BIR SEBEP YAZ | **KULLANIM:** `>unban @user <reason>`"
    );

  if (!message.guild.me.hasPermission("BAN_MEMBERS"))
    return message.channel.send("BAN KALDIRMA YETKIM YOK");

  try {
    message.guild.unban(bannedMember, bannedReason);
    message.channel.send(`${bannedMember} ID'li KISININ **BANI KALKTI**`);
  } catch (e) {
    console.log(e.message);
  }

  let unbanLogEmbed = new Discord.RichEmbed()
    .setAuthor(`BILDIRIM | Unban`, bannedMember.displayAvatarURL)
    .setDescription(
      `**ID:** ${bannedMember}\n \n**KALDIRAN:** ${message.author}\n \n**SEBEP:** ${bannedReason}\n \n**BANIN KALKTIGI KANAL:** ${message.channel}`
    )
    .setColor("GREEN")
    .setTimestamp()
    .setFooter(message.guild.name);
  setTimeout(() => {
    message.guild.channels.find(m => m.name === "mod-log").send(unbanLogEmbed);
  }, 3000);
};
module.exports.conf = {
  aliases: []
};
module.exports.help = {
  name: "unban"
};
