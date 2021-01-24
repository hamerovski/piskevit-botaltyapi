let Discord = require("discord.js");
let db = require("quick.db")
module.exports.run = async (client, message, args) => {
  
  
  let yazıengel = args.slice(0).join(' ')
  
  let yazı = args.slice(0).join(' ')
  
  if(!yazı) return message.channel.send(`Editlenecek Yazıyı Söyle!`)
  if(!yazıengel) return message.channel.send('@everyone',`everyone çekmek yasak !`)

  message.channel.embed(`Mesaj Editleniyor!`).then(a => {
    setTimeout(m => {
      a.edit(yazı)
      
      
    }, 3000)
  })
}

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["edit"],
  permLevel: 0
};

module.exports.help = {
  name: 'mesaj-edit'
};
