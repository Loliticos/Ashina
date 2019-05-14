const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database) => {

    if(!msg.member.hasPermission("MANAGE_EMOJIS")) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
    }

    if(!msg.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Eu não possuo permissão para executar esse comando')
    }

    if(!args[0]) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar as informações o emoji para ser editado')
    }

    if(!args[1]) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar o novo nome para ser alterado')      
    }

    const { id } = Discord.Util.parseEmoji(args[0])

    let emoji = msg.guild.emojis.get(id) || msg.guild.emojis.find(emoji => emoji.name === args[0])

    if(!emoji) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Eu não encontrei um emoji com esse nome 😫')
    }

    emoji.edit({name: args[1]}).then(e => {
        msg.channel.send(`${e} \`|\` O nome do emoij foi alterado para \`${e.name}\` `)
})
.catch(console.error)

}

module.exports.config = {
    name: "renameemoji",
    aliases: ["editemoji", "renomearemoji"]
}

module.exports.help = {
    name: "renameemoji",
    aliases: ["renomearemoji"],
    usage: `[p]renameemoji **[\`Old Emoji\`] [\`New emoji name\`}]**`,
    descriptionEN: 'Rename an existing emoji',
    descriptionPT: 'Renomea um emoji já existente'
}
