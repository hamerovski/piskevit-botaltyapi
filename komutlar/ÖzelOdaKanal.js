
const { MessageEmbed } = require('discord.js')
const db = require('quick.db')
exports.run =async (client,message,args)=>{
    let f = db.fetch(`özeloda_${message.guild.id}`)
    if(args[0] == "ekle") {
 let channel = message.guild.channels.cache.get(args[1]) || message.guild.channels.cache.find(a => a.name == args[1]) 
 if(!channel) return message.channel.send('Bir Kanal Adı veya ID Girmelisin.')
  else if(channel){
     if(channel.type !== "voice") return message.channel.send(`Kanal Tipinin Ses Kanalı Olması Lazımdır Dostum.`)

if(!Array.isArray(f)) {
  await db.set(`özeloda_${message.guild.id}`,[])
}
if(f){
let f2 = f.find(a => a.k == channel.id)
    if(f2) return message.channel.send(`Bu kanal Zaten Eklenmiş.`)
}
 db.push(`özeloda_${message.guild.id}`,{k : channel})
message.channel.send(`  Özel Oda Kanallarına \`${channel.name}\` Eklendi.`)
 }
    } else if(args[0] == "çıkar") {
       
        let channel = message.guild.channels.cache.get(args[1]) || message.guild.channels.cache.find(a => a.name == args[1]) 
        if(!channel) return message.channel.send('Çıkartılacak bir kanal ID veya Ad girmelisin.')
        if(!channel.type == "voice") return message.channel.send(`Kanal Tipinin Ses Kanalı Olması Lazımdır Dostum.`)
        if(!f) return message.channel.send(`Hiç bir Özel oda kanalı eklenmemiş.`)
        let f2 = f.find(a => a.k == channel.id)
    if(!f2) return message.channel.send(`\`${channel.name}\`, Böyle bir Kanal eklenmemiş.`)
    
let yeniDb = f.filter(a => a.k !== channel)
db.set(`özeloda_${message.guild.id}`,yeniDb)
message.channel.send(`\`${channel.name}\`, Özel Oda Kanallarından kaldırıldı.`)
    } else {
      return  message.channel.send(new MessageEmbed().setDescription(`Yanlış Kullanım : \`${client.prefix}özel-oda <ekle/çıkar> <kanal-ad/kanal-id>\``))
    }

    
}


exports.help = {
    name : "özel-oda",
    aliases : ['özeloda'],
    perm : ['MANAGE_GUILD'],
    botPerm : ['SEND_MESSAGES'],
    type : "other"
}
exports.play  = {
    desc : "Özel Oda Kanalını Ayarlarsınız.",
    cmd : "özeloda <ekle/çıkar> <kanal-ID/kanal-ad>"
}