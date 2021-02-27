const request = require('request-promise-native');
const db = require('quick.db')

exports.run = async (Bastion, message, args) => {
  if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}

  try {
    if (!message.channel.nsfw)    {
      return message.reply("**Yalnızca NSFW kanallarda kullanılabilir.**");
    }
    if (args.length < 1) {
      return message.reply("**Doğru Kullanım**: !gif <aranacak gif> gifler GIPHY sitesinden sonuçlar çıkıyor.");
    }
   
    let options = {
      url: 'http://api.giphy.com/v1/gifs/search',
      qs: {
        q: encodeURI(args.join('+')),
        api_key: 'dc6zaTOxFJmzC',
        limit: 10,
        offset: 0
      },
      json: true
    };
    let response = await request(options);
    if (response.data.length) {
      message.channel.send({
        embed: {
          color: 0x00AE86,
          title: `GIF aranıyor: ${args.join(' ')}`.slice(0, 256),
          image: {
            url: response.data[Math.floor(Math.random() * response.data.length)].images.original.url
          },
        }
      }).catch(e => {
        console.log(e);
      });
    } 
    else {
      return Bastion.emit('hata', '', Bastion.i18n.error(message.guild.language, 'bulunamadı', 'görsel'), message.channel);
    }
  }
  catch (e) {
    if (e.response) {
      return Bastion.emit('hata', e.response.statusCode, e.response.statusMessage, message.channel);
    }
    console.log(e);
  }
};
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["gif-search", "gif"],
  permLevel: 0
};
exports.help = {
  name: 'gifara',
  description: "Mesajınızla ilgili gifleri Giphy'da aratır.",
  usage: 'gifara <aranacak gif>'
};
