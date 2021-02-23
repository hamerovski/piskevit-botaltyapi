const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Resim aranıyor...");

    let {body} = await superagent 
    .get('http://loremflickr.com/320/240/dog');
    if(!{body}) return message.channel.send("Bir hata oluştu. Tekrar deneyiniz.")

    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription("**"+message.author.username+"**, İşte bir köpek !")
    .setImage(body.file)
    .setTimestamp()
    message.channel.send({embed})


    msg.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['köpek', 'köpke'],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
    name: "köpek",
    description: "Bir köpek resmi gönderir.",
    usage: "<prefix>köpek"
};
