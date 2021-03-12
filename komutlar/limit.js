
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
exports.run =async (client,message,args)=>{

let f = db.fetch(`odam_${message.author.id}`)
let f2 = db.fetch(`özeloda_${message.guild.id}`)
if(!f2) return message.reply('Bu Sunucuda Özel oda sistemi hiç bir kanala ayarlanmamış. **'+ `${client.prefix}yardım**`)
if(!f) return message.reply('Senin Bir odan Bulunmuyor, ``'+f2.map(a => a.channel.name).join(" - ")+'`` Ses Kanallarından Birine girip Açabilirsin.')
let arh = args[0]
if(isNaN(arh) || !arh) return message.reply(`Bir Sayı Girmelisin.`)
if(arh > 99) return message.reply(`Max **99-0** Arası Limit Girebilirsiniz.`)
//options.userLimit
await message.guild.channels.cache.get(f.channel.id).edit({userLimit : arh})
if(arh == 0) arh = "Limit Yok"
message.reply(`Kullanıcı Limitiniz **${arh}** Olarak ayarlandı.`)

}


exports.help = {
    name : "limit",
    aliases : ['u-limit'],
    perm : [],
    botPerm : ['MANAGE_CHANNELS'],
    type : "oda"
}
exports.play  = {
    desc : "Açtığınız Odanın Kullanıcı Limitini Ayarlarsınız.",
    cmd : "limit <99-0>"
}