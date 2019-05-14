const Discord = require('discord.js')
const config = require('../config.json');
const querystring = require('querystring');
const emojis = require('../emojis.json')
const fetch = require('node-fetch');

module.exports.run = async (client, msg, args, database) => {

    database.collection('guilds').doc(msg.guild.id).get().then(async(dataGuild) => {
        const language = dataGuild.data().language

        if(language === 'pt-br') {
            if(!args[0]) {
                return msg.channel.send(`${emojis.atencao} \`|\` Você precisa digitar um termo para ser pesquisado`)
            }

            const query = querystring.stringify({ term: args.join(' ') })

            const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

            if(!list) {
                return msg.channel.send(`${emojis.atencao} \`|\` Nenhum resultado encontrado`)
            }

            const trim = (string, max) => ((string.length > max ? `${string.slice(0, max - 3)}...` : string))

            const [answer] = list

            const embed = new Discord.RichEmbed()
            .setColor('#007fc7')
            .setTitle(`${emojis.resultado} Resultados para ${answer.word}`)
            .addField(`${emojis.livros} Definição`, `${emojis.setinha} \`${trim(answer.definition, 1024)}\``)
            .addField(`${emojis.perguntas} Exemplos`, `${emojis.setinha} \`${trim(answer.example, 1024)}\``)
            msg.channel.send(embed)

        } else {

            if(!args[0]) {
                return msg.channel.send(`${emojis.atencao} \`|\` You need to type a term to be searched`)
            }

            const query = querystring.stringify({ term: args.join(' ') })

            const { list } = await fetch(`https://api.urbandictionary.com/v0/define?${query}`).then(response => response.json());

            if(!list) {
                return msg.channel.send(`${emojis.atencao} \`|\` No results found`)
            }

            const trim = (string, max) => ((string.length > max ? `${string.slice(0, max - 3)}...` : string))

            const [answer] = list

            const embed = new Discord.RichEmbed()
            .setColor('#007fc7')
            .setTitle(`${emojis.resultado} Results for ${answer.word}`)
            .addField(`${emojis.livros} Definition`, `${emojis.setinha} \`${trim(answer.definition, 1024)}\``)
            .addField(`${emojis.perguntas} Examples`, `${emojis.setinha} \`${trim(answer.example, 1024)}\``)
            msg.channel.send(embed)

        }

    })
}

module.exports.config = {
    name: "urban",
    aliases: ["dicionario", "definicao"]
}

module.exports.help = {
    name: "urban",
    aliases: ["dicionario", "definicao", "dictionary"],
    usage: `[p]urban **[\`String\`]**`,
    descriptionEN: 'Search for something in a dictionary',
    descriptionPT: 'Procure por algo em um dicionário'
}