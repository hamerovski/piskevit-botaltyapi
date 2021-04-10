const Discord = require('discord.js');
const burc = require('burc.js');

exports.run = async (client, message, args, db) => {

  const deniz = args.slice(0).join(' ')
  if(!deniz) return message.channel.send("Bir Burç Adı Girmelisin.")

  let yorum = await burc.gunluk(deniz)

  let embed = new Discord.MessageEmbed()
  .setColor("RANDOM")
  .addField('Günlük Burç Yorumları', yorum)
  .setImage('https://foto.haberler.com/haber/2020/05/12/gunluk-burc-yorumlari-12-mayis-2020-sali-haft-13212847_amp.jpg')
  .setTimestamp()
  message.channel.send(embed)


}
exports.conf = { 
  enabled: true,
  guildOnly: true,
  aliases: ["günlük-burç-yorumu","günlükburçyorumu",'burç-yorum', 'burçyorum'],
  permLevel: 0,
  kategori: "geliştirici"
};

exports.help = {
  name: 'günlük-burc-yorumu',
  description: "Günlük olarak değişen burç yorumları alırsınız.",
  usage: 'günlük-burc-yorumu '
}
