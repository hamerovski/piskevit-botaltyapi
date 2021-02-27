const Discord = require ("discord.js");
const randomPuppy = require('random-puppy');

exports.run = (client, message, args) => {
    setTimeout(() => {
        message.delete();
        }, 6000);
    return message.channel.send("**Aga beee**").then(async msg => {

                        setTimeout(() => {
                            msg.edit('🚬');
                        }, 500);
                        setTimeout(() => {
                            msg.edit('🚬 ☁ ');
                        }, 700);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁ ');
                        }, 900);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁ ');
                        }, 1000);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁☁');
                        }, 1100);
                        setTimeout(() => {
                            msg.edit('🚬 ☁☁');
                        }, 1200);
                        setTimeout(() => {
                            msg.edit('🚬 ☁');
                        }, 1300);
                        setTimeout(() => {
                            msg.edit('**Sigara bitti, Afiyet olsun**')
                            msg.delete();
                        }, 6000);
                    });
                };




                exports.conf = {
                  enabled: true,
                  guildOnly: false,
                  aliases: ['agabe', 'yak'],
                  permLevel: "0"
                };

                exports.help = {
                  name: "sigarayak",
                  description: "sigara içersiniz",
                  usage: "sigara"
                };
