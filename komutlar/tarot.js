const Discord = require('discord.js')

var gif = [
  'https://cdn.discordapp.com/attachments/810245973305458732/810247773655007262/12.jpg      Bu kart; vazgeçişi daha iyiye ulaşmak için elindekini kurban etme anlamı taşır.Ruhsal açıdan kurban etme ise kendini ibadete adamayı gösterir.Bu inanç sistemi ve olaylara bakış açısı tamamen değişebilir.Kişi,bireysel ihtiyaçlarını öne alarak diğerlerine öncelik vermekten vazgeçebilir.'
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
