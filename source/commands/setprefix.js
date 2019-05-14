const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database, dataGuild) => {

    const language = dataGuild.data().language
    if(language === 'pt-br') {
        if(!msg.member.hasPermission("MANAGE_GUILD")) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
        }

        if(!args[0]) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar um prefixo para ser mudado')
        }

        if(args[0].length >= 10) {
            return msg.channel.send('<:atencao:556923012381802496> `|` O tamanho máximo para o prefixo deve ser menor que 10')
        }

        database.collection('guilds').doc(msg.guild.id).update({
            'prefix' : args[0]
        })
        msg.channel.send(`<:sucesso:572239323165098005> \`|\` Sucesso! O prefixo foi alterado para \`${args[0]}\` `)

        } else {
            if(!msg.member.hasPermission("MANAGE_GUILD")) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You dont have permission to execute this command')
            }

            if(!args[0]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You need to type a prefix to be changed')
            }

            if(args[0].length >= 10) {
                return msg.channel.send('<:atencao:556923012381802496> `|` The max length of the prefix to be changed must be less than 10')
            }

            database.collection('guilds').doc(msg.guild.id).update({
                'prefix' : args[0]
            })
            msg.channel.send(`<:sucesso:572239323165098005> \`|\` Success! The prefix was changed to \`${args[0]}\` `)
        }
}

 module.exports.config = {
    name: "setprefix",
    aliases: ["setarprefixo", "changeprefix", "newprefix", "alterarprefixo"]
}

module.exports.help = {
    name: "setprefix",
    aliases: ["setarprefixo", "changeprefix", "newprefix", "alterarprefixo"],
    usage: `[p]setprefix **[\`Prefix: String\`]**`,
    descriptionEN: 'Sets the prefix that Ashina will use to execute the commands in the current guild',
    descriptionPT: 'Seta o prefixo que será executado para a Ashina responder aos comandos'
}

