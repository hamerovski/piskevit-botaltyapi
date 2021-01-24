const Discord = require("discord.js")
const client = new Discord.Client()
const TCMB_Doviz = require('tcmb-doviz');
const Doviz = new TCMB_Doviz();
const ayarlar = require("../ayarlar.json")

var prefix = ayarlar.prefix;

exports.run = async (client, message, args) => {
  
   
        const res = await Doviz.getKur("USD");
        const eur = await Doviz.getKur("EUR");
        const gbp = await Doviz.getKur("GBP");
        const jpy = await Doviz.getKur("JPY");
        const tarih = await Doviz.guncelTarih();
        let embed = new Discord.MessageEmbed();
        embed.setAuthor(`Döviz Kurları`,message.author.avatarURL());
    
        embed.setColor("RANDOM");
        embed.setDescription(`Dolar Alış: **${res.alis}** TL \nDolar Satış: **${res.satis}** TL \n \nEuro Alış: **${eur.alis}** TL\nEuro Satış: **${eur.satis}** TL \n \n:pound: İngiliz Sterlini Alış: **${gbp.alis}** TL \n:pound: İngiliz Sterlini Satış: **${gbp.satis}** TL`)
embed.setFooter(`Dövizlerin Güncellenme Tarihi;  \n${tarih}`)

        message.channel.send(embed);
    }

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["doviz"],
  permLevel: 0
};

exports.help = {
  name: 'döviz'
};