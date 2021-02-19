const Discord = require('discord.js')





module.exports = {
    kod: "pause",
    async run (client, message, args){
        let song = await client.player.pause(message.guild.id);
        message.channel.send(`${song.name} Adlı Şarkı Başarı İle Durduruldu`);
    }
}