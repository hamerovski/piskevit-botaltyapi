const Discord = require('discord.js')

var gif = [
  "https://www.falderyasi.com/medya/tarot/adalet-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/araba-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asalarin-altilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asalarin-beslisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asalarin-dokuzlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asalarin-dortlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asalarin-ikilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asalarin-kralicesi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asalarin-onlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asalarin-sekizlisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asalarin-uclusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asalarin-yedilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asiklar-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/asilan-adam-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/ay-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/aziz-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/azize-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/buyucu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/degnek-asi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/degnek-krali-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/degnek-prensi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/degnek-sovalyesi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/denge-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/dunya-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/ermis-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/guc-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/gunes-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/gunes-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/imparator-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/imparatorice-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/joker-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kader-carki-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kilic-prensi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-altilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-asi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-beslisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-dokuzlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-dortlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-ikilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-krali-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-kralicesi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-onlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-sekizlisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-sovalyesi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-sovalyesi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-uclusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kiliclarin-yedilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kule-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupa-krali-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupa-prensi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalarin-altilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalarin-asi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalarin-beslisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalarin-dokuzlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalarin-dortlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalarin-ikilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalarin-onlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalarin-sekizlisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalarin-sovalyesi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalarin-uclusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalarin-yedilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/kupalar%C4%B1n-kralicesi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/mahkeme-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/olum-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/seytan-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsim-prensi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlarin-altilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlarin-asi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlarin-beslisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlarin-dokuzlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlarin-dortlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlarin-ikilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlarin-krali-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlarin-onlusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlarin-sovalyesi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlarin-uclusu-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlarin-yedilisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlerin-kralicesi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/tilsimlerin-sekizlisi-tarot-karti-www.falderyasi.com.png",
  "https://www.falderyasi.com/medya/tarot/yildiz-tarot-karti-www.falderyasi.com.png"
]
 exports.run = function(client, message, args) {

let gifler = gif[Math.floor(Math.random() * gif.length)]
message.channel.send(
  new Discord.MessageEmbed()
 .setColor(message.guild.me.displayColor)
   .setTitle('İşte senin kartın!')
     .setImage(gifler)

  .setFooter('  WOW')
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
