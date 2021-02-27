const Discord = require("discord.js");
const db = require('quick.db')


module.exports.run = async (client, message, args) => {
              if(db.fetch(`bakim`)) {
  if(message.author.id !== "702463861034319974") {return message.channel.send('Şuanda Bakım Modu Açıktır.')}
}



    let google = args.slice(0).join('+');

        let link = `https://translate.google.com/?hl=tr#tr/en/` + google;
        if(!link)return message.reply("Hata !")
  if(!google) return message.reply("**Ne Çevireceğimi Yazmadın?**")
        let embed = new Discord.MessageEmbed()
    
    .setColor("0xe2ff00")
    .setTimestamp()
    
    .addField("Kelime:", `${args.slice(0).join(' ')}`)
    .addField('Link:', `${link}`)
.setFooter('Synex Creative | Google Çeviri Sistemi')    
          
    message.channel.send(embed);

  
}



exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['çeviri',"translation"],
  permLevel: 0
};

exports.help = {
  name: 'çeviri',
  description: 'Bot yazdığınız şeyi çevirir.',
  usage: 'gçevir'
};
