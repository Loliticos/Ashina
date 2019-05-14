
const Discord = require('discord.js')

module.exports.run = async (client, msg, args, database) => {

  database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
    const language = dataGuild.data().language

    if(language === 'pt-br') {
      database.collection('users').doc(msg.member.id).get().then((dataUser) => {
      if(!args[0]) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar um valor para ser sacado')
          }

            if(isNaN(args[0])) {
              return msg.channel.send('<:atencao:556923012381802496> `|` O valor para ser sacado precisa ser um número')
            }

          const moneyParaSacar = parseInt(args[0])

              if(args[0].includes('-') || args[0].startsWith(0)) {
                  return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode sacar um valor negativo')
              }
          const moneyUser = dataUser.data().bancoMoney

            if(moneyUser < args[0]) {
              return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode sacar um valor que você não possue')
            }
                let newMoneyBank = dataUser.data().bancoMoney -= moneyParaSacar
                let newMoney = dataUser.data().money += moneyParaSacar

                database.collection('users').doc(msg.member.id).update({
                  'money' : newMoney,
                  'bancoMoney' : newMoneyBank
                })

                return msg.channel.send(`<:sucesso:572239323165098005> \`|\` Sucesso! Você sacou um valor de \`${moneyParaSacar}\``)
        })

    } else {
      database.collection('users').doc(msg.member.id).get().then((dataUser) => {
      if(!args[0]) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You need to type a value to be taken')
          }

            if(isNaN(args[0])) {
              return msg.channel.send('<:atencao:556923012381802496> `|` The value to be taken needs to be a number')
            }

          const moneyParaSacar = parseInt(args[0])

              if(args[0].includes('-') || args[0].startsWith(0)) {
                  return msg.channel.send('<:atencao:556923012381802496> `|` You cant take a negative value')
              }
          const moneyUser = dataUser.data().bancoMoney

            if(moneyUser < args[0]) {
              return msg.channel.send('<:atencao:556923012381802496> `|` You cant take a value that you dont have')
            }
                let newMoneyBank = dataUser.data().bancoMoney -= moneyParaSacar
                let newMoney = dataUser.data().money += moneyParaSacar

                database.collection('users').doc(msg.member.id).update({
                  'money' : newMoney,
                  'bancoMoney' : newMoneyBank
                })

                return msg.channel.send(`<:sucesso:572239323165098005> \`|\` Success! You toke a value of \`${moneyParaSacar}\``)
        })

    }
  })

}

module.exports.config = {
    name: "take",
    aliases: ["sacar", "pegar"]
}

module.exports.help = {
    name: "take",
    aliases: ["sacar", "pegar"],
    usage: `[p]take **[\`Int: Number\`]**`,
    descriptionEN: 'Take a value of your bank account',
    descriptionPT: 'Saque um valor da sua conta do banco'
}

