const Discord = require('discord.js');
const superagent = require('superagent');


exports.run = async(client, message, args) => {
    let msg = await message.channel.send("Resim aranıyor...");

    let {body} = await superagent 
    .get('https://dog.ceo/api/breeds/image/random');
    if(!{body}) return message.channel.send("Bir hata oluştu. Tekrar deneyiniz.")

    const embed = new Discord.MessageEmbed()
    .setColor('GREEN')
    .setDescription("**"+message.author.username+"**, İşte bir köpek !")
    .setImage(body.message)
    .setTimestamp()
    message.channel.send({embed})


    msg.delete();
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["köpke"],
    kategori: 'eğlence',
  permLevel: 0
};

exports.help = {
    name: "köpek",
    description: "Bir köpek resmi gönderir.",
    usage: "<prefix>köpek"
};
