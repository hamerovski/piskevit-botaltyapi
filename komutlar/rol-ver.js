const Discord = require('discord.js');
exports.run = (client, message, args) => {

  if (!message.guild) return;
  if (!message.member.hasPermission("MANAGE_ROLES")) return message.reply('Yeterli yetkin yok :c');
  let guild = message.guild
  let rol = message.mentions.roles.first()  
  let user = message.mentions.members.first() 

  if (!user) return message.reply('Kime rol vericem, etiketle').catch(console.error);
  if (rol.length < 1) return message.reply('Rol');
user.roles.add(rol)
const embed = new Discord.MessageEmbed()
        .setDescription(`${user} kullanıcısından başarıyla ${rol} rolü verildi!`)
        .setFooter('Piskevit', client.user.avatarURL())
        .setColor("RANDOM")
        .setTimestamp()
    message.channel.send(embed)

};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 2
};

exports.help = {
  name: 'rol-ver',
  description: 'İstediğiniz kişiyi istediğiniz rolü verir.',
  usage: 'rol-ver [kullanıcı] [@rol]'
};