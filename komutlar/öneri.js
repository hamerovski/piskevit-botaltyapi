const Discord = require("discord.js");
 
exports.run = function(client, message, args) {
  var öneri = args.slice(0).join(" ");
  var guildID = "796847477080850462"; // Sunucu ID
  var channelID = "812853158824378388"; // Kanal ID
  if (!öneri) {
    return message.reply(
      "Bir mesaj belirtin! Doğru kullanım: **-öneri <mesaj>**"
    );
  } else {
    var embed = new Discord.RichEmbed()
 
      .setTimestamp()
      .setColor("RANDOM")
      .addField("Eylem:", "Öneri")
      .addField("Kullanıcı:", message.author.tag)
      .addField("ID", message.author.id)
      .addField("Öneri", öneri);
    client.guilds
      .get(guildID)
      .channels.get(channelID)
      .send(embed);
    message.channel.send("Öneriniz alınmıştır! Teşekkür ederiz...");
  }
} 
exports.conf = {
  enabled: true,
  guildOnly: false, 
  aliases: ["istek"], 
  permLevel: 0
};
exports.help = {
  name: "öneri",
 description: "Bot hakkındaki önerilerinizi bot sahibine ulaştırır.",
 usage: "öneri <mesaj>"
};
