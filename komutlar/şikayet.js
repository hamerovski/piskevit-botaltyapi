const config = require('../ayarlar.json');
const Discord = require('discord.js');
const db = require('quick.db');

exports.run = async (client, message, args) => {  
 
let prefix = db.fetch(`prefix_${message.guild.id}`) || config.prefix
let yazı = args.slice(0).join(' ');
  
const embed = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Hata!")
.setDescription(`Doğru Kullanım: ${prefix}şikayet [Şikayetiniz].`);
if (!yazı) return message.channel.send(embed)

const embed2 = new Discord.MessageEmbed()
.setColor("GREEN")
.setTitle("Başarılı")
.setDescription('Şikayetiniz Başarıyla Bildirildi. Teşekkürler!')
message.channel.send(embed2)

const embed3 = new Discord.MessageEmbed()
.setColor("RED")
.setTitle("Bir Şikayet Var!")
.addField(`Şikayeti Gönderen`, message.author.tag)
.addField(`Şikayeti Gönderenin ID'si`, message.author.id)
.addField(`Şikayet`, yazı)
.setThumbnail(message.author.avatarURL())
client.channels.cache.get("802110831856844811").send(embed3);
};

exports.conf = {
enabled: true,
guildOnly: true, 
aliases: []
};

exports.help = {
name: 'şikayet'
};
