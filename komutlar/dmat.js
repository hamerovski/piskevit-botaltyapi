const Discord = require('discord.js');

exports.run = async(client, message, args) => {
   if (message.author.id != "427868241025695746") return message.reply('Bunu Sadece Sahibim Kullanabilir');
message.delete()
  let wen = client.users.cache.get(args[0]) 
if (!wen) return message.channel.send("Bir kişinin ID' si girin.") 
let samita = args.slice(1).join(" ")
if(!samita) return message.channel.send('Bir mesaj girin.' )
wen.send(samita)
message.channel.send("<a:mavitik:810496708412047380> ``İşlem Başarılı`` <a:mavitik:810496708412047380>").then(async msg => {
                        setTimeout(() => {
                            msg.delete();
                        }, 3000);
   })
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['dm-at', 'dm'],
  permLevel: 5,
};

exports.help = {
  name: 'dmat'
};
