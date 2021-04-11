const Discord = require('discord.js');
exports.run = (client, message, args) => {
  if (message.author.id != "773553681043554344") return message.reply('Bunu Sadece Sahibim Kullanabilir');
     
  if (!message.guild) {
  const ozelmesajuyari = new Discord.MessageEmbed()
  .setColor(0xFF0000)
  .setTimestamp()
  .setAuthor(message.author.username, message.author.avatarURL())
  .addField('⚠ Uyarı ⚠', 'Bu  komutu özel mesajlarda kullanamazsın.');
  return message.author.send(ozelmesajuyari); }
  let guild = message.guild;
  let reason = args.slice(1).join(' ');
  let user = message.mentions.users.first();
  if (reason.length < 1) return message.reply('Ne göndereceğimi yazmadan ne göndermemi bekliyorsun.');
  if (message.mentions.users.cache.size < 1) return message.reply('Kime Mesaj atmadan yazmadan ne göndermemi bekliyorsun.').catch(console.error);
  message.delete();
  message.reply('Mesajını Gönderdim.')
  var embed = new Discord.MessageEmbed()
  .setColor('RANDOM')
  .setTitle('**Sahibimden Bir Mesajın Var**')
  .setTimestamp()
  .setDescription(reason);
  return user.send(embed);
};//DevTR
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm','dmat'],
  permlevel: 4
};
 
exports.help = {
  name: 'mesajat',
  description: 'Bir kullanıcıya özelden mesaj gönderir.',
  usage: 'mesajat'
};
