const Discord = require('discord.js')
const config = require('../config.json');
const emojis = require('../emojis.json')

module.exports.run = async (client, msg, args, database) => {

    if(msg.author.id !== '532294395655880705') {
        return msg.channel.send('Apenas meu dono pode usar esse comando')
    }

    const member = msg.mentions.users.first() || client.users.get(args[0])

    if(!member) {
        return msg.channel.send(`${emojis.atencao} \`|\` Não consegui encontrar um usuário com essas informações`)
    }

    const memberID = msg.mentions.users.first().id || client.users.get(args[0]).id

    database.collection('bot').doc(member.id).set({
        'banned' : false
    })

    const embed = new Discord.RichEmbed()
    .setTitle('<:role:565634884358373376> Usuário desbanido')
    .setColor('#007fc7')
    .setDescription(`**O usuário \`${member.username}\` agora pode usar meus comandos**`)
    msg.channel.send(embed)
}

module.exports.config = {
    name: "botunban",
    aliases: ["whitelist"]
}

module.exports.help = {
    name: "botunban",
    aliases: ["whitelist"],
    usage: `[p]whitelist **[\`Member: Guild Member\`]**`,
    descriptionEN: 'Unban someone from using Ashina commands (Ashina Owner Only)',
    descriptionPT: 'Permite alguém usar comandos da Ashina novamente (Dono da Ashina Somente)'
}
