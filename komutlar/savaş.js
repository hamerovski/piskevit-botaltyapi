const Discord = require("discord.js");
const { Canvas } = require('canvas-constructor');
const { loadImage } = require('canvas');


module.exports.run = async (client, message, args, data) => {
 if(!args[0]) return  message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor(`CodeMareFi - Discord Bot`, client.user.displayAvatarURL()).setDescription(`**|** !!savaş sunucu`).setFooter(`${client.user.username} - Discord Bot`, client.user.displayAvatarURL({dynamic: true})));
    if(args[0].toLocaleLowerCase() == "sunucu") {
      let sunucu1 = args[1];
      if(!sunucu1) return  message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor(`CodeMareFi - Discord Bot`, client.user.displayAvatarURL()).setDescription(`**|** !!savaş sunucu 1sunucuID 2sunucuID #kanal`).setFooter(`${client.user.username} - Discord Bot`, client.user.displayAvatarURL({dynamic: true})));
       if(isNaN(sunucu1)) return  message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor(`CodeMareFi - Discord Bot`, client.user.displayAvatarURL()).setDescription(`**|** !!savaş sunucu 1sunucuID 2sunucuID #kanal`).setFooter(`${client.user.username} - Discord Bot`, client.user.displayAvatarURL({dynamic: true})));
       let sunucu2 = args[2];
       if(!sunucu2) return  message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor(`CodeMareFi - Discord Bot`, client.user.displayAvatarURL()).setDescription(`**|** !!savaş sunucu 1sunucuID 2sunucuID #kanal`).setFooter(`${client.user.username} - Discord Bot`, client.user.displayAvatarURL({dynamic: true})));
      if(isNaN(sunucu2)) return  message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor(`CodeMareFi - Discord Bot`, client.user.displayAvatarURL()).setDescription(`**|** !!savaş sunucu 1sunucuID 2sunucuID #kanal`).setFooter(`${client.user.username} - Discord Bot`, client.user.displayAvatarURL({dynamic: true})));
      let kanal = message.mentions.channels.first();
      if(!kanal) return  message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor(`CodeMareFi - Discord Bot`, client.user.displayAvatarURL()).setDescription(`**|** !!savaş sunucu 1sunucuID 2sunucuID #kanal`).setFooter(`${client.user.username} - Discord Bot`, client.user.displayAvatarURL({dynamic: true})));
    if(!client.guilds.cache.get(sunucu1)) return  message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor(`CodeMareFi - Discord Bot`, client.user.displayAvatarURL()).setDescription(`**|** Sunucuyu Bulamadım Lütfen Beni Eklesin.`).setFooter(`${client.user.username} - Discord Bot`, client.user.displayAvatarURL({dynamic: true})));
    if(!client.guilds.cache.get(sunucu2)) return  message.channel.send(new Discord.MessageEmbed().setColor("BLUE").setAuthor(`CodeMareFi - Discord Bot`, client.user.displayAvatarURL()).setDescription(`**|** Sunucuyu Bulamadım Lütfen Beni Eklesin.`).setFooter(`${client.user.username} - Discord Bot`, client.user.displayAvatarURL({dynamic: true})));
      var serverIcon = client.guilds.cache.get(sunucu1).iconURL({format:"png",size:512});
      var serverIcon2 = client.guilds.cache.get(sunucu2).iconURL({format:"png",size:512});
          
           const image = await loadImage("https://cdn.discordapp.com/attachments/801872035143483413/828233927936311316/cmf-savas.jpg");
      const image_2 = await loadImage(serverIcon ? serverIcon : "https://cdn.discordapp.com/attachments/801872035143483413/828233916972400650/1.png?size=512");
      const image_3 = await loadImage(serverIcon2 ? serverIcon2 : "https://cdn.discordapp.com/attachments/801872035143483413/828233916972400650/1.png?size=512");
      let img = new Canvas(1366, 768)
    .printImage(image, 0, 0, 1366, 768)
      .printImage(image_2, 115, 215, 450, 412)
     .printImage(image_3,  825, 215, 450, 412)
       .setColor('#fff')
           .setTextFont('100px Impact')
        .setTextAlign('center')
        .printText('1.', 330, 185)
       .printText('2.', 1035, 185)
    .toBuffer();
       kanal.send(new Discord.MessageAttachment(img, "CodeMareFi-savas.png")).then(a => {
         a.react("🥇")
         a.react("🥈")
       });
    };

};

module.exports.conf = {
    commands: ["savaş"],
    enabled: true,
    guildOnly: true
};
