
const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database) => {
    const member = msg.mentions.users.first() || client.users.get(args[0])

    database.collection('users').doc(msg.member.id).get().then((dataCommandAuthor) => {
        database.collection('guilds').doc(msg.guild.id).get().then((guild) => {
            const language = guild.data().language

            if(language === 'pt-br') {
                if(!member) {
                    const money = dataCommandAuthor.data().money
                    return msg.channel.send(`<:coins:573984089992855593> \`|\` Você atualmente possui \`${money}\` coins`)
            }
                if(member) {
                    database.collection('users').doc(member.id).get().then((dataMentionedUser) => {
                        const moneyUser = dataMentionedUser.data().money
                        return msg.channel.send(`<:coins:573984089992855593> \`|\` Esse usuário atualmente possui \`${moneyUser}\` coins`)
                    })
                } 
            } else {
                if(!member) {
                    const money = dataCommandAuthor.data().money
                    return msg.channel.send(`<:coins:573984089992855593> \`|\` You actually have \`${money}\` coins`)
                }

                if(member) {
                    database.collection('users').doc(member.id).get().then((dataMentionedUser) => {
                        const moneyUser = dataMentionedUser.data().money
                        return msg.channel.send(`<:coins:573984089992855593> \`|\` This user actually haves \`${moneyUser}\` coins`)
                    })
                }
            }
        })

    })

 
}

    module.exports.config = {
    name: "coins",
    aliases: ["money"]
}

module.exports.help = {
    name: "coins",
    aliases: ["money"],
    usage: `[p]coins **[\`Member: Guild Member\`]**`,
    descriptionEN: 'See how much coins you have or another person haves',
    descriptionPT: 'Veja a quantidade de dinheiro que você possue ou que outra pessoa'
}
