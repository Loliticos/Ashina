const Discord = require('discord.js')
const emojis = require('../emojis.json')
const reverse = require('reverse-string');
 
module.exports.run = async (client, msg, args, database) => {

	database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
		const language = dataGuild.data().language

		if(language === 'pt-br') {

    		if(!args[0]) {
        		return msg.channel.send(`${emojis.atencao} \`|\` Você precisa digitar um texto para ser invertido!`)
    		}

    		if(args.join(' ').length > 100) {
    			return msg.channel.send(`${emojis.atencao} \`|\` Máximo de 100 letras para esse comando!`)
    		}

    		msg.channel.send(`<:escrever:572843816244084737> Aqui está sua mensagem invertida: \`${reverse(args.join(' '))}\``)

		} else {

    		if(!args[0]) {
        		return msg.channel.send(`${emojis.atencao} \`|\` You need to type a text to be inverted!`)
    		}

    		if(args.join(' ').length > 100) {
    			return msg.channel.send(`${emojis.atencao} \`|\` Max of 100 letters to this command!`)
    		}

    		msg.channel.send(`<:escrever:572843816244084737> Here are your reversed phrase: \`${reverse(args.join(' '))}\``)
		}
	})

}



module.exports.config = {
    name: "replacetext",
    aliases: ["replace", "inverso", "trocar", "inverse", "change", "reverse", "reversetext"]
}


module.exports.help = {
    name: "replacetext",
    aliases: ["replace", "inverso", "trocar", "inverse", "change", "reverse", "reversetext"],
    usage: `[p]inverse **[\`Phrase: String\`]**`,
    descriptionEN: 'Reverse a text (Very Useless)',
    descriptionPT: 'Inverta um texto (Muito inutil)'
}