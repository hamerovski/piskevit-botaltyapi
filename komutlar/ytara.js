const Discord = require('discord.js');

exports.run = async (client, message, args) => {
  const yazi = args.slice(0).join('+'); 

  if(!yazi) return message.channel.send(`Lütfen yazı yazın!`)
  const linqo = `https://www.youtube.com/results?search_query=${yazi}`
  .replace(' ', '+')

  
 const embed = new Discord.MessageEmbed()
  .setTitle(linqo)
  .setColor("RANDOM")
  
 	.setTimestamp()
  .setFooter('MustafaKK Bot YouTube Arama Hizmeti')
  message.channel.send(embed)
}
exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ["yt"],
    permLevel: 0
}

exports.help = {
    name: 'ytara',
    description: "",
    usage: 'ytara <yazı>'
}
