const Discord = require("discord.js");
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

exports.run = async (client, message, emoji, args) => {

  

const filter = (reaction, user) => {
return ['✅', '❌'].includes(reaction.emoji.name) && user.id === kullanıcı.id;
};

let kullanıcı = message.mentions.members.first()
if (!kullanıcı) return message.channel.send(`Bir Kullanıcı Belirt.`);

let member = message.guild.member(kullanıcı);
    
    if (kullanıcı.id == message.author.id) return message.channel.send(new Discord.MessageEmbed().setDescription(`Dostum sana üzücü bir haberim var. K-kendine ilgi veremezsin...`).setColor("RED"));
  
let böhöhöyt = new Discord.MessageEmbed()
.setColor("30b480")
.setAuthor(message.member.displayName, message.author.avatarURL({ dynamic: true }))
.setDescription(`${kullanıcı}, ${message.author} senden ilgi istiyor. Ona ilgi vermek ister misin?`)//meftun!#3544
  
let mesaj = await message.channel.send(böhöhöyt)
await mesaj.react("✅")
await mesaj.react("❌")
mesaj.awaitReactions(filter, {
max: 1,
time: 60000,
errors: ['time']
})
  .then(message.channel.send(`Pişt ${kullanıcı}, bi bakar mısın?`)) //mesaj embedli atıldığı için etiketlediğiniz kişiye haber verilsin diye burada etiket atıyor. eğer etiket atmasını istemiyorsanız bu satırı silebilirsiniz
  .then(collected => {
const reaction = collected.first();
if (reaction.emoji.name === '✅') {
let bunumeftunyapmis = new Discord.MessageEmbed()
.setColor("30b480")
  .setTitle(`DÜT DÜÜÜT AÇ YOLU DOSTUM BİRİNE İLGİ GÖTÜRMEM GEREKİYOR`)
  .setDescription(`**${kullanıcı}, ${message.author} kişisine ilgi vermeyi kabul etti!**`)
  .setImage('https://cdn.discordapp.com/attachments/827286060341002257/827288380731031572/gfwCg2.jpg')

message.channel.send(bunumeftunyapmis)//meftun!#3544
} else {
let bunudameftunyapmis = new Discord.MessageEmbed()
.setColor("0x800d0d")
.setTitle(`**KAHREDEN HABER GELDİ!**`)
.setDescription(`${kullanıcı}, ${message.author} kişisine ilgi vermeyi kabul etmedi!`)
.setFooter(`Bence herkes sevgiyi hak eder... Niye ilgi vermedin ki?`)
.setThumbnail('https://cdn.discordapp.com/attachments/827286060341002257/827286337651474482/432b04cb-97f5-4d07-9df7-986ecdb05107.png') //büyük resim olarak atmasını istiyorsanız .setThumbnail kısmını silip .setImage yazın.
message.channel.send(bunudameftunyapmis)//meftun!#3544
}
})
}


exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["ilgi-iste"],
  permLevel: 0,
}

exports.help = {
  name: 'ilgiiste'
  
}
