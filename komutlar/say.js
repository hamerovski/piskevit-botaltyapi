const Discord = require('discord.js');
const db = require('quick.db');
const config = require('../ayarlar.json');

exports.run = (client, message, args) => {  
    if(message.member.roles.cache.has(config.botcommands) || message.member.hasPermission('ADMINISTRATOR')) {
 
        var üyesayısı = message.guild.memberCount.toString().replace(/ /g, "   ")
      var üs = üyesayısı.match(/([0-9])/g)
      üyesayısı = üyesayısı.replace(/([a-zA-Z])/g, "Bilinmiyor.").toLowerCase()
      if(üs) {
        üyesayısı = üyesayısı.replace(/([0-9])/g, d => {
          return {
            '0': `<a:sifir:809299840269025291>`,
            '1': `<a:bir:809299834959036436>`,
            '2': `<a:iki:809299841196228618>`,
            '3': `<a:uc:809299836221521940>`,
            '4': `<a:dort:809299840538247188>`,  
            '5': `<a:bes:809299832174805033>`,
            '6': `<a:alti:809299830198239264>`,
            '7': `<a:yedi:809299839069716500>`,
            '8': `<a:sekiz:809299841310130177>`,
            '9': `<a:dokuz:809299840189333505>`}[d];
        })
      }
      var online = message.guild.members.cache.filter(u => u.presence.status != "offline").size.toString().replace(/ /g, "   ")
      var üs = online.match(/([0-9])/g)
      online = online.replace(/([a-zA-Z])/g, "Bilinmiyor.").toLowerCase()
      if(üs) {
        online = online.replace(/([0-9])/g, d => {
          return {
            '0': `<a:sifir:809299840269025291>`,
            '1': `<a:bir:809299834959036436>`,
            '2': `<a:iki:809299841196228618>`,
            '3': `<a:uc:809299836221521940>`,
            '4': `<a:dort:809299840538247188>`,  
            '5': `<a:bes:809299832174805033>`,
            '6': `<a:alti:809299830198239264>`,
            '7': `<a:yedi:809299839069716500>`,
            '8': `<a:sekiz:809299841310130177>`,
            '9': `<a:dokuz:809299840189333505>`}[d];
        })
      }
    
      var tagdakiler = message.guild.members.cache.filter(m => m.user.username.includes(config.tag)).size.toString().replace(/ /g, "   ")
      var üs = tagdakiler.match(/([0-9])/g)
      tagdakiler = tagdakiler.replace(/([a-zA-Z])/g, "Bilinmiyor.").toLowerCase()
      if(üs) {
        tagdakiler = tagdakiler.replace(/([0-9])/g, d => {
          return {
            '0': `<a:sifir:809299840269025291>`,
            '1': `<a:bir:809299834959036436>`,
            '2': `<a:iki:809299841196228618>`,
            '3': `<a:uc:809299836221521940>`,
            '4': `<a:dort:809299840538247188>`,  
            '5': `<a:bes:809299832174805033>`,
            '6': `<a:alti:809299830198239264>`,
            '7': `<a:yedi:809299839069716500>`,
            '8': `<a:sekiz:809299841310130177>`,
            '9': `<a:dokuz:809299840189333505>`}[d];
        })
      }
    
      var booster = message.guild.roles.cache.get(config.booster).members.size.toString().replace(/ /g, "   ")
      var üs = booster.match(/([0-9])/g)
      booster = booster.replace(/([a-zA-Z])/g, "Bilinmiyor.").toLowerCase()
      if(üs) {
        booster = booster.replace(/([0-9])/g, d => {
          return {
            '0': `<a:sifir:809299840269025291>`,
            '1': `<a:bir:809299834959036436>`,
            '2': `<a:iki:809299841196228618>`,
            '3': `<a:uc:809299836221521940>`,
            '4': `<a:dort:809299840538247188>`,  
            '5': `<a:bes:809299832174805033>`,
            '6': `<a:alti:809299830198239264>`,
            '7': `<a:yedi:809299839069716500>`,
            '8': `<a:sekiz:809299841310130177>`,
            '9': `<a:dokuz:809299840189333505>`}[d];
        })
      }
    
      var ses = message.guild.channels.cache.filter(channel => channel.type == "voice").map(channel => channel.members.size).reduce((a, b) => a + b).toString().replace(/ /g, "   ")
      var üs = ses.match(/([0-9])/g)
      ses = ses.replace(/([a-zA-Z])/g, "Bilinmiyor.").toLowerCase()
      if(üs) {
        ses = ses.replace(/([0-9])/g, d => {
          return {
            '0': `<a:sifir:809299840269025291>`,
            '1': `<a:bir:809299834959036436>`,
            '2': `<a:iki:809299841196228618>`,
            '3': `<a:uc:809299836221521940>`,
            '4': `<a:dort:809299840538247188>`,  
            '5': `<a:bes:809299832174805033>`,
            '6': `<a:alti:809299830198239264>`,
            '7': `<a:yedi:809299839069716500>`,
            '8': `<a:sekiz:809299841310130177>`,
            '9': `<a:dokuz:809299840189333505>`}[d];
        })
      }
    
      const embed = new Discord.MessageEmbed()
      .setAuthor(message.guild.name, message.guild.iconURL({dynamic: true}))
      .setDescription(`
      • Poseidon Ailesinin Kanatları Altında Toplam ${üyesayısı} Üye Bulunmakta.
      
      • Aktif ${online} Kullanıcı Bulunmakta.

      • Tagımızı Alarak Ailemize Katılmış ${tagdakiler} Kişi Bulunmakta.
    
      • Sunucumuzda ${booster} Destekçi Bulunmakta.

      • Ses Kannallarında ${ses} Kişi Bulunmakta.
      `)
      .setColor('#2F3136')
    message.channel.send(embed)
      } else {
        const embed = new Discord.MessageEmbed()
      .setAuthor(message.member.displayName, message.author.avatarURL({dynamic: true}))
      .setDescription(`
    Bu komutu kullanmak için yeterli yetkin yok.
      `)
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
