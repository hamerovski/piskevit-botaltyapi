const Discord = require("discord.js");
const client = new Discord.Client();
const moment = require("moment");
const osutils = require("os-utils");
const os = require("os");
require("moment-duration-format");
exports.run = async (client, message, args) => {
const duration = moment
    .duration(client.uptime)
    .format(" D [Gün], H [Saat], m [Dakika], s [Saniye]");

  osutils.cpuUsage(function(v) {

    const PinkCode = new Discord.MessageEmbed()

      .setColor("RANDOM")

      .setFooter("Piskevit İstatistikleri")

      .setDescription(`**Piskevit Bot Bilgileri**`)

      .addField("Bot Yapımcısı", `<@!773553681043554344> `)
      .addField(
        "Bilgiler",
        `Sunucu Sayısı: **${
          client.guilds.cache.size
        }** \nKullanıcı Sayısı: **${client.guilds.cache
          .reduce((a, b) => a + b.memberCount, 0)
          .toLocaleString()}** \nKanal Sayısı: **${
          client.channels.cache.size
        }** \nSesli Kanal Sayısı: **${client.channels.cache.filter(x => x.type === 'voice').size}**\nPing: **${client.ws.ping}ms** \nUptime Süresi: **${duration}**`,
        true
     ) 

      .addField(
        "Diğer Bilgiler",
        `Toplam Aktif Kişi Sayısı: **${
          client.users.cache.filter(x => x.presence.status === "online").size
        }** \nToplam Offline Kişi Sayısı: **${
          client.users.cache.filter(x => x.presence.status === "offline").size
        }** \nToplam Boşta Sayısı: **${
          client.users.cache.filter(x => x.presence.status === "idle").size
        }** \nToplam Rahatsız Etme Kişi Sayısı: **${
          client.users.cache.filter(x => x.presence.status === "dnd").size
        }**`, 
        true
      )

      .addField(
        "Sürümler",
        `Discord.js Sürümü: **v${Discord.version}** \nNode.js Sürümü: **${
          process.version
        }** \nVeri Kaydı: **croxydb** \nBot Version: **v3.0.0** \nBulunan Komut Sayısı: **${
          client.commands.size
        }**`,
        true
      )

      .addField(
        "Sistem",
        `CPU: **${os.cpus().map(i => `${i.model}`)[0]}** \nCPU Kullanımı: **${(
          v * 100
        )
          .toString()
          .split(".")[0] +
          "." +
          (v * 100)
            .toString()
            .split(".")[1]
            .split("")[0] +
          (v * 100)
            .toString()
            .split(".")[1]
            .split("")[1]}%** \nRam Kullanımı: **${(
          process.memoryUsage().heapUsed /
          2024 /
          2024
        ).toFixed(
          2
        )}/512MB** \nİşletim Sistemi: **${os.platform()}** \nBit: **${os.arch()}**`, 
        true
      );

    message.channel.send(PinkCode);

  });
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["i"],
  permLevel: 0
};

exports.help = {
  name: "istatistik",
  description: "",
  usage: ""
};
