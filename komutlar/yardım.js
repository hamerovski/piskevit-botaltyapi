const Discord = require('discord.js'); // \n
const ayar = require("/app/ayarlar.json")
exports.run = (client, message, args) => {

  let pages = [
 `**⚡Bot Hakkında Kısa Bilgi⚡**\n\n\n **🏆 ${ayar.prefix}yardım** \n **🏆 ${ayar.prefix}davet** \n **🏆 ${ayar.prefix}istatistik** \n **🏆 ${ayar.prefix}canlıdestek** \n **🏆 ${ayar.prefix}sunucu-sayısı**`,

  `**👾Kullanıcı Ve Eğlence👾**\n\n\n  **⚠️${ayar.prefix}8ball** \n **⚠️${ayar.prefix}koronatest** \n **⚠️${ayar.prefix}aktivite** \n **⚠️${ayar.prefix}tarot** \n **⚠️${ayar.prefix}özlüsöz** \n **⚠️${ayar.prefix}zarat** \n **⚠️${ayar.prefix}ağla** \n **⚠️${ayar.prefix}fal** \n **⚠️${ayar.prefix}havadurumu** \n **⚠️${ayar.prefix}rozet-bilgi** \n **⚠️${ayar.prefix}avatar** \n **⚠️${ayar.prefix}afk** \n **⚠️${ayar.prefix}edit** \n  **⚠️${ayar.prefix}adamasmaca** \n  **⚠️${ayar.prefix}aşkölçer** \n **⚠️${ayar.prefix}balıktut** \n  **⚠️${ayar.prefix}112** \n    **⚠️${ayar.prefix}155** \n  **⚠️${ayar.prefix}itfaiye** \n **⚠️${ayar.prefix}fbi** \n **⚠️${ayar.prefix}döviz** \n **⚠️${ayar.prefix}napim** \n **⚠️${ayar.prefix}oylama** \n  **⚠️${ayar.prefix}intihar-et** \n **⚠️${ayar.prefix}düello ** \n **⚠️${ayar.prefix}kelime-tahmini** \n **⚠️${ayar.prefix}kt-puan** \n **⚠️${ayar.prefix}kuşdili** \n   **⚠️${ayar.prefix}yumruk-at** \n **⚠️${ayar.prefix}eval** \n **⚠️${ayar.prefix}deprembilgi** \n **⚠️${ayar.prefix}yaz** \n **⚠️${ayar.prefix}banner-yazı** \n **⚠️${ayar.prefix}bitcoin**`,

   `**🛡️Yetkili Komutlar🛡️**\n\n\n **sadece yetkililer için...** \n\n**⚡${ayar.prefix}anit-raid** \n **⚡${ayar.prefix}ayrıl** \n **⚡${ayar.prefix}ban** \n **⚡${ayar.prefix}ban-log** \n **⚡${ayar.prefix}ban-koruma** \n **⚡${ayar.prefix}ban-koruma-sıfırla** \n **⚡${ayar.prefix}ban-sayısı** \n **⚡${ayar.prefix}ban-limit** \n **⚡${ayar.prefix}ban-limit-sıfırla** \n **⚡${ayar.prefix}ban-limit-rol** \n **⚡${ayar.prefix}ban-limit-rol-sıfırla** \n **⚡${ayar.prefix}ban-sayısı**  \n **⚡${ayar.prefix}ban-yetkili-rol** \n **⚡${ayar.prefix}bot-koruma** \n **⚡${ayar.prefix}bot-koruma-kapatma** \n **⚡${ayar.prefix}duyuru** \n **⚡${ayar.prefix}duyuru-kanal-ayarla** \n **⚡${ayar.prefix}emoji-koruma** \n **⚡${ayar.prefix}ever-here-engel** \n **⚡${ayar.prefix}kanal-koruma** \n **⚡${ayar.prefix}kanal-koruma-sıfırla** \n **⚡${ayar.prefix}kick** \n **⚡${ayar.prefix}kick-log** \n **⚡${ayar.prefix}kick-yetkili-rol** \n **⚡${ayar.prefix}komutlar** \n **⚡${ayar.prefix}mute** \n **⚡${ayar.prefix}otorol-ayarla** \n **⚡${ayar.prefix}otorol-kapat** \n **⚡${ayar.prefix}oylama** \n **⚡${ayar.prefix}rol-ver** \n **⚡${ayar.prefix}sayaç** \n **⚡${ayar.prefix}sil** \n **⚡${ayar.prefix}sunuculogo** \n **⚡${ayar.prefix}yazı-paylaş**`,

    `**🌀Bot Bilgi🌀**\n\n\n **📥${ayar.prefix}davet.** \n **📥${ayar.prefix}ping** \n **📥${ayar.prefix}istatistik.** \n **📥${ayar.prefix}komutlar.** \n **📥${ayar.prefix}sunucu-sayısı.** \n **📥${ayar.prefix}bot-bilgi**`,

`**🎶Muzik Komutlari🎵**\n\n\n **Radyo Ve Müzik Mevcuttur** \n\n**🎄${ayar.prefix}çal** \n **🎄${ayar.prefix}dur** \n **🎄${ayar.prefix}devam** \n **🎄${ayar.prefix}çalan** \n **🎄${ayar.prefix}çalan ** \n **🎄${ayar.prefix}geç** \n **🎄${ayar.prefix}sıra** \n **🎄${ayar.prefix}radyo <1-16>** `
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
