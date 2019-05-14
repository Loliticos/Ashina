const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database) => {

    database.collection('guilds').doc(msg.guild.id).get().then((q) => {
        if(q.exists) {
            const language = q.data().language

        if(language === 'pt-br') {

        if(!msg.member.hasPermission("MANAGE_EMOJIS")) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
        }

        if(!msg.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Eu não possuo permissão para executar esse comando')
        }

        if(!args[0]) {
            return msg.channel.send('<:atencao:556923012381802496> `|`*Você precisa digitar o nome do emoji para ser deletado')
        }

        const { id } = Discord.Util.parseEmoji(args[0])

        let emoji = msg.guild.emojis.get(id) || msg.guild.emojis.find(emoji => emoji.name === args[0])

        if(!emoji) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Eu não consegui achar um emoji com essas informações 😫')
        }

        msg.guild.deleteEmoji(emoji)
        let embed = new Discord.RichEmbed()
        .setColor('#00e8ff')
        .setDescription(`<:lixeira:572205802627268609> \`|\` Esse emoji foi deletado com sucesso`)
        msg.channel.send(embed)

        } else {
        if(!msg.member.hasPermission("MANAGE_EMOJIS")) {
            return msg.channel.send('<:atencao:556923012381802496> `|` **You dont have permission to execute this command')
        }

        if(!msg.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) {
            return msg.channel.send('<:atencao:556923012381802496> `|` I dont have permission to execute this command')
        }

        if(!args[0]) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You need to type the name of the emoji to be deleted')
        }

        const { id } = Discord.Util.parseEmoji(args[0])

        let emoji = msg.guild.emojis.get(id) || msg.guild.emojis.find(emoji => emoji.name === args[0])

        if(!emoji) {
           return msg.channel.send('<:atencao:556923012381802496> `|` I couldnt find a emoji with that information 😫')
        }

        msg.guild.deleteEmoji(emoji)
        let embed = new Discord.RichEmbed()
        .setColor('#00e8ff')
        .setDescription(`<:lixeira:572205802627268609> \`|\` That emoji has been deleted with success`)
        msg.channel.send(embed)
        }
        }
    })



}

module.exports.config = {
    name: "removeemoji",
    aliases: ["removeremoji", "deleteemoji"]
}

module.exports.help = {
    name: "removeemoji",
    aliases: ["removeremoji", "deleteemoji"],
    usage: `[p]removeemoji **[\`Emoji\`]**`,
    descriptionEN: 'Remove an existing emoji from the guild',
    descriptionPT: 'Remove um emoji já existente no servidor'
}
