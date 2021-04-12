const Discord = require("discord.js");
module.exports.execute = async (client, message, args) => {       
//Arox was here! (Luisa BFF)
let Tag = "Tag" //Tagınız
let ServerName = "Kahve House" // Sunucu Adını Giriniz
let Kanal = "797114061027278868" // Açıklaması Değişecek Kanal
let BoosterRole =  "809833269059125269" // Booster Rol ID
//Arox was here! (Luisa BFF)
const emojiler = {
   0: "<a:0_arox:793946685608951808>", // Emoji ID 0
   1: "<a:1_arox:793946650162757652>", // Emoji ID 1
   2: "<a:2_arox:793947368542175283>", // Emoji ID 2
   3: "<a:3_arox:793946683187789864>", // Emoji ID 3
   4: "<a:4_arox:793946676645330946>", // Emoji ID 4
   5: "<a:5_arox:793946682936655883>", // Emoji ID 5
   6: "<a:6_arox:793946679564697621>", // Emoji ID 6
   7: "<a:7_arox:793946672056107078>", // Emoji ID 7
   8: "<a:8_arox:793946677106966559>", // Emoji ID 8
   9: "<a:9_arox:793946679174496306>"} // Emoji ID 9
  client.emojili = (string) => {
    let arx = "";
    String(string).split("").forEach(x => {
      arx += "" + emojiler[Number(x)];
    });
    return arx;
  };
    client.sayilariCevir = function(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  };
          var TotalMember = message.guild.memberCount
          var Online = message.guild.members.cache.filter(off => off.presence.status !== 'offline').size;
          var Taglı = message.guild.members.cache.filter(u => u.user.username.includes(Tag)).size;
          var Voice = message.guild.members.cache.filter(s => s.voice.channel).size;
          var Boost = message.guild.premiumSubscriptionCount;
          const arxEmbed = new Discord.MessageEmbed()
              .setColor('#2F3136')
              .setAuthor(`${message.guild.name}`,message.guild.iconURL())
              .setDescription(`
▫️ Sunucumuzda ${client.emojili(`${TotalMember}`)} **toplam** kullanıcı bulunmaktadır.
▫️ Sunucumuzda ${client.emojili(`${Online}`)} **aktif** kullanıcı bulunmaktadır.
▫️ Sunucumuzda ${client.emojili(`${Taglı}`)} **taglı** kullanıcı bulunmaktadır.
▫️ Sunucumuzda **sesli odalarda** ${client.emojili(`${Voice}`)} kullanıcı bulunmaktadır.
▫️ Sunucuda ${client.emojili(`${Boost}`)} **takviye** bulunmaktadır.
`)
message.channel.send(arxEmbed)
  client.setInterval(() => {
  let channel = client.channels.cache.get(Kanal); 
  channel.setTopic(`**• ${ServerName}: ** ${client.emojili(`${TotalMember}`)} **• Online:** ${client.emojili(`${Online}`)} **• Family:** ${client.emojili(`${Taglı}`)}`);
}, 10000);
}
module.exports.configuration = {
  name: "say",
    aliases: ["say"],
    usage: "say",
    description: "Arox tarafından hazırlanmıştır."
};
