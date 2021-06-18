const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "🔥 p.yardım | Yardım Menüsü",
        "🌈 Yeni Prefiximiz p.",
        "👊 p.napim | Lafı Çak!",
        "🦠 p.koronatest | Test Yaptır!",
        "💸 p.döviz | Güncel Döviz Fiyatları",
        "💲 p.bitcoin | Bitcoin Fiyatları",
        "⭐️ p.tarot | Bir Kart Çek! "  
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], { url: 'https://www.twitch.tv/elraenn', type: 'STREAMING' });
        }, 2 * 2500);
  
  console.log(` `);
  console.log(` `);
  console.log(` `);
  console.log(`|  Bilgi : Tüm Komutlar Yüklendi !                    |`);
  console.log(`|  Bilgi : Aktivite Ayarlandı                         |`);
};
