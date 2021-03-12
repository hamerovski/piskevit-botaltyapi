
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
exports.run =async (client,message,args)=>{
if(args[0]== "ver") {
let f = db.fetch(`odam_${message.author.id}`)
let f2 = db.fetch(`özeloda_${message.guild.id}`)
if(!f2) return message.reply('Bu Sunucuda Özel oda sistemi hiç bir kanala ayarlanmamış. **'+ `${client.prefix}yardım**`)
if(!f) return message.reply('Senin Bir odan Bulunmuyor, ``'+f2.map(a => a.k.name).join(" - ")+'`` Ses Kanallarından Birine girip Açabilirsin.')
let mm = message.mentions.members.first() || message.guild.members.cache.get(args[1])
if(!mm) return message.reply(`odana Gelmesine İzin vereceğin kişiyi etiketle.`)


await message.guild.channels.cache.get(f.channel.id).updateOverwrite(mm,{CONNECT : true,VIEW_CHANNEL : true})
message.reply(`${mm} Kullanıcısına Odana Girme izni verildi artık odana **GİREBİLİR**.`)
} else if(args[0] == "al") {
    let f = db.fetch(`odam_${message.author.id}`)
let f2 = db.fetch(`özeloda_${message.guild.id}`)
if(!f2) return message.reply('Bu Sunucuda Özel oda sistemi hiç bir kanala ayarlanmamış. **'+ `${client.prefix}yardım**`)
if(!f) return message.reply('Senin Bir odan Bulunmuyor, ``'+f2.map(a => a.k.name).join(" - ")+'`` Ses Kanallarından Birine girip Açabilirsin.')
let mm = message.mentions.members.first() || message.guild.members.cache.get(args[1])
if(!mm) return message.reply(`Odana girme iznini Alacağın Kişiyi etiketle.`)

if(message.channel.permission)
await message.guild.channels.cache.get(f.channel.id).updateOverwrite(mm,{CONNECT : false,VIEW_CHANNEL : false})
message.reply(`${mm} Kullanıcısına Odana Girme İznini Aldın artık odana **GİREMEZ**.`)
} else {
    message.reply(`**ver** veya **al** Yazmalısın.`)
}
}


exports.help = {
    name : "izin",
    aliases : ['gel'],
    perm : [],
    botPerm : ['MANAGE_CHANNELS'],
    type : "oda"
}
exports.play  = {
    desc : "Açtığınız Odaya birinin Gelmesini Sağlayabilirsiniz.",
    cmd : "izin <ver/al> <@kullanıcı>"
}