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

    if(member.id === msg.author.id) {
    	return msg.channel.send(`${emojis.atencao} \`|\` Você não pode banir você mesmo burrinho`)
    }

    if(!args[1]) {
        return msg.channel.send(`${emojis.atencao} \`|\` Diga o motivo para o usuário ser impossibilitado de usar meus comandos`)
    }

    const memberID = msg.mentions.users.first().id || client.users.get(args[0]).id

    database.collection('bot').doc(member.id).set({
        'banned' : true,
        'motivo' : args.slice(1).join(' ')
    })

    const embed = new Discord.RichEmbed()
    .setTitle('<:banido:574675264517439520> Usuário banido')
    .setColor('#ff0000')
    .setDescription(`**O usuário \`${member.username}\` foi banido de usar meus comandos\n Motivo: \`${args.slice(1).join(' ')}\`**`)
    msg.channel.send(embed)
}

module.exports.config = {
    name: "botban",
    aliases: ["blacklist"]
}

module.exports.help = {
    name: "botban",
    aliases: ["blacklist"],
    usage: `[p]blacklist **[\`Member: Guild Member\`] [\`Reason: String\`]**`,
    descriptionEN: 'Ban someone from using Ashina Commands (Ashina Owner Only)',
    descriptionPT: 'Bane alguém de usar os comandos da Ashina (Dono da Ashina Somente)'
}
