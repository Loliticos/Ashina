const Discord = require('discord.js')

module.exports.run = async (client, msg, args, database) => {

    database.collection('guilds').doc(msg.guild.id).get().then((guild) => {
        const language = guild.data().language
        if(language === 'pt-br') {
            if(!args[0]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa mencionar o usuário dar algum dinheiro!')
            }

            if(!args[1]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa informar a quantidade de dinheiro para doar')
            }

            const member = msg.mentions.users.first() || msg.guild.members.get(args[0])

            if(!member) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Eu não consegui encontrar algum usuário com essa informação')
            }

            if(member.bot) {
                return msg.channel.send('<:atencao:556923012381802496> `|`*Você não pode dar dinheiro para um bot!')
            }

            if(member.id === msg.member.id) {
                return msg.channel.send('<:atencao:556923012381802496> `|` *ocê não pode dar dinheiro para você mesmo')
            }

            const moneyToGive = parseInt(args[1])
            const moneyToGiveCheck = args[1]

            if(moneyToGiveCheck.includes('-') || moneyToGiveCheck.startsWith(0)) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode dar um dinheiro negativo para um usuário')
            }

            database.collection('users').doc(msg.member.id).get().then((dataCommandAuthor) => {
                database.collection('users').doc(member.id).get().then((dataMentionedUser) => {
                    const money = dataCommandAuthor.data().money
                    if(money < moneyToGiveCheck) {
                        return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode dar um dinheiro que você não possui para um usuário')
                    }

                    if(isNaN(args[1])) {
                        return msg.channel.send('<:atencao:556923012381802496> `|` Oops ocorreu algum erro! Verifique se os parametros estão certos `[p]doar @Usuario Quantia`')
                    }

                    const newMoney = dataCommandAuthor.data().money -= moneyToGive
                    database.collection('users').doc(msg.member.id).update({
                        'money' : newMoney
                    })

                    const moneyUser = dataMentionedUser.data().money += moneyToGive
                    database.collection('users').doc(member.id).update({
                        'money' : moneyUser
                    })

                    msg.channel.send(`<:goodmorning:574682643967246356> \`|\` Que ato de caridade! Você deu \`${moneyToGive}\` coins para ${member}`);
                })
            })

        } else {
            if(!args[0]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You need to mention a user to give some money!')
            }

            if(!args[1]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You need to put on the amount of money to give')
            }

            const member = msg.mentions.users.first() || msg.guild.members.get(args[0])

            if(!member) {
                return msg.channel.send('<:atencao:556923012381802496> `|` I couldnt find a user with that information!')
            }

            if(member.bot) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You cant give money to a bot!')
            }

            if(member.id === msg.member.id) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You cant give money to your self yourself')
            }

            const moneyToGive = parseInt(args[1])
            const moneyToGiveCheck = args[1]

            if(moneyToGiveCheck.includes('-') || moneyToGiveCheck.startsWith(0)) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You cant give negative money to a user')
            }

            if(isNaN(args[1])) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Oops there was an error! Verify if the parameters is correct: `[p]give @Member Amount`')
            }

            database.collection('users').doc(msg.member.id).get().then((dataCommandAuthor) => {
                database.collection('users').doc(member.id).get().then((dataMentionedUser) => {
                    const money = dataCommandAuthor.data().money
                    if(money < moneyToGiveCheck) {
                        return msg.channel.send('<:atencao:556923012381802496> `|` You cant give a money that you dont have to a user')
                    }

                    const newMoney = dataCommandAuthor.data().money -= moneyToGive
                    database.collection('users').doc(msg.member.id).update({
                        'money' : newMoney
                    })

                    const moneyUser = dataMentionedUser.data().money += moneyToGive
                    database.collection('users').doc(member.id).update({
                        'money' : moneyUser
                    })

                    msg.channel.send(`<:goodmorning:574682643967246356> \`|\` What a charity act! You gave \`${moneyToGive}\` coins to ${member}`);
                })
            })
        }
    })

}

module.exports.config = {
    name: "give",
    aliases: ["doar"]
}

module.exports.help = {
    name: "give",
    aliases: ["doar"],
    usage: `[p]give **[\`Member: Guild Member\`] [\`Number: Int\`]**`,
    descriptionEN: 'Give someone some money',
    descriptionPT: 'Doe um pouco de dinheiro para alguém'
}

