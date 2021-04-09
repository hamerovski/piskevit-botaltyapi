const Discord = require('discord.js');

exports.run = (client, message, args) => {
      
  
  const db = require('quick.db');
  
 
 
        var kisi = message.mentions.members.first()
        var abi = message.author
        
                
        
        if(!kisi) {
                const embed = new Discord.MessageEmbed()
                        .setDescription('Lütfen sevgililerinzden **birini** etiketleyiniz(wtbıerurv gf7r8vyrev)')
                        .setColor("RED")
                message.channel.send(embed)
                return
        }
 
             const askembed = new Discord.MessageEmbed()
                .setAuthor(`${kisi.user.tag} ve ${abi.tag}`)
                .setDescription(`**Eğer aşk ölçer ile bu evliliğin nasıl biteceğine baktıysanız!**`)
                .setColor("BLUE")
        message.channel.send(askembed)
        
        const nikahembed = new Discord.MessageEmbed()
                .setAuthor(`${kisi.user.tag} ve ${abi.tag}`)
                .setDescription(`**Eğer ${kisi.user.tag},${abi.tag} ile evlenmeyi kabul ediyorsan;**\n**İyi günde kötü günde,hastalıkta ve sağlıkta, savaşta ve barışta,**\n**dünyada ve marsta sizi karı ve koca ilan ediyorum!**`)
                .setColor("RED")
        message.channel.send(nikahembed)
  
  
    

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["nikah","nikahlan","nikahkıy"],
  permLevel: 0,
    kategori: "eğlence",
  category: "fun"
};

exports.help = {
  name: 'nikahlan',
  description: 'İki kullanıcıyı nikahlar.',
  usage: 'nikahlan @<sevgilin>',
};
