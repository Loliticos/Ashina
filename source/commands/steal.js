const Discord = require('discord.js')
const ms = require ('parse-ms')
const emojis = require('../emojis.json')

module.exports.run = async (client, msg, args, database) => {

  database.collection('users').doc(msg.author.id).get().then((dataCommandAuthor) => {
    database.collection('guilds').doc(msg.guild.id).get().then((guild) => {
        const language = guild.data().language
        let timeout = 1800000
        if(language === 'pt-br') {

            const steal = dataCommandAuthor.data().steal
            if(steal !== null && timeout - (Date.now() - steal) > 0) {
            let time = ms(timeout - (Date.now() - steal));
                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setDescription(`<a:tempo:573983897860177940> \`|\` Você já roubou hoje, espere \` ${time.minutes} minutos e ${time.seconds} segundos\``)
                return msg.channel.send(embed)
            }


            if(!args[0]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa mencionar um usuário para roubar')
            }

            const member = msg.mentions.members.first() || msg.guild.members.get(args[0])

            if(!member) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Eu não consegui encontrar um usuário com essas informações')
            }

            if(member.bot) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode roubar um bot')
            }

            if(member.id === msg.member.id) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode roubar você mesmo')
            }

            database.collection('users').doc(member.id).get().then((dataMentionedUser) => {
                    const gun = dataCommandAuthor.data().gun
                    const moneyMentionedUser = dataMentionedUser.data().money.toString()
                    const toBeStealed = 674 + Math.random() * (moneyMentionedUser - 674)

                    if(gun === false) {
                      return msg.channel.send(`${emojis.atencao} \`|\` Você precisa de uma arma para assaltar alguma pessoa!`)
                    }

                    if(moneyMentionedUser.includes('-') || moneyMentionedUser.startsWith(0)) return msg.channel.send(`${emojis.atencao} \`|\` \`${member.user.username}\` não tinha dinheiro suficiente para ser roubado, então \`${msg.author.username}\` atirou nele`)

                    if(gun === 'desert eagle') {
                       const percentToLoseDesert = Math.random() * (100)

                       if(percentToLoseDesert < 53) {
                        const moneyNotReal3 = dataCommandAuthor.data().money -= toBeStealed
                        const newMoney = Math.floor(moneyNotReal3)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : newMoney,
                            'steal' : Date.now()
                        })
                        const newMoney1 = Math.floor(toBeStealed)
                        msg.channel.send(`<:policia:560904908061147138> \`|\` Você foi pego ao tentar roubar e perdeu \`${newMoney1}\` coins`)  

                        } else if(percentToLoseDesert > 53) {

                        const moneyNotReal = dataCommandAuthor.data().money += toBeStealed
                        const money = Math.floor(moneyNotReal)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : money,
                            'steal' : Date.now()
                        })

                        const moneyNotReal2 = dataMentionedUser.data().money -= toBeStealed
                        const moneyUser = Math.floor(moneyNotReal2)
                        database.collection('users').doc(member.id).update({
                            'money' : moneyUser
                        })

                        const newMoney = Math.floor(toBeStealed)
                        const embed = new Discord.RichEmbed()
                        .setColor('#007fc7')
                        .setDescription(`<:assalto:573983251249496076> \`|\` ${msg.member} acaba de roubar \`${newMoney}\` coins de ${member}`)
                        msg.channel.send(embed)
                      }
                  } else if(gun === 'sub metralhadora') {
                       const percentToLoseDesert = Math.random() * (100)

                       if(percentToLoseDesert < 46) {
                        const moneyNotReal3 = dataCommandAuthor.data().money -= toBeStealed
                        const newMoney = Math.floor(moneyNotReal3)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : newMoney,
                            'steal' : Date.now()
                        })
                        const newMoney1 = Math.floor(toBeStealed)
                        msg.channel.send(`<:policia:560904908061147138> \`|\` Você foi pego ao tentar roubar e perdeu \`${newMoney1}\` coins`)  

                        } else if(percentToLoseDesert > 46) {

                        const moneyNotReal = dataCommandAuthor.data().money += toBeStealed
                        const money = Math.floor(moneyNotReal)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : money,
                            'steal' : Date.now()
                        })

                        const moneyNotReal2 = dataMentionedUser.data().money -= toBeStealed
                        const moneyUser = Math.floor(moneyNotReal2)
                        database.collection('users').doc(member.id).update({
                            'money' : moneyUser
                        })

                        const newMoney = Math.floor(toBeStealed)
                        const embed = new Discord.RichEmbed()
                        .setColor('#007fc7')
                        .setDescription(`<:assalto:573983251249496076> \`|\` ${msg.member} acaba de roubar \`${newMoney}\` coins de ${member}`)
                        msg.channel.send(embed)

                        }

                    } else if(gun === 'canhão') {
                       const percentToLoseDesert = Math.random() * (100)

                       if(percentToLoseDesert < 34) {
                        const moneyNotReal3 = dataCommandAuthor.data().money -= toBeStealed
                        const newMoney = Math.floor(moneyNotReal3)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : newMoney,
                            'steal' : Date.now()
                        })
                        const newMoney1 = Math.floor(toBeStealed)
                        msg.channel.send(`<:policia:560904908061147138> \`|\` Você foi pego ao tentar roubar e perdeu \`${newMoney1}\` coins`)  

                        } else if(percentToLoseDesert > 34) {

                        const moneyNotReal = dataCommandAuthor.data().money += toBeStealed
                        const money = Math.floor(moneyNotReal)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : money,
                            'steal' : Date.now()
                        })

                        const moneyNotReal2 = dataMentionedUser.data().money -= toBeStealed
                        const moneyUser = Math.floor(moneyNotReal2)
                        database.collection('users').doc(member.id).update({
                            'money' : moneyUser
                        })

                        const newMoney = Math.floor(toBeStealed)
                        const embed = new Discord.RichEmbed()
                        .setColor('#007fc7')
                        .setDescription(`<:assalto:573983251249496076> \`|\` ${msg.member} acaba de roubar \`${newMoney}\` coins de ${member}`)
                        msg.channel.send(embed)

                        }
                    }
            })

        } else {

          let timeout = 1800000
          const steal = dataCommandAuthor.data().steal
          if(steal !== null && timeout - (Date.now() - steal) > 0) {
          let time = ms(timeout - (Date.now() - steal));

          const embed = new Discord.RichEmbed()
          .setColor('#007fc7')
          .setDescription(`<a:tempo:573983897860177940> \`|\` You already stealed today, wait \` ${time.minutes} minutes and ${time.seconds} seconds\``)
          return msg.channel.send(embed)
          }

          if(!args[0]) {
              return msg.channel.send('<:atencao:556923012381802496> `|` You need to mention a member to steal')
            }

            const member = msg.mentions.members.first() || msg.guild.members.get(args[0])

            if(!member) {
                return msg.channel.send('<:atencao:556923012381802496> `|` I couldnt find a member with that informations')
            }

            if(member.bot) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You cant steal a bot')
            }

            if(member.id === msg.member.id) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You cant steal yourself')
            }

            database.collection('users').doc(member.id).get().then((dataMentionedUser) => {
                    const gun = dataCommandAuthor.data().gun
                    const moneyMentionedUser = dataMentionedUser.data().money.toString()
                    const toBeStealed = 674 + Math.random() * (moneyMentionedUser - 674)

                    if(gun === false) {
                      return msg.channel.send(`${emojis.aencao} \`|\` You dont have a gun to steal someone! Buy one`)
                    }

                    if(moneyMentionedUser.includes('-') || moneyMentionedUser.startsWith(0)) return msg.channel.send(`${emojis.atencao} \`|\` \`${member.user.username}\` didn't had suficient money to be stealed, so \`${msg.author.username}\` shotted him`)

                    if(gun === 'desert eagle') {
                       const percentToLoseDesert = Math.random() * (100)

                       if(percentToLoseDesert < 53) {
                        const moneyNotReal3 = dataCommandAuthor.data().money -= toBeStealed
                        const newMoney = Math.floor(moneyNotReal3)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : newMoney,
                            'steal' : Date.now()
                        })
                        const newMoney1 = Math.floor(toBeStealed)
                        msg.channel.send(`<:policia:560904908061147138> \`|\` You got caught while stealing and lost \`${newMoney1}\` coins`)  

                        } else if(percentToLoseDesert > 53) {

                        const moneyNotReal = dataCommandAuthor.data().money += toBeStealed
                        const money = Math.floor(moneyNotReal)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : money,
                            'steal' : Date.now()
                        })

                        const moneyNotReal2 = dataMentionedUser.data().money -= toBeStealed
                        const moneyUser = Math.floor(moneyNotReal2)
                        database.collection('users').doc(member.id).update({
                            'money' : moneyUser
                        })

                        const newMoney = Math.floor(toBeStealed)
                        const embed = new Discord.RichEmbed()
                        .setColor('#007fc7')
                        .setDescription(`<:assalto:573983251249496076> \`|\` ${msg.member} just stealed \`${newMoney}\` coins from ${member}`)
                        msg.channel.send(embed)
                      }
                  }  else if(gun === 'sub metralhadora') {
                       const percentToLoseDesert = Math.random() * (100)

                       if(percentToLoseDesert < 46) {
                        const moneyNotReal3 = dataCommandAuthor.data().money -= toBeStealed
                        const newMoney = Math.floor(moneyNotReal3)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : newMoney,
                            'steal' : Date.now()
                        })
                        const newMoney1 = Math.floor(toBeStealed)
                        msg.channel.send(`<:policia:560904908061147138> \`|\` You got caught while stealing and lost \`${newMoney1}\` coins`)  

                        } else if(percentToLoseDesert > 46) {

                        const moneyNotReal = dataCommandAuthor.data().money += toBeStealed
                        const money = Math.floor(moneyNotReal)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : money,
                            'steal' : Date.now()
                        })

                        const moneyNotReal2 = dataMentionedUser.data().money -= toBeStealed
                        const moneyUser = Math.floor(moneyNotReal2)
                        database.collection('users').doc(member.id).update({
                            'money' : moneyUser
                        })

                        const newMoney = Math.floor(toBeStealed)
                        const embed = new Discord.RichEmbed()
                        .setColor('#007fc7')
                        .setDescription(`<:assalto:573983251249496076> \`|\` ${msg.member} just stealed \`${newMoney}\` coins from ${member}`)
                        msg.channel.send(embed)

                        }

                    } else if(gun === 'canhão') {
                       const percentToLoseDesert = Math.random() * (100)

                       if(percentToLoseDesert < 34) {
                        const moneyNotReal3 = dataCommandAuthor.data().money -= toBeStealed
                        const newMoney = Math.floor(moneyNotReal3)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : newMoney,
                            'steal' : Date.now()
                        })
                        const newMoney1 = Math.floor(toBeStealed)
                        msg.channel.send(`<:policia:560904908061147138> \`|\` You got caught while stealing and lost \`${newMoney1}\` coins`)  

                        } else if(percentToLoseDesert > 34) {

                        const moneyNotReal = dataCommandAuthor.data().money += toBeStealed
                        const money = Math.floor(moneyNotReal)
                        database.collection('users').doc(msg.member.id).update({
                            'money' : money,
                            'steal' : Date.now()
                        })

                        const moneyNotReal2 = dataMentionedUser.data().money -= toBeStealed
                        const moneyUser = Math.floor(moneyNotReal2)
                        database.collection('users').doc(member.id).update({
                            'money' : moneyUser
                        })

                        const newMoney = Math.floor(toBeStealed)
                        const embed = new Discord.RichEmbed()
                        .setColor('#007fc7')
                        .setDescription(`<:assalto:573983251249496076> \`|\` ${msg.member} just stealed \`${newMoney}\` coins from ${member}`)
                        msg.channel.send(embed)

                        }
                    }
            })
        }

    })
  })


}



module.exports.config = {
    name: "steal",
    aliases: ["roubar"]
}


module.exports.help = {
    name: "steal",
    aliases: ["roubar"],
    usage: `[p]steal **[\`Member: Guild Member\`]**`,
    descriptionEN: 'Steal someone and have a chance to get some money from him',
    descriptionPT: 'Roube alguém e tenha a chance de o roubo dar certo'
}