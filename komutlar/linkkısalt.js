const Discord = require("discord.js");

module.exports.run = async (bot, message, args) =&gt; {
  //if(message.author.id !== "534724915593609216") return;
  //message.delete();
  let botmessage = args.join(" ");
  let embed = new Discord.MessageEmbed()
    .setTitle(`Link Kısaltıcı`)
    .setDescription(
      `[Kısaltılan Link İçin Tıkla]( https://www.pnd.tl/st/?api=9d073993d7f2b7a84f17aa51a3f68e0333f90cc1&amp;url=${botmessage})`
    )
    .setColor("BLUE")
    .setFooter(
      "Uyarı: Kısaltılan Linklerdeki Reklamlardan Botumuz Sorumlu Değildir!"
    );
  message.channel.send(embed);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
  kategori: ``
};

exports.help = {
  name: `linkkısalt`,
  description: `Link kısaltır!`,
  usage: `linkkısalt {link} `
};
