const Discord = require('discord.js');

exports.run = (client, message, args) => {
      
  
  const db = require('quick.db');//rinacode
  
 
 
        let member = message.guild.member(message.mentions.users.array()[0] || message.guild.members.cache.get(args[0]))
        let member2 = message.guild.member(message.mentions.users.array()[1] || message.guild.members.cache.get(args[1]))
        var s = message.author
        if(member2) {
                var s = member2.user
        }
        if(!member) {
                const embed = new Discord.MessageEmbed()
                        .setDescription('Lütfen bir üyeyi etiketleyiniz')//rinacode
                        .setColor("RANDOM")
                message.channel.send(embed)
                return
        }
 
        var anasonuc = Math.floor(Math.random() * 101)
        var kalp = ''
        var akalp = ''
        if(Math.floor(Math.round(anasonuc / 10) * 10) >= 10) {
                var c = 0
                for(var i = 0; i < Math.floor(Math.round(anasonuc / 10)); i++) {
                        kalp += '❤️'
                        c++
                }
                for(var x = c; x < 10; x++) {
                        akalp += `🖤`
                }
        } else {
                var kalp = '🖤'
                var akalp = '🖤🖤🖤🖤🖤🖤🖤🖤🖤'
        }
  var yorum = "Sizi evlendirelim <3"
        if(anasonuc < 80) {
                var yorum = "Biraz daha uğraş yakında nikahınızı kıyarız, nikahlanmak için e!nikahlan @<sevgilin> :)"
        }
        if(anasonuc < 60) {
                var yorum = "Eh biraz biraz bir şeyler var gibi."
        }
        if(anasonuc < 40) {
                var yorum = "Azıcıkta olsa bir şeyler hissediyor sana :)"
        }
        if(anasonuc < 20) {
                var yorum =  "Bu iş olmaz sen bunu unut."
        }
  
        const rinaembed = new Discord.MessageEmbed()
                .setAuthor(`${member.user.tag} ve ${s.tag}`)
                .setDescription(`Aşk yüzdesi **%${anasonuc}**! \n${kalp}${akalp} \n\n${yorum}`)
                .setColor("RANDOM")
                .setFooter("RINA CODE!!!!!")
                message.channel.send(rinaembed)
  
  
    

};

exports.conf = {
  enabled: true, 
  guildOnly: false, 
  aliases: ["aşk","aşkölçer","aşk-ölçer"],
  permLevel: 0,
    kategori: "eğlence",
  category: "fun"
};

exports.help = {
  name: 'aşk-ölçer',
  description: 'İki kullanıcı arasındaki aşkı ölçer.',
  usage: 'aşk-ölçer <@kullanıcı> veya aşk-ölçer <@kullanıcı> <@kullanıcı>',
};
