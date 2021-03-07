const Discord = require('discord.js');


exports.run = (client, message) => {

var s = 0,k=0;
        var kisi = message.mentions.users.first();
        if(!kisi) return message.channel.send("Lütfen birini etiketleyin");
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${message.author} ${kisi} kişisine evlenme teklifi etti . ${kisi} Kabul ediyor musun ?`)
        .setColor("RANDOM")
        .setImage("https://i.pinimg.com/originals/06/63/a3/0663a382deeca3db17de13920720a05a.gif")).then(msg=>{
            msg.react("✅");
            msg.react("❌");
            setTimeout(function(){
                if(k==0){
                    msg.delete();
                }
            },15000)
            client.on("messageReactionAdd",(reaction,user)=>{
                if(s==0){
                    if(reaction.message.id==msg.id){
                        if(user.id==kisi.id){
                            if(reaction.emoji.name=="✅"){
                                msg.edit(new Discord.MessageEmbed()
                                .setDescription(`${kisi} teklifi KABUL etti ! `)
                                .setColor("GREEN"))
                                s++
                                k++
                            }else if(reaction.emoji.name=="❌"){
                                msg.edit(new Discord.MessageEmbed()
                                .setDescription(`${kisi} teklifi Red etti ! `)
                                .setColor("RED"))
                                s++
                                k++
                            }
                        }
                    }
                }
            });
        })


};

exports.conf = {
  enabled: true, 
  guildOnly: true,
  aliases: ['evlen', 'evlenme-teklifi'], 
  permLevel: 0 
};

exports.help = {
  name: 'evlenmeteklifi', 
  description: 'Evlenme teklifi', 
  usage: 'evlenmeteklifi @üye' 
};




