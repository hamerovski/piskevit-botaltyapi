const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async(client, message, args) => {
  
    message.delete()
   if(!message.member.roles.cache.some(r => r.name === "'ቐ") && !message.member.hasPermission("ADMINISTRATOR")) return message.reply("Bu Komutu Kullana Bilmek İçin Yönetici Permi veya 'ቐ Rolüne Olmalısınız.").then(message => {setTimeout(() => {message.delete()}, 60000);}) 

    let member = message.mentions.members.first() || message.guild.members.cache.get(args[0]);
    const seviyemiktar = args.slice(1).join('')
    let seviye = await db.add(`seviye_${member.id + message.guild.id}`, -+seviyemiktar);
    let guncelseviye = await db.fetch(`seviye_${member.id + message.guild.id}`,);
  message.channel.send(`${member} Seviye Silindi. **Silinen Seviye:** ${seviyemiktar}, **Güncel Seviyesi:** ${guncelseviye} `)
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0 
};

exports.help = {
  name: 'seviye-sil',
  description: '!!seviye-sil @etiket [MIKTAR]',
  usage: 'seviye-sil'
};