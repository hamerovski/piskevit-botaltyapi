const Discord = require('discord.js')






module.exports = {
    kod: "ses",
    async run (client, message, args){
    client.player.setVolume(message.guild.id, parseInt(args[0]));
        message.channel.send(`Ses Seviyesi ${args[0]} Olarak Ayarlandı`);
    }
}