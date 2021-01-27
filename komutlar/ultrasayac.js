const Discord = require("discord.js");
exports.run = (client, message, params) => { 
  const virus = new Discord.MessageEmbed()
  const countDownDate = new Date("2021/07/26 08:00:53").getTime(); //geri sayılacak ileri zamanki bir tarihi milisaniye cinsinden elde ediyoruz 
  const dayText	= "Gün";
  const hourText	= "Saat";
  const minuteText	= "Dakika";
  const secondText	= "Saniye";
  if (countDownDate){ //tarih var ise 
    var x = setInterval(function() { //sayacı belirli aralıklarla yenile 
      var now = new Date().getTime(); //şimdiki zamanı al 
      var distance = countDownDate - now; //geri sayılacak tarih ile şimdiki tarih arasındaki zaman farkını al 
      if (distance < 0) { //zaman farkı yok ise belirtilen zamanı geçti 
        $("#countdown_timer").html("Geri sayım yapılacak ileri bir tarih yoktur");
      }else { //zaman farkı var ise //aradaki zaman farkını gün,saat,dakika,saniye olarak böl 
        var days = Math.floor(distance / (1000 * 60 * 60 * 24)),
            hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
            minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
            seconds = Math.floor((distance % (1000 * 60)) / 1000),
            days = (days?'<div><div>'+days+'</div><div>'+dayText+'</div></div>':'149'), //gun varsa gun degerini yaz 
            hours = (hours?'<div><div>'+hours+'</div><div>'+hourText+'</div></div>':'15'), //saat varsa saat degerini yaz 
            minutes = (minutes?'<div><div>'+minutes+'</div><div>'+minuteText+'</div></div>':'47'), //dakika varsa dakika degerini yaz 
            seconds = (seconds?'<div><div>'+seconds+'</div><div>'+secondText+'</div></div>':'00'); //saniye varsa saniye degerini yaz 
        document.getElementById("countdown_timer").innerHTML = days + hours + minutes + seconds; //yazdır 
      } },
                        1000); //1 saniyede bir sayaç güncellenecek 
  } return message.channel.send(virus);
};
exports.conf = { enabled: true,
                guildOnly: false,
                aliases: [],
                permLevel: 0 };
exports.help = { name: "ultrasayac",
                description: "Lafı Koy",
                usage: "ultrasayac" };
