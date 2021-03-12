
const { MessageEmbed } = require('discord.js')
const e = require('express')
const db = require('quick.db')
exports.run =async (client,message,args)=>{
if(!args[0]) {
let f = db.fetch(`odam_${message.author.id}`)
let f2 = db.fetch(`özeloda_${message.guild.id}`)
if(!f2) return message.reply('Bu Sunucuda Özel oda sistemi hiç bir kanala ayarlanmamış. **'+ `${client.prefix}yardım**`)
if(!f) return message.reply('Senin Bir odan Bulunmuyor, ``'+f2.map(a => a.channel.name).join(" - ")+'`` Ses Kanallarından Birine girip Açabilirsin.')



message.guild.channels.cache.get(f.channel.id).delete('Özel Oda Sistemi Lrows').then(async a => {
    await db.delete(`odam_${message.author.id}`)
    message.channel.send(`${message.author} - \`${a.name}\`, Ses Kanalı Silindi Yeniden Sese Girerek Yeniden İstersen açabilirsin.`)
}).catch(a => message.channel.send(`Bir Hata Oluştu` + e))
} else if(args[0]) {
 let mm = message.mentions.members.first() || message.guild.members.cache.get(args[0]) 
 if(!message.member.hasPermission('MANAGE_GUILD')) return message.reply(`Birinin Odasını Silmek için yeterli yetkin bulunmuyor, Kendi odanı Silecek isen **${client.prefix}kapat** yazman yetiyor.`)
 if(!mm) return message.reply(`Birini Etiketleyin veya ID girin.`)
 let f = db.fetch(`odam_${mm.id}`)
 let f2 = db.fetch(`özeloda_${message.guild.id}`)
 if(!f2) return message.reply('Bu Sunucuda Özel oda sistemi hiç bir kanala ayarlanmamış. **'+ `${client.prefix}yardım**`)
if(!f) return message.reply( mm+' Bir odası **Bulunmuyor**, ``'+f2.map(a => a.channel.name).join(" - ")+'`` Ses Kanallarından Birine girip Açabilir.')



message.guild.channels.cache.get(f.channel.id).delete('Özel Oda Sistemi Lrows').then(async a => {
    await db.delete(`odam_${mm.id}`)
    message.channel.send(`${mm} - \`${a.name}\`, Odanız ${message.author} tarafından Silindi.`)
})
}
}


exports.help = {
    name : "kapat",
    aliases : ['kapa'],
    perm : [],
    botPerm : ['MANAGE_CHANNELS'],
    type : "oda"
}
exports.play  = {
    desc : "Açtığınız Özel Odayı Silebilirsiniz.",
    cmd : "kapat"
}