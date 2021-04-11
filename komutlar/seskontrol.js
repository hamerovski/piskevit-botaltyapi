const Discord = require("discord.js");
module.exports = {
    name: "ses-kontrol",
    aliases: ["ses-kontrol"],
    description: "",
    usage: "ses-kontrol",
    ownerOnly: false,
    //herkese açık mı yöneticilere özel mi?
    run: async (message,args,client) => {   
      if(!message.member.hasPermission("ADMINISTRATOR")) {
          return message.channel.send("")
        }

        let yetki1 = "830614934441295893";
     /* let yetki2 = "rol id"; */

//- 1.         
  var VVA1 = "**Seslide ki Yetkililer:** \n";
  var sexymenofpk1 = "**Seslide Bulunmayan Yetkililer:** \n";

//- 2.
/* var VVA2 = "**Alt Düzey Seslide ki Yetkililer:** \n";
  var sexymenofpk2 = "**Alt Düzey Seslide Bulunmayan Yetkililer:** \n"; */


//- 1.
  message.guild.roles.cache.get(yetki1).members.map(MUA => {
    VVA1 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk1 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  });

//- 2.
/* message.guild.roles.cache.get(yetki2).members.map(MUA => {
    VVA2 += MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
    sexymenofpk2 += !MUA.voice.channel ? "» <@" + MUA.user.id + "> \n" : "";
  }); */


  const adamk1 = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setTimestamp()
  .setFooter(`Vıttırı Vızzık ADAMツ#0939`)
  .setDescription(`${VVA1}  ${sexymenofpk1}`)
  message.channel.send(adamk1)

/* const adamk2 = new Discord.MessageEmbed()
  .setColor("#ff0000")
  .setTimestamp()
  .setFooter(`Vıttırı Vızzık ADAMツ#0939`)
  .setDescription(`${VVA2}  ${sexymenofpk2}`)
  message.channel.send(adamk2) */
}
}
