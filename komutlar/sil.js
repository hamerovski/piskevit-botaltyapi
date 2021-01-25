const Discord = require('discord.js');
const db = require('quick.db')
exports.run = function(client, message, args) {

if(!message.member.hasPermission("MANAGE_MESSAGES")) return message.reply("Bu Komutu Kullanmak İçin İzniniz Yok!");
if(!args[0]) return message.channel.send(":no_entry_sign: **Lütfen Silinicek Mesaj Miktarını Yazın.!** \n **Mesajları Silebilmem İçin 0-5000 Arası Rakam Belirt** :no_entry_sign:");
message.channel.bulkDelete(args[0]).then(() => {
  message.channel.send(` ${args[0]} Adet Mesajı Ve Hertarafı İyice Sildim. <a:temizlik:803173857094664232>`).then(msg => msg.delete(5000));
})
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ['sil'],
  permLevel: 2
};

exports.help = {
  name: 'sil',
  description: 'Belirlenen miktarda mesajı siler.',
  usage: 'sil <silinicek mesaj sayısı>'
}
