const Discord = require('discord.js')
const {Client, MessageEmbed } = require('discord.js');


exports.run = (client,message,args) => {


    const isim = args[0]
    if(!isim) return message.channel.send(
        new MessageEmbed()
        .setColor('RED')
        .setTitle('Hata :x:')
        .setDescription('**Kullanım:** İsim,Yaş,Günlük Aktiflik Süresi,İstediğin Yetki'))
    
    const yaş = args[1]
    if(!yaş) return message.channel.send(
        new MessageEmbed()
        .setColor('RED')
        .setTitle('Hata :x:')
        .setDescription('Yaşını belirtmedin?'))
        
    const aktiflik = args[2]
    if(!aktiflik) return message.channel.send(
        new MessageEmbed()
        .setColor('RED')
        .setTitle('Hata :x:')
        .setDescription('Günlük Aktiflik süreni belirtmedin?'))
    
    const yetki = args.slice(3).join(' ')
    if(!yetki) return message.channel.send(
        new MessageEmbed()
        .setColor('RED')
        .setTitle('Hata :x:')
        .setDescription('Hangi yetkiyi istediğini belirtmedin?'))
    
    
    message.channel.send(
        new MessageEmbed()
        .setColor('RED')
        .setTitle('Başarılı :white_check_mark:')
        .setDescription('Başvurun başarıyla gönderildi!'))
    
    
    client.channels.cache.get('817240684163366934').send(
        new MessageEmbed()
        .setColor('GREEN')
        .setTitle('Yeni Başvuru!')
        .setAuthor(message.guild.name, message.guild.userURL)
        .setThumbnail(message.author.avatarURL)
          .addField('Başvuruyu Yapan', `**${message.author.tag}**`)
          .addField('İsmi', isim)
          .addField('Yaşı', yaş)
          .addField('Günlük Aktiflik Süresi', aktiflik)
          .addField('Başvurduğu Yetki', yetki)
        .setFooter(`${message.author.username} Tarafından Başvuruldu`, message.author.avatarURL, `${message.author.Date} Kanalında kullanıldı.`)
        )
        }
    
    
    exports.conf = {
        enabled : true,
        guildOnly : false,
        aliases : ['başvur'],
        permLevel : 0
    }
    
    exports.help = {
        name : 'başvur',
        description : 'Yetkili Başvuru Sistemi',
        usage : 'başvur'
    }
