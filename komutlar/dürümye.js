
const Discord = require('discord.js');
 const { Client, MessageEmbed } = require('discord.js');



exports.run = (client, message, args) => {
 
    const embed = new Discord.MessageEmbed()
	.setColor('RANDOM')
	.setAuthor('Dürüm Yedin Hemde Urfa', 'https://www.nizampide.com/wp-content/uploads/2018/07/urfa-kebabı-dürüm-nizam-pide-sütlaç-istanbul-beyoğlu-istiklal-caddesi.jpg')
    	.setDescription('Kokusu Buraya Kadar Geldi Üff')
	.setURL('https://www.nizampide.com/wp-content/uploads/2018/07/urfa-kebabı-dürüm-nizam-pide-sütlaç-istanbul-beyoğlu-istiklal-caddesi.jpg')



	.setTimestamp()
	.setFooter('MustafaKK Bot Developer By MustafaKK#9169');
message.channel.send(embed);


  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dürümye'],
  permLevel: 0,
};

exports.help = {
  name: 'dürümye',
  description: '',
  usage: ''
};
