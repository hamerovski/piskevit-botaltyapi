const jimp = require("jimp")

exports.run = async (client, message, args) => {
    if(!message.guild) return message.reply("**Bu komut DM üzerinde kullanılamaz!**")
        let img = jimp.read("https://cdn.discordapp.com/attachments/795858690263613469/829789075548274739/trump.png")
        if (!args[0]) return message.reply("DİKKAT! RTE KONUŞUYOR!.")
        img.then(image => {
            jimp.loadFont(jimp.FONT_SANS_32_BLACK).then(font => {
                image.resize(1000,500)
                image.print(font, 22, 120, args.join(" "), 600)
                image.getBuffer(jimp.MIME_PNG, (err, i) => {
                    message.channel.send({files: [{ attachment: i, name: "rte.png"}]})
                })
            })
        })
    }



    exports.conf = {
        enabled: true,
        guildOnly: false,
        aliases: ['rte', 'rte-tweet'],
        permLevel: 0
      };
       
      exports.help = {
        name: "rte",
        description: "Bot i",
        usage: "rte"
      };
