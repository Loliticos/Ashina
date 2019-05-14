const Discord = require('discord.js')
const config = require('../config.json');
const superagent = require('superagent')

module.exports.run = async (client, msg, args, database) => {

    let prefix = 'a!'

    database.collection('guilds').doc(msg.guild.id).get().then(dataGuild => {
        const language = dataGuild.data().language
        prefix = dataGuild.data().prefix

        if(language === 'pt-br') {

            if(!msg.member.hasPermission("MANAGE_GUILD")) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
            }

            if(!args[0]) {
                const embed = new Discord.RichEmbed()
                .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
                .setTitle(`<:como:563082470833127424> \`${prefix}setlang\``)
                .addField('<:exemplos:572956673665269770> Exemplos:', `${prefix}setlang \`pt-br\`\n ${prefix}setlang \`en-us\``)
                .addField('<:aliases:572935329699594280> Aliases', '**lang, language, setlanguage**')
                .setColor('#007fc7')
                return msg.channel.send(embed)
            }

            if(args[0] == 'pt-br' || args[0] == 'PT-BR' || args === 'PT BR') {
                database.collection('guilds').doc(msg.guild.id).update({
                    'language' : 'pt-br'
                })

                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setAuthor('Configuração', msg.author.displayAvatarURL)
                .addField('<:mundo:572435835442692096> Linguagem', '**<:idioma:572445685106868234> Sistema de Linguagem `|` Idioma: `Português`**')
                return msg.channel.send(embed)

            } else if(args[0] === 'en-us' || args[0] === 'EN-US' || args === 'EN US') {
                database.collection('guilds').doc(msg.guild.id).update({
                    'language' : 'en-us'
                })
                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setAuthor('Configuração', msg.author.displayAvatarURL)
                .addField('<:mundo:572435835442692096> Linguagem', '**<:idioma:572445685106868234> Sistema de Linguagem `|` Idioma: `Inglês`**')
                return msg.channel.send(embed)

            } else {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar uma linguagem válida, `pt-br ou en-us`')
            }


        } else {

            if(!msg.member.hasPermission("MANAGE_GUILD")) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You dont have permission to execute this command')
            }

            if(!args[0]) {
                const embed = new Discord.RichEmbed()
                .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
                .setTitle(`<:como:563082470833127424> \`${prefix}setlang\``)
                .addField('<:exemplos:572956673665269770> Examples:', `${prefix}setlang \`pt-br\`\n ${prefix}setlang \`en-us\``)
                .addField('<:aliases:572935329699594280> Aliases', '**lang, language, setlanguage**')
                .setColor('#007fc7')
                return msg.channel.send(embed)
            }

            if(args[0] == 'pt-br' || args[0] == 'PT-BR' || args === 'PT BR') {
                database.collection('guilds').doc(msg.guild.id).update({
                    'language' : 'pt-br'
                })

                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setAuthor('Config', msg.author.displayAvatarURL)
                .addField('<:mundo:572435835442692096> Language', '**<:idioma:572445685106868234> System of Language `|` Language: `Portuguese`**')
                return msg.channel.send(embed)

            } else if(args[0] === 'en-us' || args[0] === 'EN-US' || args === 'EN US') {
                database.collection('guilds').doc(msg.guild.id).update({
                    'language' : 'en-us'
                })
                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setAuthor('Config', msg.author.displayAvatarURL)
                .addField('<:mundo:572435835442692096> Linguagem', '**<:idioma:572445685106868234> System of Language `|` Language: `English`**')
                return msg.channel.send(embed)

            } else {
                return msg.channel.send('<:atencao:556923012381802496> `|` You need to type a valid lang, either `pt-br` or `en-us`')
            }
        }
    })
}
module.exports.config = {
    name: "setlang",
    aliases: ["lang", "language", "setlanguage"]
}

module.exports.help = {
    name: "setlang",
    aliases: ["lang", "language", "setlanguage"],
    usage: `[p]setlang **[\`Language: String\`]**`,
    descriptionEN: 'Sets the language that Ashina will use to communicate with you',
    descriptionPT: 'Seta a linguagem que a Ashina irá usar para comunicar com você'
}