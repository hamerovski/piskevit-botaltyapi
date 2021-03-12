
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
exports.run =async (client,message,args)=>{

let f = db.fetch(`odam_${message.author.id}`)
let f2 = db.fetch(`özeloda_${message.guild.id}`)
if(!f2) return message.reply('Bu Sunucuda Özel oda sistemi hiç bir kanala ayarlanmamış. **'+ `${client.prefix}yardım**`)
if(!f) return message.reply('Senin Bir odan Bulunmuyor, ``'+f2.map(a => a.channel.name).join(" - ")+'`` Ses Kanallarından Birine girip Açabilirsin.')
let arh = args[0]
if(isNaN(arh) || !arh) return message.reply(`Bir Sayı Girmelisin.`)
if(arh > 96 || arh < 8) return message.reply(`Max **96-8** Arası BitHızı Girebilirsiniz.`)
//options.userLimit
await message.guild.channels.cache.get(f.channel.id).edit({bitrate : arh*1000})

message.reply(`Odanızın Bithızı **${arh}kbps** Olarak ayarlandı.`)

}


exports.help = {
    name : "bitrate",
    aliases : ['bit-rate','bithızı'],
    perm : [],
    botPerm : ['MANAGE_CHANNELS'],
    type : "oda"
}
exports.play  = {
    desc : "Odanızın bithızı'nı ayarlayabilirsiniz.",
    cmd : "bitrate <96-8>"
}