const Discord = require("discord.js");
const db = require("quick.db");
const hast = require("hastebin-gen");
const m = require("nodme")
module.exports.run = async (client, message, args) => {
  let v11Kod = args.slice(0).join(" ");
  if (!v11Kod) {
    return message.channel.send(
      "Kodunu V12 Geçirmem İçin Kodunu Yazmalısın."
    );
  }
  if (v11Kod.length > 1800) {
    return message.channel.send(
      "Kodun 1800 Karakterden Fazla Bölerek Yazarmısın ?"
    );
  }
  let ilkadım = m.replace(v11Kod)
  let v12kod = ilkadım
    .split("get")
    .join("cache.get")
    .split("addRole")
    .join("roles.add")
    .split("removeRole")
    .join("roles.remove")
    .split("users.exists")
    .join("users.cache.some")
    .split("channels.exists")
    .join("channels.cache.some")
    .split("find")
    .join("cache.find")
    .split("RichEmbed")
    .join("MessageEmbed")
    .split("fetchUser")
    .join("users.fetch")
    .split("fetchMember")
    .join("users.members")
    .split("fetchMessage")
    .join("users.messages")
    .split("fetchPinnedMessages")
    .join("messages.fetchPinned")
    .split("sendMessage")
    .join("send")
    .split("sendEmbed")
    .join("send")
    .split("sendCode")
    .join("send")
    .split("sendFile")
    .join("send")
    .split("sendFiles")
    .join("send")
    .split("setRoles")
    .join("roles.set")
    .split("colorRole")
    .join("roles.color")
    .split("highestRole")
    .join("roles.highest")
    .split("hoistRole")
    .join("roles.hoist")
    .split("ban")
    .join("members.ban")
    .split("unban")
    .join("members.unban")
    .split("avatarURL")
    .join("avatarURL()")
    .split("displayAvatarURL")
    .join("displayAvatarURL()")
    .split("iconURL")
    .join("iconURL()")
    .split("splashURL")
    .join("splashURL()")
    .split("playFile")
    .join("play")
    .split("playStream")
    .join("play")
    .split("playArbitraryInput")
    .join("play")
    .split("playBroadcast")
    .join("play")
    .split("playOpusStream")
    .join("play")
    .split("playConvertedStream")
    .join("play")
    .split("dispatcher.end()")
    .join("dispatcher.destroy()")
    .split("createVoiceBroadcast")
    .join("voice.createBroadcast")
    .split("broadcast.dispatchers")
    .join("broadcast.subscribers")
    .split("forEach")
    .join("cache.forEach")
   .split("client.ping")
    .join("client.ws.ping")

  if (v11Kod == v12kod) {
    return message.channel.send("Bu Kod V12 İle Uyumlu\nOyuncular Şehri");
  }

    
    const embed = new Discord.MessageEmbed()
    .addField(
      `:outbox_tray: V12 Kod:`,
      `   \`\`\`
${v12kod}\`\`\` `
    )


  message.channel.send(embed);
  message.author.send(   `:outbox_tray: V12 Kod:`,
      `   \`\`\`
${v12kod}\`\`\` `)
  db.add(`çevrilenkod`, 1);
 
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ç", "çevir"],
  permLevel: 0
};

module.exports.help = {
  name: "v11tov12",
  description: "Botta bulunan tüm komutları gösterir",
  usage: "Oyuncular Şehri"
};
