const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
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

        client.user.setActivity(oyun[random], "𝙌𝙐𝘽𝙄𝘾 𝘿𝙀𝙎𝙄𝙂𝙉™" );
        }, 2 * 2500);
  
  console.log(` `);
  console.log(` `);
  console.log(` `);
  console.log(`+-----------------------------------------------------+`);
  console.log(`|  Bilgi : Tüm Komutlar Yüklendi !                    |`);
  client.user.setStatus("dnd");
  client.user.setActivity(`BOT: Şu an ` + client.channels.size + ` adet kanala, ` + client.guilds.size + ` adet sunucuya ve ` + client.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString() + ` kullanıcıya hizmet veriliyor!`);
  console.log(`|  Bilgi : Aktivite Ayarlandı                         |`);
  console.log(`|  Bilgi : Şu An `+ client.guilds.size + ` Adet Sunucuda Aktif Durumdayım     |`);
  console.log(`|  Şuanki Ismim : ` + ayarlar.isim + `                        |`);
  console.log(`|  Id : ` + ayarlar.id + `                            |`);
  console.log(`+-----------------------------------------------------+`);

};
