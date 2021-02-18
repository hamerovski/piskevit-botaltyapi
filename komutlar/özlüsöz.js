const Discord = require("discord.js");
const bot = require("../bot.js");
exports.run = (client, message, params) => {
  var ne = [
    "**Sana burdan bi uçarım... -Hezarfen Ahmet Çelebi**",
    "**Üst üste geliyorsa dertler, ctrl + shift + delete yap geçer. -Bill Gates**",
    "**Seni Parçalarım. -Albert Einstein**",
    "**LPG alma motoru kurutur. -Rudolf Diesel**",
    "**Hocam evde unutmuşum -Alois Alzheimer**",
    "**Serbest bırak sen kendini, su kaldırıyor zaten. -Arşimet**",
    "**Yatak odası takımını kız tarafı almalı. -Sigmund Freud**",
    "**Karı kızı geçtim, alternatif akımı seçtim. -Nikola Tesla**",
    "**Komşuların ışık yanıyosa bizim sigorta atmıştır. -Thomas Edison**",
    "**Abla vallaha arkadan ittirdiler. -Henry Ford**",
    "**Ben sizin içinizi bilirim -Wılhelm Röntgen**",
    "**O işleri bıraktım artık. -Wılhelm Röntgen**",
    "**Ne diyecektim lan ben. -Alois Alzheimer**",
    "**Oğlan dayıya, kız halaya çeker. -Charles Darwin**",
    "**Çıkıktır o, kırık olsa yerinde duramazsın. -Wılhelm Röntgen**",
    "**Dininiz, imanınız para olmuş. -Karl Marx**",
    "**Dur bak kimi veriyorum. -Alexander Graham Bell**",
    "**Oha o onunla nasıl çıkıyo ya. -Sigmund Freud**",
    "**Yere oturma beton çeker. -Isaac Newton**",
    "**İlle de roman olsun. -Dostoyevski**",
    "**Fatih Terim Türkiye'nin en büyük vantilatörüdür. -Mahsun Kırmızıgül**",
    "**Benim koyunum bile Avrupa'nın koyunundan farklı bakıyor. -Nihat Doğan**",
    "**Beni yerden yere vurdular ama ben lastik top gibiyim. -İbrahim Tatlıses**",
    "**Dünya senin etrafında dönmüyo şirin kız. -Galileo Galilei**",
    "**Varınca öaldır. -Alexander Graham Bell**",
    "**Çaldır kapat ben seni ararım. -Alexander Graham Bell**",
    "**Sıcak değil de nem çok. -Anders Celcius**",
    "**Eee herşeyin de birşeyi var... -Friedrich Nietzsche**",
    "**Artık fiziğimle gündeme gelmekten sıkıldım. -Albert Einstein**",
    "**Ben okulu bırakıp yetenek sizsinize başvurcam knk. -Harry Potter**",
    "**Ben olmasam hepiniz kudurmuştunuz. -Louis Pasteur**",
    "**Belki bi atom olamadık ama bizde parçalandık be gülüm. -Albert Einstein**",
    "**Setup'a bas sonra next, next, next. -Bill Gates**",
    "**Okumazsan yerin şantiye; Dinlenmeden parmak banma krem şantiye. -Dr.Oetker**",
    "**Aynı yhaa mzk fln takılıyom sen npyn :). -Ludwing van Beethoven**",
    "**Deneme, deneme 1,2,3. Ses deneme, deneme kontrol. -Michel de Montaigne**",
    "**Sen yinede öyle deme işveren sonuçta. -Karl Marx**",
    "**Sesin kesik kesik geliyo, çeken bi yere geç. -Alexander Graham Bell**",
    "**Sandalyeyi getir lamba patlamış -Thomas Edison**",
    "**Beyler hesabı Alman usulü yapalım hak geçmesin. -Karl Marx**",
    "**Puding dişlerimi çürütüyor. Sen ise düşlerimi...  -Dr.Oetker**",
    "**Ayran bütün kötülüklerin anasıdır. -Jack Daniel**",
    "**Onunda selamı var. -Alexander Graham Bell**",
    "**Arabam şekil, yolumdan çekil. -Recaizade Mahmud Ekrem**",
    "**System32 sil düzelir. -Bill Gates**",
    "**Denemekte fayda var. -Michel de Montaigne**",
    "**🙈🙉🙊 -Charles Darwin**",
    "**Yine mi bezelye kadın bıktım senden. -Gregor Mendel**",
    "**I'm ad İstanbul w/@konstantin4sq.com/1453.fsm -Fatih Sultan Mehmet**",
    "**Olacağı varmış hacı nerden bilcen. -Nostradamus**",
    "**Ulan şifreyi unuttum. -Leonardo Da Vinci**",
    "**Beyaz eşya birazda şans işi. -Robert Bosh**",
    "**olm amerikada kızlar teklif ediyomuş. -Kristof Kolomb**",
    "**İyi sallandık... -James Parkinson**",
    "**Abi kapıdayız otomatiğe bassanıza. -Sultan Alparslan**",
    "**Eskişehir tam öğrenci şehri yeah. -Evliya Çelebi**",
    "**Kaldıramazsan kaldırırlar gülüm. -Arşimet**",
    "**Celcius ne diyosa 273 fazlası. -Kelvin**",
    "**Çaktırmadan bakacaksın. Wılhelm Röntgen**",
    "**İnce uçlu şarj aleti olan varmı? -Alexander Graham Bell**",
    "**Allah yarattı demem döverim. -Charles Darwin**",
    "**Hiçmi sevmedin beni? Allah'ın yokmu be kadın? -Friedrich Nietzsche**",
    "**Dikme indir hoca birkaç puan verir belki. -Pisagor**",
    "**Bi bilene mi sorsak ne yapsak? -Kristof Kolomb**",
    "**Su soğuk ama girince alışıyosun. -Nikolaos Trikupis(Yunan İşgal Ordusu Başkumandanı)**",
    "**Yakarım Bilirsin -İmparator Neron**",
    "**Kula kulluk edene yazıklar olsun! -Charles Darwin**",
    "**Gadasını aldığım... Asma suratını. -Victor Hugo**",
    "**Olm öyle demeyin, Hürrem iyi kızdır. -Kanuni Sultan Süleyman**",
    "**Bir yemin ettim ki, Dönemem. -Hipokrat**",
    "**Tarzım değilsin... -Pierre Cardin**",
    "**İsterseniz önlü arkalı çekiyim. -Johannes Gutenberg**",
    "**Cehalet ne güzel lan. Herşeyi biliyosun. -Sokrates**"
  ];
  var daşşak = Math.floor(Math.random() * ne.length);
  const motion = new Discord.MessageEmbed()
    .setDescription(`${ne[daşşak]}`)
    .setColor(0xe2ff00)
    .setTimestamp();
  message.channel.send(motion);
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: "özlüsöz"
};
