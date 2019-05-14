const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports.run = async (client, msg, args, database) => {

    database.collection('guilds').doc(msg.guild.id).get().then((q) => {
        if(q.exists) {

            let dayRDM = 1345 + Math.random() * (2314 - 1345)
            let timeout = 18000000

            const language = q.data().language
            const prefix = q.data().prefix
        if(language === 'pt-br') {

        database.collection('users').doc(msg.member.id).get().then((dataCommandAuthor) => {
                if(q.exists) {

            const trabalho = dataCommandAuthor.data().trabalho
            if(trabalho !== null && timeout - (Date.now() - trabalho) > 0) {
            let time = ms(timeout - (Date.now() - trabalho));
                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setDescription(`<a:tempo:573983897860177940> \`|\` Você já trabalhou hoje, espere \` ${time.hours} horas e ${time.minutes} minutos\``)
                return msg.channel.send(embed)
            }
                        const moneyNotReal = dataCommandAuthor.data().money += dayRDM
                        const money = Math.floor(moneyNotReal)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : money,
                            'trabalho' : Date.now()
                        })
                        const newMoney = Math.floor(dayRDM)
                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setDescription(`<:sucesso:572239323165098005> \`|\` Bom trabalho! Hoje talvez tenha sido um dia lucrativo, o seu salário foi \`${newMoney}\``)
                msg.channel.send(embed)
                }
            })

        } else {
            const trabalho = dataCommandAuthor.data().trabalho
            if(trabalho !== null && timeout - (Date.now() - trabalho) > 0) {
            let time = ms(timeout - (Date.now() - trabalho));
                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setDescription(`<a:tempo:573983897860177940> \`|\` You already worked today, wait \` ${time.hours} hours and ${time.minutes} minutes\``)
                return msg.channel.send(embed)
            }

            database.collection('users').doc(msg.member.id).get().then((dataCommandAuthor) => {
                if(q.exists) {
                        const moneyNotReal = dataCommandAuthor.data().money += dayRDM
                        const money = Math.floor(moneyNotReal)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : money,
                            'trabalho' : Date.now()
                        })
                        const newMoney = Math.floor(dayRDM)
                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setDescription(`<:sucesso:572239323165098005> \`|\` Good Work! Maybe today was a lucrative day, your salary was \`${newMoney}\``)
                msg.channel.send(embed)
                }
            })
            }}
        })

        }

module.exports.config = {
    name: "work",
    aliases: ["trabalho", "daily", "trabalhar", "d", "w"]
}

module.exports.help = {
    name: "work",
    aliases: ["trabalho", "daily", "trabalhar", "d", "w"],
    usage: `[p]work`,
    descriptionEN: 'Work and get your salary',
    descriptionPT: 'Trabalha e ganha o seu salário'
}