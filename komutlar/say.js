const Discord = require('discord.js');//Keyfine#0001
const db = require('quick.db');
const settings = require('../managment/settings.json')

exports.run = (client, message, args) => {  
    if(message.member.roles.cache.has(settings.roller.botcommand) || message.member.hasPermission('ADMINISTRATOR')) {
   
        var üyesayısı = message.guild.memberCount.toString().replace(/ /g, "   ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "Bilinmiyor.").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': `0`,
            '1': `1`,
            '2': `2`,
            '3': `3`,
            '4': `4`,  
            '5': `5`,
            '6': `6`,
            '7': `7`,
            '8': `8`,
            '9': `9`}[d];
        })
      }
      var online = message.guild.members.cache.filter(u => u.presence.status != "offline").size.toString().replace(/ /g, "   ")
      var üs = online.match(/([0-9])/g)
      online = online.replace(/([a-zA-Z])/g, "Bilinmiyor.").toLowerCase()
      if(üs) {
        online = online.replace(/([0-9])/g, d => {
          return {
            '0': `0`,
            '1': `1`,
            '2': `2`,
            '3': `3`,
            '4': `4`,  
            '5': `5`,
            '6': `6`,
            '7': `7`,
            '8': `8`,
            '9': `9`}[d];
        })
      }
    
      var tagdakiler = message.guild.members.cache.filter(m => m.user.username.includes(settings.taglar.tag)).size.toString().replace(/ /g, "   ")
      var üs = tagdakiler.match(/([0-9])/g)
      tagdakiler = tagdakiler.replace(/([a-zA-Z])/g, "Bilinmiyor.").toLowerCase()
      if(üs) {
        tagdakiler = tagdakiler.replace(/([0-9])/g, d => {
          return {
            '0': `0`,
            '1': `1`,
            '2': `2`,
            '3': `3`,
            '4': `4`,  
            '5': `5`,
            '6': `6`,
            '7': `7`,
            '8': `8`,
            '9': `9`}[d];
        })
      }
    
      var booster = message.guild.roles.cache.get(settings.roller.booster).members.size.toString().replace(/ /g, "   ")
      var üs = booster.match(/([0-9])/g)
      booster = booster.replace(/([a-zA-Z])/g, "Bilinmiyor.").toLowerCase()
      if(üs) {
        booster = booster.replace(/([0-9])/g, d => {
          return {
            '0': `0`,
            '1': `1`,
            '2': `2`,
            '3': `3`,
            '4': `4`,  
            '5': `5`,
            '6': `6`,
            '7': `7`,
            '8': `8`,
            '9': `9`}[d];
        })
      }
    
      var ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b).toString().replace(/ /g, "   ")
      var üs = ses.match(/([0-9])/g)
      ses = ses.replace(/([a-zA-Z])/g, "Bilinmiyor.").toLowerCase()
      if(üs) {
        ses = ses.replace(/([0-9])/g, d => {
          return {
            '0': `0`,
            '1': `1`,
            '2': `2`,
            '3': `3`,
            '4': `4`,  
            '5': `5`,
            '6': `6`,
            '7': `7`,
            '8': `8`,
            '9': `9`}[d];
        })
      }
    
      const embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
      .setDescription(`\`•\` Seste toplam **${ses}** kullanıcı var.
\`•\` Toplam **${tagdakiler}** kişi tagımıza sahip.
\`•\` Sunucumuzda toplam **${üyesayısı}** üye var.
\`•\` Sunucumuza toplam **${booster}** destekçi var.
\`•\` Sunucumuzda toplam **${online}** çevrimiçi üye var.`)
      .setColor('#f37bf8')
    message.channel.send(embed)
      } else {
        const embed = new Discord.MessageEmbed()
      .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
      .setDescription(`**Yetkiniz Bulunmamakta**`)
      return message.channel.send(embed)
    }
};


exports.conf = {
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'say',
  description: 'Sunucu istatistiklerini sayar.',
  usage: 'say'
};
