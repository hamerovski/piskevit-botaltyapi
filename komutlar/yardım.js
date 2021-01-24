const Discord = require('discord.js'); // \n
const ayar = require("/app/ayarlar.json")
exports.run = (client, message, args) => {

  let pages = [
 `**⚡Bot Hakkında Kısa Bilgı⚡**\n\n\n **🏆${ayar.prefix}yardım** \n **🏆${ayar.prefix}davet** \n **🏆${ayar.prefix}ailemiz** \n **🏆${ayar.prefix}tavsiye** \n **🏆${ayar.prefix}bilgi** \n **🏆${ayar.prefix}sunucutanıt**`,
    
  `**♻️Kullanıcı Ve Eğlence♻️**\n\n\n  **⚠️${ayar.prefix}8ball** \n **⚠️${ayar.prefix}aşkölçer** \n **⚠️${ayar.prefix}çekiç** \n  **⚠️${ayar.prefix}çayiç **\n **⚠️${ayar.prefix}döviz** \n **⚠️${ayar.prefix}wwegif** \n **⚠️${ayar.prefix}çekiliş** \n **⚠️${ayar.prefix}mcödül ** \n **⚠️${ayar.prefix}dcnitro** \n **⚠️${ayar.prefix}stresçarkı ** \n **⚠️${ayar.prefix}invert** \n **⚠️${ayar.prefix}wasted** \n **⚠️${ayar.prefix}top10** \n **⚠️${ayar.prefix}yaz** \n **⚠️${ayar.prefix}sor** \n **⚠️${ayar.prefix}kullanıcıbilgim** \n **⚠️${ayar.prefix}emojiyazı**`,

   `**❄Yetkili Komutlar🌀**\n\n\n **mod-log Kanalı Olmadan Çalısmaz** \n\n**⚡${ayar.prefix}uyar** \n **⚡${ayar.prefix}sustur** \n **⚡${ayar.prefix}ban** \n **⚡${ayar.prefix}unban** \n **⚡${ayar.prefix}mute** \n **⚡${ayar.prefix}temizle** \n **⚡${ayar.prefix}kick** \n **⚡${ayar.prefix}kilit** \n **⚡${ayar.prefix}çekiliş** \n **⚡${ayar.prefix}yavaşmod** \n **⚡${ayar.prefix}çrol-ver** \n **⚡${ayar.prefix}çsunucubilgi** \n **⚡${ayar.prefix}mesajat**`,
          
    `**🌀Bot Bilgi🌀**\n\n\n **📥${ayar.prefix}davet.** \n **📥${ayar.prefix}ping** \n **📥${ayar.prefix}istatistik.** \n **📥${ayar.prefix}bilgi**`,
        
`**🎶Muzik Komutlari🎵**\n\n\n **🎄${ayar.prefix}çal** \n **🎄${ayar.prefix}dur** \n **🎄${ayar.prefix}devam** \n **🎄${ayar.prefix}çalan** \n **🎄${ayar.prefix}çalan ** \n **🎄${ayar.prefix}geç** \n **🎄${ayar.prefix}sıra** `
              ];
  let page = 1;
 const embed = new Discord.MessageEmbed()
    .setColor('RANDOM')
 .setThumbnail(client.user.avatarURL({dynamic:true}))
    .setFooter(`Sayfa ${page} / ${pages.length}`)
    .setDescription(pages[page-1])
  message.channel.send(embed).then(msg => {

  msg.react('⏪')
  .then(r => {
    msg.react('⏩')

      //Filter
      const backwardsFilter = (reaction, user) => reaction.emoji.name === '⏪' && user.id === message.author.id;
      const forwardsFilter = (reaction, user) => reaction.emoji.name === '⏩' && user.id === message.author.id;

      const backwards = msg.createReactionCollector(backwardsFilter, { time: 100000 });
      const forwards = msg.createReactionCollector(forwardsFilter, { time: 100000 });

      forwards.on('collect', r => {
        if(page === pages.length) return;
       
page++;
        embed.setDescription(pages[page-1]);
        embed.setColor('RANDOM')
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })
      backwards.on('collect', r => {
        if(page === 1) return;
        page--;
        embed.setColor('RANDOM')
        embed.setDescription(pages[page-1]);
        embed.setFooter(`Sayfa ${page} / ${pages.length}`)
        msg.edit(embed)
      })

    })
  })
};


exports.conf = {
enabled: true,
guildOnly: true,
aliases: ["sayfa", "sy", "sayfalıyardım"],
permLevel: 0
};

exports.help = {
name: 'yardım',
description: 'Yardım Listesini Gösterir',
usage: 'yardım'
};