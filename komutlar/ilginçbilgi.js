const Discord = require('discord.js');

exports.run = (client, message, args) => {
    var ilgincsöz = [
        "Kaju olarak bildiğimiz çerez aslında kaju meyvesinin sapıdır.",
        "Ananas aslında meyve değildir ve tarlada bu şekilde büyür.",
        "Su aygırının sütü pembe renklidir.",
        "Mavi balinaların kalbi o kadar büyüktür ki bir insan atardamarları içerisinde rahatlıkla yüzebilir.",
        "Kuzey Kore ile Finlandiya'yı ayıran tek ülke Rusya'dır.",
        "'Duck Hunt' aslında iki kişilik bir oyundur.İkinci oyuncu ördeği kontrol eder.",
        "Plüton keşfedildiği tarihten itibaren bir kez bile güneşin etrafında tam tur dönmemiştir. Bu yüzden artık bir gezegen olarak kabul edilmiyor.",
        "Bal güneş görmediği sürece asla bozulmaz.",
        "Mario blokları eliyle kırar, kafasıyla değil",
        "19. yüzyıldaki tüm insanlar, şuan 2 dakikada çekilen fotoğraflar kadar fotoğraf çekememişti.",
        "Yer fıstığı aslında bir baklagildir ve toprağın altında büyür.",
        "Her 5000 bebekten birisi anüsü olmadan (imperforate anus) doğuyor ve hastane ortamında anüs yapılması gerekiyor.",
        "Gökyüzündeki yıldız sayısı dünya üzerindeki tüm plajlardaki kum tanesi sayısından fazladır.",
        "Bin saniye yaklaşık 16 dakika, bir milyon saniye yaklaşık 11 gün, bir milyar saniye yaklaşık 32 yıl ve bir trilyon saniye yaklaşık 32.000 yıl eder.",
        "İnsan DNA'sı %50 oranında muz DNA'sı ile aynıdır.",
        "İlk 'Star Wars' Filmi yayınlandığında (25 Mayıs 1977) Fransa'da hala giyotin ile idam yasaldı. Giyotin, kelle vurdurtmaya benzer bişeydir.",
        "Rusya, Pluto'dan daha büyük bir yüzölçümüne sahiptir.",
        "Ahtapotların üç tane kalbi vardır.",
        "Fareler ve atlar kusamaz.",
        "Yasalara göre; Belçika'da her ilkokul öğrencisinin mızıka dersi alması zorunludur.",
        "Şayet soğan doğrarken sakız çiğnerseniz; evet, ağlamazsınız.",
        "İnsanoğlunun vücudundaki en güçlü kas, çene kasıdır.",
        "Bir okyanusun en derin yerinde, demir bir topun dibe çökmesi bir saatten uzun sürer.",
        "Bugüne kadar ölçülmüş en büyük buz dağı, 200 mil uzunluğunda ve 60 mil genişliğindedir ve Belçika'dan daha büyük bir yüzölçümüne sahiptir.",
        "İnsanın gözü tam olarak 576 megapikseldir.",
        "Işık saniyede 300.000 km yol alıyor.",
        "Su samurları el ele tutuşarak uyuyorlar.",
       "Dünyanın en uzun süren trafik sıkışıklığı 12 gün sürdü, 100 km kuyruk oluştu ve araçlar günde 1 kilometre ilerleyebildiler",
      "Taklitçi ahtapot isimli ahtapot, sadece renk değiştirmekle kalmıyor, aynı zamanda dil balığı, aslan balığı ve deniz yılanı gibi hayvanların şekline de bürünebiliyor.",
        
    ]
    var ilgincsöz = ilgincsöz[Math.floor(Math.random(1) * ilgincsöz.length)]
    const ilgincsözembed = new Discord.MessageEmbed()
    .setColor("RANDOM")
    .setAuthor(`İlginç Bilgi`, message.author.avatarURL())
    .setFooter(`${message.author.username} bir ilginç bilgi öğrendi.`)
  .setDescription(`${ilgincsöz}`)
    return message.channel.send(ilgincsözembed);
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ["ib","ilgincbilgi"],
  permLevel: 0
};

exports.help = {
  name: 'ilginçbilgi',
  description: 'Bilmediginiz bir sürü ilginc bilgi verir.',
  usage: 'ilginçbilgi'
}
