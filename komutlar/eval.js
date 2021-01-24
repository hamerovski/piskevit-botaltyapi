const Discord = require('discord.js')
const util = require('util');
const tokenuyari = `NAH!`

exports.run = async (client, message, args) => {
   let prefix = "p." //Kendi prefiziniz
	if(!args[0]) {
		const embed = new Discord.MessageEmbed()
			.setDescription(`Kod Yazmalısınız`)
			.setColor("BLACK")
			.setTimestamp()
		message.channel.send({embed})
		return
	}
	const code = args.join(' ');
if (code == client["token"]){
  const newEmbed = new Discord.MessageEmbed()
			.addField('Hata çıktı;', `\`\`\`xl\n${tokenuyari}\`\`\``)
			.setColor('BLACK');
		message.channel.send(newEmbed);
		return
}
	if(code.match(/(client.token)/g)) {
		const newEmbed = new Discord.MessageEmbed()
			.addField('Hata çıktı;', `\`\`\`xl\n${tokenuyari}\`\`\``)
			.setColor('BLACK');
		message.channel.send(newEmbed);
		return
	}

	function clean(text) {
		if (typeof text !== 'string')
			text = require('util').inspect(text, { depth: 0 })
		text = text
			.replace(/`/g, '`' + String.fromCharCode(8203))
			.replace(/@/g, '@' + String.fromCharCode(8203))
		return text;
	};

	const evalEmbed = new Discord.MessageEmbed().setColor("BLACK")
	try {
		var evaled = clean(await eval(code));
		if(evaled.startsWith('NDc')) evaled = tokenuyari;
		if (evaled.constructor.name === 'Promise') evalEmbed.setDescription(`\`\`\`\n${evaled}\n\`\`\``)
		else evalEmbed.setDescription(`\`\`\`xl\n${evaled}\n\`\`\``)
		const newEmbed = new Discord.MessageEmbed()
			.addField('📥 Giriş', `\`\`\`javascript\n${code}\n\`\`\``)
			.addField('📤 Çıkış', `\`\`\`xl\n${evaled}\`\`\``)
			.setColor("RANDOM")
		message.channel.send(newEmbed);
	}
	catch (err) {
		evalEmbed.addField('Hata;', `\`\`\`xl\n${err}\n\`\`\``);
		evalEmbed.setColor('BLACK');
		message.channel.send(evalEmbed);
	}
}

exports.conf = {
	enabled: true,
	guildOnly: false,
	aliases: [],
	permLevel: 5,
  kategori: "yapımcı"
}

exports.help = {
	name: 'eval',
	description: 'Yazılan kodu çalıştırır.',
	usage: 'eval [kod]'
}
