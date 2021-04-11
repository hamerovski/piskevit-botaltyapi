const Discord = require("discord.js");

exports.run = async (client, message, args) => {

var bos = "Aranıyor..."

    let store = args.slice(0).join('+');

        let link = `https://play.google.com/store/search?q=` + store;
        if(!store)return message.channel.send("Hangi oyunu aratmak istersin. **Kullanımı:** `s-playstore online kafa topu`")
        if(!link)return message.channel.send("Oyun bulunamadı.")
        let embed = new Discord.MessageEmbed()
    
    .setColor("RED")
    .setTimestamp()
    .addField('PlayStore', `${bos}`)
    .addField("Oyun ismi:", `${args.slice(0).join(' ')}`)
    .addField('Bulunan link:', `${link}`)
    .setThumbnail('https://i.amz.mshcdn.com/K1p5PL4669x6LLyGzxlqe25Xtsc=/fit-in/1200x9600/https%3A%2F%2Fblueprint-api-production.s3.amazonaws.com%2Fuploads%2Fcard%2Fimage%2F475500%2Ff018ae30-f60a-43b7-a3fd-d9acec74849e.png')
    .setFooter("PlayStore", message.author.avatarURL());
          
    message.channel.send(embed);
 
}



exports.conf =
{
  aliases: []
}

exports.help =
{
  name: "playstore",
  description: "",
  usage: ""
}
