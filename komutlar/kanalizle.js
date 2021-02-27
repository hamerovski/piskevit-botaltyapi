const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json')
const izle = new Discord.Collection();


exports.run = (client, message, args) => {
    if(message.author.id !== ayarlar.sahip) {
        const embed = new Discord.MessageEmbed()
        .setColor(0xFF5733)
        .setTitle(':x:HATA')
        .setDescription(`Sahibimin Komutunu kullanamazsınız`) 
        .setFooter(`${message.guild}`)//\n ${Date.now() - message.createdTimestamp} ms
        .setThumbnail(client.user.displayAvatarURL())
        return message.channel.send({embed})};

  const channel = (message.guild.channels.cache.get(args[0]) || message.channel);
  if(izle.has(channel.id)) {
    izle.get(channel.id).stop();
    message.channel.send("Kanal İzleme Durduruldu: "+`**${channel.name}**.`);
    return izle.delete(channel.id);
  }
  
  message.channel.send("Kanal İzleniyor: "+`**${channel.name}**.`);
  const collector = channel.createMessageCollector(()=>true);
  let author = message.author
  collector.on("collect", (collected, collector) => console.log(`[${collected.guild.name}]   [${collected.channel.name}]   [#${collected.author.username}]     ${collected.content}    `));
  izle.set(channel.id, collector);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["kizle","kanalwatch","channelwatch"],
  permLevel: 0
};

module.exports.help = {
  name: 'kanalizle',
  description: 'Kanal izlersiniz',
  usage: 'kanalizle '
};
