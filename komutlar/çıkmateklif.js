
var s = 0;
        var kisi = message.mentions.users.first();
        if(!kisi) return message.channel.send("Lütfen birini etiketleyin");
        message.channel.send(new Discord.MessageEmbed()
        .setDescription(`${message.author} ${kisi} kişisine çıkma teklifi etti . ${kisi} Kabul ediyor musun ?`)
        .setColor("RANDOM")).then(msg=>{
            msg.react("✅");
            msg.react("❌");
            client.on("messageReactionAdd",(reaction,user)=>{
                if(s==0){
                    if(reaction.message.id==msg.id){
                        if(user.id==kisi.id){
                            if(reaction.emoji.name=="✅"){
                                msg.edit(new Discord.MessageEmbed()
                                .setDescription(`${kisi} teklifi KABUL etti ! `)
                                .setColor("GREEN"))
                                s++
                            }else if(reaction.emoji.name=="❌"){
                                msg.edit(new Discord.MessageEmbed()
                                .setDescription(`${kisi} teklifi Red etti ! `)
                                .setColor("RED"))
                                s++
                            }
                        }
                    }
                }
            });
        })
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["çıkmateklif"],
  permLevel: "User"
};

exports.help = {
  name: "çteklif",
  category: "Miscelaneous",
  description: "çıkma teklifi et",
  usage: "çteklif"
};
