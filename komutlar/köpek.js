const Discord = require('discord.js');
const request = require('request');

exports.run = (client, message, args) => {

request(`https://no-api-key.com/api/v1/animals/dog`, function (error, response, body) {
    if (error) return console.log('Error:', error); 
    else if (!error) { 
        var info = JSON.parse(body);
        const çalma = new Discord.MessageEmbed()
          .setColor('RANDOM')
          .setImage(info.image);
  message.channel.send(çalma);
    }
});
}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["köpek", "köpke"],
  permLevel: 0
};

exports.help = {
    name: 'resim-köpek',
  description: 'Exay Bot',
  usage: 'kedi'
};
