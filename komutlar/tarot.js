const Discord = require('discord.js')

var gif = [
  "https://www.falderyasi.com/medya/tarot/adalet-tarot-karti-www.falderyasi.com.png ADALET KARTI"
]
 exports.run = function(client, message, args) {

let gifler = gif[Math.floor(Math.random() * gif.length)]
message.channel.send(
  new Discord.MessageEmbed()
 .setColor(message.guild.me.displayColor)
   .setTitle('İşte senin kartın!')
     .setImage(gifler)

  .setFooter('  Haydi anlamına bak; http://sozluk.falderyasi.com/tarot-kartlari-ve-anlamlari')
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
