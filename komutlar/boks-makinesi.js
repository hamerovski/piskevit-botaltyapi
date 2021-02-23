const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = (client, message, args) => {
 var cevaplar = ['Boks Makinesi Sonucu : **3000** !', 
                 'Boks Makinesi Sonucu : **100** !', 
                 'Boks Makinesi Sonucu : **900** !', 
                 'Boks Makinesi Sonucu : **1000** !',
                 'Boks Makinesi Sonucu : **50** !', 
                 'Boks Makinesi Sonucu : **2000** !', 
                 'Boks Makinesi Sonucu : **700** !',
                 'Boks Makinesi Sonucu : **550** !', 
                 'Boks Makinesi Sonucu : **999** !', 
                 'Boks Makinesi Sonucu : **1250** !', 
                 'Boks Makinesi Sonucu : **1150** !', 
                 'Boks Makinesi Sonucu : **1200** !'
                ];
 var cevap = cevaplar[Math.floor(Math.random() * cevaplar.length)]; 
 const ping = new Discord.MessageEmbed()
 .setColor(2828)
 .setDescription("🥊 " + cevap)
 return  message.channel.send(ping)
};

exports.conf = {
   enabled: true,
   guildOnly: false,
   aliases: ['boks-makinası', 'bm'],
   permLevel: 0
 };

 exports.help = {
   name: 'boksmakinesi',
   description: 'Boks makinesine vurur.',
   usage: 'boks-makinesi'
}
