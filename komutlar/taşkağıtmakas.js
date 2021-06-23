const Discord = require('discord.js');
const modül = require('film-apisi')

exports.run = (client, message, args) => {

async function rastgele() {
    let sonuç = await modül.rastgele('dizi') //değerler dizi veya film
     message.channel.send(new Discord.MessageEmbed().setColor('BLACK').setDescription(`**Dizinin İsmi:** \`${sonuç.ad}\`\n **Dizinin Puanı :** \`${sonuç.puan}\` \n **Dizinin Çıkış Yılı :** \`${sonuç.yıl}\` \n\n :arrow_down: **Dizinin POSTERİ** :arrow_down:`).setImage(`${sonuç.poster}`));
    
    console.log(sonuç)
      }
      rastgele()
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
};

exports.help = {
    name: 'dizi',
  description: 'serendia squad',
  usage: 'dizi'
};//komutlar/dizi.js
