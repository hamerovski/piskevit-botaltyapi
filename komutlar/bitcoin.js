const snekfetch = require("snekfetch");

exports.run = async (bot, message, args) => {
    snekfetch.get("https://blockchain.info/ticker").then((body) => {
        message.channel.send({
            embed: {
                title: "Bitcoin Değer",
                description: "Değerlerin her biri, farklı ülkelerde değişecek olan bir Bitcoin'in değeridir.",
                color: 15844367,
                fields: Object.keys(body.body).map((c) => {
                    return {
                        name: c,
                        value: "**Fiyat**: " + body.body[c].symbol + body.body[c].buy + "\n**Satış Değeri**: " + body.body[c].symbol + body.body[c].sell,
                        inline: true
                    }
                })
            }
        })
    }).catch((error) => {
        message.channel.send({
            embed: {
                title: "Hata!",
                color: 10038562,
                description: "Bitcoin fiyatlarını alırken beklenmeyen bir hata oluştu."
            }
        })
        console.error("Bitcoin Bilgisi alınamadı!", error.message)
        
    })
    
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["bc"],
  permLevel: 0
};

module.exports.help = {
  name: 'bitcoin',
  description: 'Ülkelerin bitcoin değerlerini gösterir',
  usage: 'bitcoin'
};