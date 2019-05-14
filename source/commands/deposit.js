const Discord = require('discord.js')
const ms = require ('parse-ms')
const emojis = require('../emojis.json')

module.exports.run = async (client, msg, args, database) => {

  database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
    const language = dataGuild.data().language

    if(language === 'pt-br') {
      database.collection('users').doc(msg.member.id).get().then((dataUser) => {     
        let timeout = 900000

        const bancoTempo = dataUser.data().bancoTempo
        if(bancoTempo !== null && timeout - (Date.now() - bancoTempo) > 0) {
          let time = ms(timeout - (Date.now() - bancoTempo));
          const embed = new Discord.RichEmbed()
          .setColor('#007fc7')
          .setDescription(`<a:tempo:573983897860177940> \`|\` Você já depositou um valor hoje, espere \` ${time.minutes} minutos e ${time.seconds} segundos\``)
          return msg.channel.send(embed)
        }

        if(!args[0]) {
          return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar um valor na sua conta para ser depositado')
        } else {

        if(isNaN(args[0])) {
           return msg.channel.send('<:atencao:556923012381802496> `|` O valor para ser depositado precisa ser um número')
        }

       const money = dataUser.data().money

       if(money < args[0]) {
          return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode depositar um valor que você não possue para o banco')
       } else {

        const moneyToBank = parseInt(args[0])

        if(args[0].includes('-') || args[0].startsWith(0)) {
          return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode depositar um valor negativo para o banco')
        } else {

         const newMoney = dataUser.data().money -= moneyToBank

         if(newMoney < 1500) {
            return msg.channel.send(`${emojis.atencao} \`|\` Para depositar você precisa deixar 1500 coins disponivel na sua mão, tente depositar \`${money - 1500}\` coins`)
         }
           const bankMoney = dataUser.data().bancoMoney += moneyToBank
           database.collection('users').doc(msg.member.id).update({
            'money' : newMoney,
            'bancoMoney' : bankMoney,
            'bancoTempo' : Date.now()
           })
          return msg.channel.send(`<:sucesso:572239323165098005> \`|\` Sucesso! Você depositou um valor de \`${moneyToBank}\` para o banco`)

                          }
                        }
                      }
                    })

    } else {

                    database.collection('users').doc(msg.member.id).get().then((dataUser) => {
                    let timeout = 900000

                      const bancoTempo = dataUser.data().bancoTempo
                          if(bancoTempo !== null && timeout - (Date.now() - bancoTempo) > 0) {
                            let time = ms(timeout - (Date.now() - bancoTempo));
                                const embed = new Discord.RichEmbed()
                                .setColor('#007fc7')
                                .setDescription(`<a:tempo:573983897860177940> \`|\` You already deposited a value today, wait \` ${time.minutes} minutos e ${time.seconds} segundos\``)
                                return msg.channel.send(embed)
                          }

                      if(!args[0]) {
                        return msg.channel.send('<:atencao:556923012381802496> `|` You need to type a value in your account to be deposited')
                      } else {

                        if(isNaN(args[0])) {
                          return msg.channel.send('<:atencao:556923012381802496> `|` The value to be deposited needs to be a number')
                        }

                        const money = dataUser.data().money

                        if(money < args[0]) {
                          return msg.channel.send('<:atencao:556923012381802496> `|` You cant deposite a value that you dont have to your account')
                        } else {
                          const moneyToBank = parseInt(args[0])

                          if(args[0].includes('-') || args[0].startsWith(0)) {
                              return msg.channel.send('<:atencao:556923012381802496> `|` You cant deposite a negative value to the bank')
                          } else {
                            const newMoney = dataUser.data().money -= moneyToBank
                            if(newMoney < 1500) {
                              return msg.channel.send(`${emojis.atencoa} \`|\` To deposite you need at least 1500 coins available in your account, try depositing \`${money - 1500}\` coins`)
                            }
                            const bankMoney = dataUser.data().bancoMoney += moneyToBank
                            database.collection('users').doc(msg.member.id).update({
                              'money' : newMoney,
                              'bancoMoney' : bankMoney,
                              'bancoTempo' : Date.now()
                            })
                            return msg.channel.send(`<:sucesso:572239323165098005> \`|\` Sucess! You deposited a value of \`${moneyToBank}\` to the bank`)

                          }
                        }
                      }
                    })
    }
  })
}

module.exports.config = {
    name: "deposit",
    aliases: ["deposity", "banco-depositar", "depositar"]
}

module.exports.help = {
    name: "deposit",
    aliases: ["deposity", "banco-depositar", "depositar"],
    usage: `[p]deposit **[\`Number: Int\`]**`,
    descriptionEN: 'Deposit some money from your hand to your bank account',
    descriptionPT: 'Deposita algum dinheiro da sua mão para a sua conta do banco'
}

