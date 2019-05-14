 const Discord = require('discord.js')

 module.exports.run = async (client, msg, args, database) => {

 	  database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
    	const language = dataGuild.data().language

    	let word;

    	if(language === 'pt-br') word = 'Esse servidor usa o Shard'
    	if(language === 'en-us') word = 'This guild uses the Shard'

	 let embed = new Discord.RichEmbed()
	 .setTitle(`<:ping:572533413500813322> Shard ${client.shard.count}/${(client.shard.count)}`)
	 .setColor('#007fc7')
	 .setFooter(`${word} ${client.shard.id + 1}`)

	client.shard.broadcastEval('this.ping').then(result => {

		let i = 1

		result.forEach(ping => {
			embed.addField(`<:conectado:572567604062060554> Shard ${i}`, `\`${Math.floor(ping)}\` **ms**`)
			++i
		})
            msg.channel.send(embed)
    	})
 	})
}

     module.exports.config = {
        name: "ping",
        aliases: ["shard", "shards"]
    }

module.exports.help = {
    name: "ping",
    aliases: ["shard", "shards"],
    usage: '`[p]shards`',
    descriptionEN: 'See the shards of the bot to see if its everything okay',
    descriptionPT: 'Veja o ping dos shards que o bot possue e veja se está tudo ok'
}
