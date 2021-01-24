const Discord = require("discord.js");
const ms = require("ms");

exports.run = async(bot, message, args) => {

    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.channel.send(" Hatalı kullanım tespit edildi! \n\nDoğru Kullanım: ``*mute @kullanıcı <süre: 1dk - 1s>``");
    if (tomute.hasPermission("MANAGE_MESSAGES")) return message.reply(" Geçici olarak susturmaya çalıştığınız kişi yetkili veya bot'un yetkisi belirttiğiniz kişiyi geçici olarak susturmaya yetmiyor!");
    let muterole = message.guild.roles.find(r => r.name === "Susturulmuş");

    if (!muterole) {
        try {
            muterole = await message.guild.createRole({
                name: "Susturulmuş",
                color: "#818386",
                permissions: []
            })
            message.guild.channels.forEach(async(channel, id) => {
                await channel.overwritePermissions(muterole, { 
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }
    //end of create role
    let mutetime = args[1];
    if (!mutetime) return message.channel.send(" Hatalı kullanım tespit edildi! \n\nDoğru Kullanım: ``*mute @kullanıcı <süre: 1dk - 1s>``");

    await (tomute.addRole(muterole.id));
    message.channel.send(`<@${tomute.id}> adlı kullanıcı başarıyla susturuldu! \`[ ${ms(ms(mutetime))} ]\``);

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`:onay3: <@${tomute.id}> Kişinin susturulma süresi dolduğu için konuşma engeli kaldırıldı!`);
    }, ms(mutetime));

}

exports.conf = {
    enabled: true,
    guildOnly: false,
    aliases: ['mute'],
    permLevel: 0
};

exports.help = {
    name: 'mute',
    description: 'mute',
    usage: 'mute [Kullanıcı] [Süre]'
};