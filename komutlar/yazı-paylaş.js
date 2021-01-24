const Discord = require('discord.js');

exports.run = async (client, message, args) => {
let kategori = args[1]
let kodismi = args[0]  
let kod = args.splice(2).join(" ")


  let channelName = args.slice(0).join(' ');
  if (!message.member.hasPermission('MANAGE_CHANNELS')) {
    return message.channel.send('Bu komutu kullanabilmek için yeterli izin bulunmuyor.');
  };
  if (!channelName) {
    return message.channel.send('Kanal adı belirtilmedi.');
  } else {
    var channel = await message.guild.channels.create(channelName, {type: 'text', reason: `${message.author.tag} tarafından komut ile oluşturuldu.`});
    channel.setParent('801896226986393640');//KATEGORİ KANAL İD'Sİ GİRİN
    message.channel.send(`Kanal oluşturuldu: ${channel}`);
  };


if (!kodismi) {
  return message.channel.send("Paylaşacağın Yazının Adını Girmelisin.")
}

if (!kategori) {
  return message.channel.send("Paylaşacağın Yazının Türünü Girmelisin.")
}




let plasmicode = new Discord.MessageEmbed()
.setTitle("Bir Kod Paylaşıldı!")
.addField("Paylaşılan Yazı:", kodismi)
.addField("Paylaşılan Kategori:", kategori)
.addField("Paylaşan Yetkili:", `${message.author.username}`)
.setColor('#83ff00')
.setTimestamp()
client.channels.cache.get('797114065582555136').send(plasmicode)
   

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [''],
  permLevel: 0
};

exports.help = {
  name: 'yazı-paylaş',
  description: '',
  usage: 'yazı-paylaş'
};