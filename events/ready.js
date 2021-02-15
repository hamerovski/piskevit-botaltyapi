const chalk = require('chalk');
const moment = require('moment');
const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

module.exports = client => {
var oyun = [
        "𝙌𝙐𝘽𝙄𝘾 𝘿𝙀𝙎𝙄𝙂𝙉™ 🔥",
        "⭐️ Created By The 𓆩 ΛЯΞS 𓆪 ⭐️",
        "⭐️ discord.gg/KFk7jtTsxd ⭐️"  
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
  client.user.setActivity(`${client.guilds.size} sunucu + ${client.users.size} kullanıcı`);
  console.log(`|  Bilgi : Aktivite Ayarlandı                         |`);
  console.log(`|  Bilgi : Şu An `+ client.guilds.size + ` Adet Sunucuda Aktif Durumdayım     |`);
  console.log(`|  Şuanki Ismim : ` + ayarlar.isim + `                        |`);
  console.log(`|  Id : ` + ayarlar.id + `                            |`);
  console.log(`+-----------------------------------------------------+`);

};
