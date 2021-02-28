const Discord = require('discord.js');

exports.run = function (client, message, args) {
  
    let assen = message.mentions.users.first();
    if (message.mentions.users.cache.size < 1) return message.reply('Kullanıcı Belirt')
    let charons = args.slice(1).join(' ')
    if (!charons) return message.reply('Mesaj Yaz')
    message.delete()
    message.channel.createWebhook(assen.username, assen.avatarURL())
    .then(webhook => webhook.edit(assen.username, assen.avatarURL())
        .then(wb => {
            const hook = new Discord.WebhookClient(wb.id, wb.token);
            hook.send(charons)
            hook.delete()
        })
        .catch(console.error))
        .catch(console.error);
};

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: [],
    permLevel: 0,
};

exports.help = {
    name: 'fakemesaj',
    description: 'Fake Bot Mesajı Gönderir .',
    usage: 'fakemesaj'
};
