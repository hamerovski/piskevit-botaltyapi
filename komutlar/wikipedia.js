const Discord = require("discord.js");
const bot = new Discord.Client();
const superagent = require("superagent");
const snekfetch = require("snekfetch");
exports.run = async (client, message, args) => {
  const query = args.join(" ");
  const { body } = await snekfetch
    .get("https://tr.wikipedia.org/w/api.php")
    .query({
      action: "query",
      prop: "extracts",
      format: "json",
      titles: query,
      exintro: "",
      explaintext: "",
      redirects: "",
      formatversion: 2
    });
  if (body.query.pages[0].missing) return message.channel.send("Sonuç yok");
  const embed = new Discord.MessageEmbed()
    .setColor(0x00a2e8)
    .setTitle(body.query.pages[0].title)
    .setAuthor("Vikipedi", "https://i.imgur.com/a4eeEhh.png")
    .setDescription(
      body.query.pages[0].extract.substr(0, 2000).replace(/[\n]/g, "\n\n")
    );
  return message.channel.send(embed).catch(console.error);
};

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: ["vikipedi", "viki"],
  permLevel: 0
};

exports.help = {
  name: "wikipedia",
  description: "Wikipediadan bilgi verir",
  usage: "wikipedia <kelime>"
};
