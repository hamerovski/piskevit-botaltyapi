const Discord = require('discord.js'); //bu bir modül modüllerin ne işe yaradığını öğrenmek için 'Modül Yükleme' klasörüne


exports.run = (client, message) => {

if(text.toLowerCase()=="kolay")
{       
    var tsüre = 3000
    var işlem  = sayiliste[Math.floor(Math.random()*10)]+"+"+sayiliste[Math.floor(Math.random()*10)];
}        if(text.toLowerCase()=="orta")
{   
    var tsüre = 7000
    var işlem  = sayiliste[Math.floor(Math.random()*10)]+sayiliste[Math.floor(Math.random()*10)]+"+"+sayiliste[Math.floor(Math.random()*10)]+sayiliste[Math.floor(Math.random()*10)];
}        if(text.toLowerCase()=="zor")
{ 
    var tsüre=10000;
    var işlem  = sayiliste[Math.floor(Math.random()*10)]+sayiliste[Math.floor(Math.random()*10)]+sayiliste[Math.floor(Math.random()*10)]+"+"+sayiliste[Math.floor(Math.random()*10)]+sayiliste[Math.floor(Math.random()*10)]+sayiliste[Math.floor(Math.random()*10)];
}        else return message.channel.send("Lütfen zorluk yazınız(kolay,orta,zor) | Örnek : ``"+prefix+"işlemoyunu kolay``")
        var k  = 0,kk=0;
        var filter = m => m.author.id === message.author.id;
        setTimeout(function(){
            if(k==0){
                    message.channel.send("Süre bitti!");
                    kk++;
                }
            },tsüre)
        message.channel.send(new Discord.MessageEmbed().setTitle("İşlem sorusu : "+işlem).setColor("RANDOM")).then(message=>{
            message.channel.awaitMessages(filter,{
                max:1
            }).then(collected=>{
                if(kk==0){
                    if(collected.first().content==eval(işlem)){
                        message.channel.send(new Discord.MessageEmbed().setTitle("Doğru cevap").setColor("GREEN"))
                        k++;
                    }else{
                        message.channel.send(new Discord.MessageEmbed().setTitle("Yanlış cevap").setColor("RED"))
                        k++;
                    }
                }
            })
        })
};

exports.conf = {
  enabled: true, //komutun açık kapalı olduğunu gösterir | true = açık false = kapalı
  guildOnly: true, //komutu herkes kullanabiliyormu onu gösterir
  aliases: ['işlem-oyunu'], //komutun farklı kullanımları
  permLevel: 0 //kimler kullancağını belirtir 
};

exports.help = {
  name: 'işlemoyunu', //adını belirtin (kullanmak için gereken komut) Örneğin otorol NOT Hangi ismi yazarsanız komut o isimle çalışır
  description: 'matematik oyunu', //komutun açıklaması
  usage: 'işlemoyunu kolay' //komutun kullanım şekli (örneğin !otorol <@rol> <#kanal>)
};




