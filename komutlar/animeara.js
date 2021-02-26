const animeJs = require('@freezegold/anime.js');
const anime = new animeJs.Client()
const Discord = require("discord.js")
exports.run = (client, message, args) => {
let lol = args.slice(0).join(' ')
if(!lol) return message.channel.send("Bir anime adı girmelisin.")
anime.searchAnime(lol).then(res => {
if(!res) return message.channel.send("Böyle bir anime bulamadım.")
let embed = new Discord.MessageEmbed()
.setColor("RANDOM")
.setTitle(res[0].titles.romaji)
.setDescription(:star: ${res[0].averageRating}\n\n**MyAnimeList kullanıcı sayısı** : \${res[0].userCount}`\nMyAnimeList favori sayısı : `${res[0]. favoritesCount}`\nÇıkış Tarihi : `${res[0].startDate}`\nBitiş tarihi : `${res[0].endDate}`\nBölüm Sayısı : `${res[0].episodeCount}`\nBölüm Uzunluğu : `${res[0].episodeLength}dk`\nNsfw Mi? : ${res[0].nsfw? "Evet" : "Hayır"}\n\n\nKonu : \n${res[0].synopsis.replace("'", "").replace("+","\n")}`)
.setImage(res[0].  posterImage.large)
message.channel.send(embed)
});
};
 
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};
 
exports.help = {
  name: 'animeara',
  description: 'Anime aramak için kullanılır.',
  usage: 'animeara '
};
