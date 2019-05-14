const Discord = require('discord.js')
const config = require('../config.json');
const fs = require('fs')
const figlet = require('figlet');
const emojis = require('../emojis.json')

module.exports.run = async (client, msg, args, database, dataGuild) => {

        const language = dataGuild.data().language

        if(language === 'pt-br') {

            if(!args[0]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa informar uma mensagem para ser transformada para Ascii')
            }

            if(args.join(' ').length > 30) {
                return msg.channel.send(`${emojis.atencao} \`|\` Máximo de 30 letras para o comando ascii`)
            }

            figlet(args.join(' '), function(err, ascii) {
                if(err) {
                    let embed = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .addField('Erro', `\`\`\` ${err} \`\`\``)
                    msg.channel.send(embed)
                }

                msg.channel.send('<:escrever:572843816244084737> Escrevendo sua mensagem em **ASCII**')
                msg.channel.send(`\`\`\`${ascii}\`\`\``)
            })

        } else {
            if(!args[0]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You need to inform a message to be transformed to Ascii')
            }

            if(args[0].length > 30) {
                return msg.channel.send(`${emojis.atencao} \`|\` Max of 30 letters to the command Ascii`)
            }

            figlet(args.join(' '), function(err, ascii) {
                if(err) {
                    let embed = new Discord.RichEmbed()
                    .setColor('#ff0000')
                    .addField('Error', `\`\`\` ${err} \`\`\``)
                    msg.channel.send(embed)
                }

                msg.channel.send('<:escrever:572843816244084737> Writing your message to **ASCII**')
                msg.channel.send(`\`\`\`${ascii}\`\`\``)
            })

        }
    
}


module.exports.config = {
    name: "ascii",
    aliases: ["ascii"]
}

module.exports.help = {
    name: "ascii",
    aliases: ["None"],
    usage: `[p]ascii **[\`Message: String\`]**`,
    descriptionEN: 'Write a message in Ascii',
    descriptionPT: 'Escreva uma mensagem em Ascii!'
}
