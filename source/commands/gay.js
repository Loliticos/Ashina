
const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database) => {

	database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
		const language = dataGuild.data().language

		let word;

		if(language === 'pt-br') word = 'é'
		if(language === 'en-us') word = 'is'

			let gay = Math.random() * (100)

		const member = msg.mentions.users.first() || client.users.get(args.join(' ')) || msg.author

		  const embed = new Discord.RichEmbed()
		  .setColor('#ee1dd5')
		  .setDescription(`🏳️‍🌈 ${member.username} ${word} \`${Math.floor(gay)}%\` gay`)
		  msg.channel.send(embed)

	})
}

module.exports.config = {
    name: "gay",
    aliases: ["gay"]
}

module.exports.help = {
    name: "gay",
    aliases: ["None"],
    usage: `[p]gay **[\`Member: Guild Member\`]**`,
    descriptionEN: "See the % of the 'gaysize' of your friend",
    descriptionPT: "Veja as % da 'gaycize' do seu amigo"
}
