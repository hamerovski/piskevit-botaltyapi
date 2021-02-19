const Discord = require("discord.js")
const fs = require("fs")
const Fynx = "#36393e";
const FynxDogru = "#22BF41";
const FynxHata = "#f30707";

module.exports.run = async (client, message) => {
if(!message.member.voice.channel) return message.channel.send({embed: {color: FynxHata, description: `  | Oynatılan bir müziği durdurabilmek için bir ses kanalında olmanız gerekmektedir!` }})
if(!client.player.isPlaying(message.guild.id)) return message.channel.send({embed: {color: FynxHata, description: ` | Şu anda hiçbir müzik çalmamaktadır!` }})
client.player.stop(message.guild.id);
message.channel.send({embed: {color: FynxDogru, description: ` | Müzik durduruldu. Rache Music ses kanalından ayrılıyor!!` }})
};

module.exports.config = {
    name: "durdur",
    aliases: ["dur"]
};
