const Discord = require('discord.js')

var gif = [
  'https://cdn.discordapp.com/attachments/810245973305458732/810247773655007262/12.jpg'
]
 exports.run = function(client, message, args) {

let gifler = gif[Math.floor(Math.random() * gif.length)]
message.channel.send(
  new Discord.MessageEmbed()
 .setColor(message.guild.me.displayColor)
   .setTitle('Tarot Kart Sistemi')
     .setImage(gifler)

  .setFooter('  İşte senin kartın!')
   .setTimestamp()

  )

}

exports.conf = {

  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0

};

exports.help = {

  name: 'tarot',
  description: 'Random tarot kartı seçer.',
  usage: 'tarot'

}
