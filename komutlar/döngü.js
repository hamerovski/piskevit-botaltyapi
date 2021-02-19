const Discord = require('discord.js')





module.exports = {
    kod: "döngü",
    async run (client, message, args){
        var song = song.song;
        let toggle = client.player.toggleLoop(message.guild.id);

        // Send a message with the toggle information
        if (toggle) {
            message.channel.send(`${song.name} adlı şarkı Şuan Başarı İle Döngüde`);
       } else {
     message.channel.send(`${song.name} adlı şarkı Şuan Başarı İle Döngüden Çıkarıldı`);
      } 
    }
}