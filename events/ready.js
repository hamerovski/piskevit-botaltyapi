const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');
var prefix = ayarlar.prefix;

module.exports = client => {
          console.log(`|  Bilgi : Tüm Komutlar Yüklendi !                    |`);
          console.log(`|  Bilgi : Piskevit İsmi İle Giriş Yapıldı !                    |`);
var oyun = [
        "🔥 /yardım | Yardım Menüsü",
        "⭐️ /napim | Lafı Çak!",
        "⭐️ /koronatest | Test Yaptır!",
        "⭐️ /döviz | Güncel Döviz Fiyatları",
        "⭐️ /bitcoin | Bitcoin Fiyatları",
        "⭐️ /tarot | Bir Kart Çek! "  
    ];

    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setActivity(oyun[random], { url: 'https://www.twitch.tv/elraenn', type: 'STREAMING' });
        }, 2 * 2500);
  
  console.log(` `);
  console.log(` `);
  console.log(` `);
  console.log(`+-----------------------------------------------------+`);
  console.log(`|  Bilgi : Tüm Komutlar Yüklendi !                    |`);
  client.user.setStatus("dnd");
  console.log(`|  Bilgi : Aktivite Ayarlandı                         |`);
  console.log(`|  Id : ` + ayarlar.id + `                            |`);
  console.log(`+-----------------------------------------------------+`);

};
