const Discord = require("discord.js");
const get = require("request")
exports.run = async (client, message, args) => {
let soru = args.join(' ');
if(!soru) return message.reply('soru sormalısın')
let encodedsoru = encodeURI(soru)
get(`https://api.codare.fun/sor/${encodedsoru}`, async function (err, resp, body) { 
body = JSON.parse(body); 
if(err) return message.channel.send('hata oluştu')
message.channel.send(body.cevap)
    }) 
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["sor"],
  permLevel: 0
};

exports.help = {
  name: "sor",
  description: "bota soru sorarsınız",
  usage: "sor"
};
