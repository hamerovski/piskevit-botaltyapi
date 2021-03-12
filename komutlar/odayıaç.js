
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
exports.run =async (client,message,args)=>{
    let f = db.fetch(`odam_${message.author.id}`)
let f2 = db.fetch(`özeloda_${message.guild.id}`)
if(!f2) return message.reply('Bu Sunucuda Özel oda sistemi hiç bir kanala ayarlanmamış. **'+ `${client.prefix}yardım**`)
if(!f) return message.reply('Senin Bir odan Bulunmuyor, ``'+f2.map(a => a.channel.name).join(" - ")+'`` Ses Kanallarından Birine girip Açabilirsin.')
if(args[0] == "aç") {
    await message.guild.channels.cache.get(f.channel.id).updateOverwrite(message.guild.roles.everyone,{CONNECT : true, VIEW_CHANNEL : true})
    message.reply('Artık odana Herkes **GİREBİLİR**')

} else if(args[0] == "kapat") {

 await message.guild.channels.cache.get(f.channel.id).updateOverwrite(message.guild.roles.everyone,{CONNECT : false, VIEW_CHANNEL : false})
 message.reply('Artık odana Herkes **GİREMEZ**')
}else {
    message.reply(`**aç** veya **kapat** yazınız.`)
}
}


exports.help = {
    name : "herkese",
    aliases : ['herkes'],
    perm : [],
    botPerm : ['MANAGE_CHANNELS'],
    type : "oda"
}
exports.play  = {
    desc : "odanızı Herkese açar.",
    cmd : "herkese <aç/kapat>"
}