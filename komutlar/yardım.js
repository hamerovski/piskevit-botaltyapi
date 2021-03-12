const { MessageEmbed, Message } = require("discord.js")
exports.run = (client,message,args)=>{
 
let mp = client.commands.filter(a => a.help.type == "oda").map(a => `\`${client.prefix}${a.play.cmd}\`: **${a.play.desc}**`).join('\n\n')
let mp2 = client.commands.filter(a => a.help.type == "other").map(a => `\`${client.prefix}${a.play.cmd}\`: **${a.play.desc}**`).join('\n\n')
const embed = new MessageEmbed().setThumbnail(message.author.avatarURL({dynamic : true,format : "png"})).setColor('YELLOW').setAuthor('Lrows Özel oda ').setDescription(`
\`\`\` Yetkili Komutları \`\`\`

${mp2}

\`\`\` - Oda Komutları - \`\`\`

${mp ? mp : "Yok"}

\`\`\` - Sistem nasıl İşler - \`\`\`

**Bir Kullanıcı \`${client.prefix}özel-oda ekle\` İle Eklediğiniz Kanallardan birine girer ise Sistem Giren Kullanıcıya Eklediğiniz kanalın Kategorisinde bir Oda Açıp Kullanıcıyı Yeni Odaya atar. ve Kullanıcı Odayı İstediği gibi komutlar ile yönetebilir**

\`\`\` - Uyarılar - \`\`\`

・**Eğer Kullanıcı Ses kanallarında \`Switch\` Atarsa Bot bunu görmez Kanala \`Switch\` Atmak yerine \`Çık gir\` yapınız.**

・**Eğer Özel Odanız silinirse \`Özel Oda Oluştura\` Kanalınıza Tekrardan girerseniz bot size yeniden oda açacaktır. Fakat Bunu yapmadan Oda Komutlarını Kullanırsanız Bot Size Cevap Vermez.**
`)
message.channel.send(embed)
}//yardım komutunu ellemenize gerek yok otomatik tüm komutları listeliyor.


exports.help = {
    name : "yardım",
    aliases : ['help'],
    perm : [],
    botPerm : [],
    type : "other"
}
exports.play  = {
    desc : "Tüm komutları gösterir.",
    cmd : "yardım"
}