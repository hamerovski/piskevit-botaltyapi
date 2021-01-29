const Discord = require('discord.js')
const ayar = require('../ayarlar.json')
const db = require('quick.db')

exports.run = async(client, message, args) => {
    if(!message.member.roles.cache.get(kullancak rol id) && !message.member.permissions.has('ADMINISTRATOR')) return message.channel.send('Bu komutu kullanmak için yetkin yok.')

    /////////////////////////////////////
    let unban = args[0]
    if(!unban) return message.channel.send(`Banını kaldırcağın kişinin idsini yaz.`) 

    message.guild.members.unban(unban)
    message.channel.send(`<@${unban.id}>, adlı kullanıcının sunucudaki yasağı kaldırıldı. Gerekli bilgileri loga sundum.`) 
    /////////////////////////////////////
    client.channels.cache.get(kanal id).send(
        new Discord.MessageEmbed()
        .setTitle(`${client.user.username} - Unban`)
        .setAuthor(message.author.username, message.author.avatarURL ({dynamic: true}))
        .setDescription(`<@${unban.id}> adlı kullanıcının sunucudaki yasağı kaldırıldı.
    
    - Banı kaldıran yetkili: <@${message.author.id}> / **${message.author.id}**
    
    - Banı Kalkan Kullanıcı: <@${unban.id}> / **${unban.id}**
    
    - Banı Kaldıran Sunucu: **${message.guild.username}**`)
    )
};
exports.conf = {
enabled: true,
guildOnly: true,
aliases: ['ban-kaldır'],
permLevel: 0
};

exports.help = {
name: 'unban',
description: 'Unban komutu - Swenlor',
usage: 'Unban'
};
