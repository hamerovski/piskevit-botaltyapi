exports.run = async (client, message) => {
  const voiceChannel = message.member.voice.channel;
  if (!message.member.voice.channel) { return message.channel.send("Ses kanalında olman lazım bu komutu yazarken kanka"); }

  const permissions = message.member.voice.channel.permissionsFor(message.guild.me);
  if (permissions.has("CONNECT") === false) { return message.channel.send("Odaya girmek için yetkim yok aw"); }
  message.member.voice.channel.join();
  return message.channel.send("Artık yargı dağıtmak için hazırım!");
};

exports.conf = {
  enabled: true,
  runIn: ["text"],
  aliases: ['katıl'],
  permLevel: 1,
  botPerms: [],
  requiredFuncs: [],
};

exports.help = {
  name: "gir",
  description: "Bulunduğunuz odaya giriş yapar",
  usage: "gir",
  usageDelim: "",
};
