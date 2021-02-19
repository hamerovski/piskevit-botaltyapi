const Discord = require('discord.js')





module.exports = {
    kod: "resume",
    async run (client, message, args){
        let song = await client.player.resume(message.guild.id);
        message.channel.send(`${song.name} Şarkı Başarı İle Tekrar Çalıyor`);

    }
}