const Discord = require('discord.js');

exports.run = (client, message) => {
  
  const davet = new Discord.MessageEmbed()
  .setColor('ORANGE')
  .setThumbnail('https://media.discordapp.net/attachments/720029424216440923/735255651638313061/727894683061321759.gif')
  .setDescription(`Bu Botu Sunucuna Ekleyebilirsin Linki Aşşağıda

https://discord.com/oauth2/authorize?client_id=801730181974327307&scope=bot&permissions=8

`)
  message.channel.send(davet)
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
}
exports.help = {
  name: "davet"
}
