  const request = require('request');

  module.exports.run = async (client, msg, args, database) => {

  	    database.collection('guilds').doc(msg.guild.id).get().then((q) => {
  	    	const language = q.data().language

  	    	if(language === 'pt-br') {

  	  try {
    if (!args[0]) {
    	return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar um termo para eu pesquisar')
    }

    request({url: 'https://djsdocs.sorta.moe/main/stable/embed?q=' + encodeURIComponent(args.join(' ')), json: true}, (req, res, json) => {
    	if(!json) return msg.channel.send('<:atencao:556923012381802496> `|` Eu não consegui encontrar um documento com esses termos!')
      msg.channel.send({embed: json});
    });

  } catch(e) {
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('Erro', `\`\`\` ${e} \`\`\``)

        msg.channel.send(embed)

    }
  	    } else {

  	  try {
    if (!args[0]) {
    	return msg.channel.send('<:atencao:556923012381802496> `|` You need to type a term for me to search')
    }

    request({url: 'https://djsdocs.sorta.moe/main/stable/embed?q=' + encodeURIComponent(args.join(' ')), json: true}, (req, res, json) => {
   if(!json) return msg.channel.send('<:atencao:556923012381802496> `|` I couldnt find a document with that terms!')
      msg.channel.send({embed: json});
    });

  } catch(e) {
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('Error', `\`\`\` ${e} \`\`\``)

        msg.channel.send(embed)

    }
  	    	}
  	    })

  }

module.exports.config = {
    name: "docs",
    aliases: ["djsdocs", "tag", "docs-djs", "djs"]
}

module.exports.help = {
    name: "docs",
    aliases: ["djsdocs", "tag", "docs-djs", "djs"],
    usage: `[p]docs **[\`Docs: String\`]**`,
    descriptionEN: 'See some information about Discord-JS',
    descriptionPT: 'Veja alguma informação sobre a livraria Discord.JS'
}
