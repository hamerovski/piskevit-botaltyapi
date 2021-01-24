const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
      if(!message.member.hasPermission('ADMINISTRATOR')) return message.channel.send('Bu Komutu Kullanabilmek için **Yönetici** Yetkisine Sahip Olmalısın!')
  
      let kanal = message.mentions.channels.first() || args[0]
      if(!kanal) return message.channel.send('Bir Kanal Etiketlemelisin!')
  
      db.set(`emotek_${message.guild.id}`, kanal.id)
      message.channel.send(`Emoji Koruma Sistemi Aktif ve Kanal ${kanal} Olarak Seçildi!`)

      if(args[0] === 'kapat') {
        
        if(!db.fetch(`emotek_${message.guild.id}`)) return message.channel.send('Aktif Olmayan Bir Şeyi Kapatamam')
        
        db.delete(`emotek_${message.guild.id}`)
        message.channel.send('Emoji Koruma Sistemi Kapatıldı ve Veriler Silindi!')
      }
}

exports.conf = {  
  enabled: true,
  guildOnly: true,
  aliases:[],
  permlevel: 0
};

exports.help = {
  name: "emoji-koruma"
}