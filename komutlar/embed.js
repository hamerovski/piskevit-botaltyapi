const Discord = require("discord.js");
const db = require("quick.db");
const { MessageEmbed } = require('discord.js')

exports.run = async (client, msg, args) => {
     if (!msg.member.hasPermission('ADMINISTRATOR')) return msg.channel.send('Bu komutu kullanamazsın.').then(m => {
        setTimeout(() => {
            m.delete()
        }, 3000);
    })
    let embed = new MessageEmbed()
    msg.reply('Yerleştirmenin başlığı ne olmalıdır? hiçbiri yoksa, "hiçbiri" yazın').then(m => m.delete({timeout: 30000}))
    let title = await msg.channel.awaitMessages(res => res.author.id === msg.author.id, {
        max: 1,
        time: 30000,
    })

    if(title.size) {
        if (title.first().content !== "hiçbiri") {
            if (title.first().length > 256) return msg.reply('Açıklama 2048 karakteri aşamaz.').then(m => m.delete({timeout: 5000}))
            embed.setTitle(title.first().content)
        }
    }


    msg.reply('Yerleştirmenin açıklaması ne olmalıdır? hiçbiri yoksa, "hiçbiri" yazın').then(m => m.delete({timeout: 30000}))
    let description = await msg.channel.awaitMessages(res => res.author.id === msg.author.id, {
        max: 1,
        time: 30000,
    })

    if(description.size) {
        if (description.first().content !== "hiçbiri") {
            if (description.first().length > 2048) return msg.reply('Açıklama 2048 karakteri aşamaz.').then(m => m.delete({timeout: 5000}))
            embed.setDescription(description.first().content)
        }
    }

    msg.reply('Gömülü görüntünün görüntüsü ne olmalıdır? hiçbiri yoksa, "hiçbiri" yazın').then(m => m.delete({timeout: 30000}))
    let image = await msg.channel.awaitMessages(res => res.author.id === msg.author.id, {
        max: 1,
        time: 30000,
    })

    if(image.size) {
        if (image.first().content !== "hiçbiri") {
            if (!/\.(jpe?g|png|gif)$/i.test(image.first().content)) {
                return msg.reply('Bu geçerli bir URL değildi.').then(m => m.delete({timeout: 5000}))
            }
            embed.setImage(image.first().content)
        }
    }

    msg.reply('Onaltılık renk veya normal renk gibi yerleştirmenin rengi ne olmalıdır.').then(m => m.delete({timeout: 30000}))
    let color = await msg.channel.awaitMessages(res => res.author.id === msg.author.id, {
        max: 1,
        time: 30000,
    })

    embed.setColor(color.first().content)

    msg.reply('Yerleştirmenin altbilgisi ne olmalıdır? hiçbiri yoksa, "hiçbiri" yazın').then(m => m.delete({timeout: 30000}))
    let footer = await msg.channel.awaitMessages(res => res.author.id === msg.author.id, {
        max: 1,
        time: 30000,
    })

    if(footer.size) {
        if (footer.first().content !== "hiçbiri") {
            if (footer.first().length > 2048) return msg.reply('Altbilgi 2048 karakteri aşamaz.').then(m => m.delete({timeout: 5000}))
            embed.setFooter(footer.first().content)
        }
    }

    msg.channel.send(embed)

}
exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0,
  kategori: "sunucu"
};
exports.help = {
  name: "embed",
  description:
    "Embedle bir şeyler işte xd",
  usage: ""
};
