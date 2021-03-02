const Discord = require("discord.js");
exports.run = async (client, message, args, db, ayarlar) => {
  try {
    let kişi = message.mentions.users.first();
    const hataembed = new Discord.MessageEmbed()
      .setColor("RED")
      .setTimestamp()
      .addField("HATA:", "Lütfen Birisini Etiketle ve Bir Yazı Yaz!");
    if (message.mentions.users.size < 1) return message.reply(hataembed);
    let yazi = args.slice(1).join(" ");
    if (!yazi) return message.reply(hataembed);
    
    if (message.content.includes("@everyone")) return message.reply("Fakemesaj Everyone İçeremez Şakacı Jojuk Seni");
        if (message.content.includes("@here")) return message.reply("Fakemesaj Here İçeremez Şakacı Jojuk Seni");


    
    
    message.delete();      
  message.channel
      .createWebhook(kişi.username, {
        avatar: kişi.avatarURL()
      })
      .then(hook => {
        hook.send(yazi);
        setTimeout(function() {
          hook.delete();
        }, 3000);
      })
      .catch(console.error);
  } catch (err) {
    global.errs(err, message).catch(e => console.log(e.stack));
  }
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "fakemesaj",
  description: "fakemesaj",
  usage: "fakemesaj"
};
