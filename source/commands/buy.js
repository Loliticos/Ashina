const Discord = require('discord.js')
const config = require('../config.json');
const emojis = require('../emojis.json')

module.exports.run = async (client, msg, args, database) => {
  database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
    const language = dataGuild.data().language

    if(language === 'pt-br') {
      database.collection('users').doc(msg.member.id).get().then((dataCommandAuthor) => {
          const moneyOfTheUser = dataCommandAuthor.data().money

      if(!args[0]) {
          const embed = new Discord.RichEmbed()
          .setTitle(`${emojis.compras} Compras`)
          .setColor('#007fc7')
          .setDescription(`**Olá ${msg.member.user.username}, pelo visto você deseja comprar umas armas, eu tenho umas para você veja:**`)
          .addField(`${emojis.desert_eagle} Desert Eagle`, `**${emojis.money} \`|\` 2500R$**`, true)
          .addField(`${emojis.canhao} Canhão`, `${emojis.money} \`|\` **15000R$**`, true)
          .addField(`${emojis.sub_metralhadora} Sub Metralhadora`, `**${emojis.money} \`|\` 5000R$**`)
          .setTimestamp()
          .setFooter('Para comprar uma arma digite a!comprar (arma)', `${msg.author.displayAvatarURL}`)
          return msg.channel.send(embed)
      }

      if(args[0] === 'Desert' && args[1] === 'Eagle'  || args[0] === 'desert' && args[1] === 'eagle' || args[0] === 'desert_eagle') {
          const check = dataCommandAuthor.data().gun

          if(check === 'deserteagle') {
            return msg.channel.send(`${emojis.atencao} \`|\` Você já comprou essa arma, assalte alguém ou compre uma nova arma!`)
          }

          if(check === 'sub metralhadora') {        
            return msg.channel.send(`${emojis.atencao} \`|\` Você possui uma \`Sub Metralhadora\` não há necessidade de comprar uma arma mais fraca`)
          }

          if(check === 'canhão') {
            return msg.channel.send(`${emojis.atencao} \`|\` Você possui um \`Canhão\` não há necessidade de comprar uma arma mais fraca`)
          }


          if(moneyOfTheUser < 2500) {
            return msg.channel.send(`${emojis.atencao} \`|\` Você não possui dinheiro suficiente para comprar essa arma, trabalhe e volte novamente`)
          }
          const money = dataCommandAuthor.data().money -= 2500
              database.collection('users').doc(msg.member.id).update({
                  'money' : money,
                  'gun' : 'desert eagle'
          })
            const embed = new Discord.RichEmbed()
            .setColor('#007fc7')
            .setDescription(`**${emojis.desert_eagle} \`|\` Você comprou uma \`Desert Eagle\` com sucesso!**`)
            return msg.channel.send(embed)

      } else if(args[0] === 'Sub' && args[1] === 'Metralhadora'  || args[0] === 'sub' && args[1] === 'metralhadora' || args[0] === 'sub_metralhadora') {
        const check = dataCommandAuthor.data().gun

        if(check === 'sub metralhadora') {        
            return msg.channel.send(`${emojis.atencao} \`|\` Você já comprou essa arma, assalte alguém ou compre uma nova arma!`)
        }

        if(check === 'canhão') {
          return msg.channel.send(`${emojis.atencao} \`|\` Você possui um \`Canhão\` não há necessidade de comprar uma arma mais fraca`)
        }

        if(moneyOfTheUser < 5000) {
          return msg.channel.send(`${emojis.atencao} \`|\` Você não possui dinheiro suficiente para comprar essa arma, trabalhe e volte novamente`)
        }

        const money = dataCommandAuthor.data().money -= 5000

        database.collection('users').doc(msg.author.id).update({
          'money' : money,
          'gun' : 'sub metralhadora'
        })

        const embed = new Discord.RichEmbed()
        .setColor('#007fc7')
        .setDescription(`**${emojis.sub_metralhadora} \`|\` Você comprou uma \`Sub Metralhadora\` com sucesso!**`)
        return msg.channel.send(embed)

      } else if(args[0] === 'canhao' || args[0] === 'canhão' || args[0] === 'Canhão' || args[0] === 'Canhao') {
        const check = dataCommandAuthor.data().gun

        if(check === 'canhão') {        
          return msg.channel.send(`${emojis.atencao} \`|\` Você já comprou essa arma, assalte alguém ou compre uma nova arma!`)
        }

        if(moneyOfTheUser < 15000) {
          return msg.channel.send(`${emojis.atencao} \`|\` Você não possui dinheiro suficiente para comprar essa arma, trabalhe e volte novamente`)
        }

        const money = dataCommandAuthor.data().money -= 15000

        database.collection('users').doc(msg.author.id).update({
          'money' : money,
          'gun' : 'canhão'
        })

        const embed = new Discord.RichEmbed()
        .setColor('#007fc7')
        .setDescription(`**${emojis.canhao} \`|\` Você comprou um \`Canhão\` com sucesso!**`)
        return msg.channel.send(embed)
        
      } else {
        return msg.channel.send(`${emojis.atencao} \`|\` Eu não consegui achar uma arma com essas informaçõse`)
      }
      })

    } else {
      database.collection('users').doc(msg.member.id).get().then((dataCommandAuthor) => {
          const moneyOfTheUser = dataCommandAuthor.data().money

      if(!args[0]) {
          const embed = new Discord.RichEmbed()
          .setTitle(`${emojis.compras} Compras`)
          .setColor('#007fc7')
          .setDescription(`**Hello ${msg.member.user.username}, seems like you want to bun some guns, i have somes for you see:**`)
          .addField(`${emojis.desert_eagle} Desert Eagle`, `**${emojis.money} \`|\` 2500R$**`, true)
          .addField(`${emojis.canhao} Cannon`, `${emojis.money} \`|\` **15000R$**`, true)
          .addField(`${emojis.sub_metralhadora} Submachine Gun`, `**${emojis.money} \`|\` 5000R$**`)
          .setTimestamp()
          .setFooter('To bun a guy type a!buy (gun)', `${msg.author.displayAvatarURL}`)
          return msg.channel.send(embed)
      }

      if(args[0] === 'Desert' && args[1] === 'Eagle'  || args[0] === 'desert' && args[1] === 'eagle' || args[0] === 'desert_eagle') {
          const check = dataCommandAuthor.data().gun

          if(check === 'deserteagle') {
            return msg.channel.send(`${emojis.atencao} \`|\` You already bought this gun, steal someone or buy another gun`)
          }

          if(check === 'sub metralhadora') {        
            return msg.channel.send(`${emojis.atencao} \`|\` You have a \`Submachine Gun\` theres no need to buy a weaker gun`)
          }

          if(check === 'canhão') {
            return msg.channel.send(`${emojis.atencao} \`|\` You have a \`Cannon\` theres no need to buy a weaker gun`)
          }


          if(moneyOfTheUser < 2500) {
            return msg.channel.send(`${emojis.atencao} \`|\` You dont have suficient money, work and come back again`)
          }
          const money = dataCommandAuthor.data().money -= 2500
              database.collection('users').doc(msg.member.id).update({
                  'money' : money,
                  'gun' : 'desert eagle'
          })
            const embed = new Discord.RichEmbed()
            .setColor('#007fc7')
            .setDescription(`**${emojis.desert_eagle} \`|\` You bought a \`Desert Eagle\` with success!**`)
            return msg.channel.send(embed)

      } else if(args[0] === 'Submachine' && args[1] === 'Gun'  || args[0] === 'submachine' && args[1] === 'gun' || args[0] === 'submachine_gun' || args[0] === 'Submachine') {
        const check = dataCommandAuthor.data().gun

        if(check === 'sub metralhadora') {        
            return msg.channel.send(`${emojis.atencao} \`|\` You already have this gun, buy a new one or go steal someone!`)
        }

        if(check === 'canhão') {
          return msg.channel.send(`${emojis.atencao} \`|\` You have a \`Cannon\` theres no need to buy a weaker gun`)
        }

        if(moneyOfTheUser < 5000) {
          return msg.channel.send(`${emojis.atencao} \`|\` You dont have suficient money, go work and come back here`)
        }

        const money = dataCommandAuthor.data().money -= 5000

        database.collection('users').doc(msg.author.id).update({
          'money' : money,
          'gun' : 'sub metralhadora'
        })

        const embed = new Discord.RichEmbed()
        .setColor('#007fc7')
        .setDescription(`**${emojis.sub_metralhadora} \`|\` You bought a \`Submachine gun\` with success!**`)
        return msg.channel.send(embed)

      } else if(args[0] === 'cannon' || args[0] === 'Cannon') {
        const check = dataCommandAuthor.data().gun

        if(check === 'canhão') {        
          return msg.channel.send(`${emojis.atencao} \`|\` You already bought this gun! Go steal someone or bought a new one`)
        }

        if(moneyOfTheUser < 15000) {
          return msg.channel.send(`${emojis.atencao} \`|\` You dont have suficient money to buy this gun, work and come back`)
        }

        const money = dataCommandAuthor.data().money -= 15000

        database.collection('users').doc(msg.author.id).update({
          'money' : money,
          'gun' : 'canhão'
        })

        const embed = new Discord.RichEmbed()
        .setColor('#007fc7')
        .setDescription(`**${emojis.canhao} \`|\` You bought a  \`Cannon\` with succes!**`)
        return msg.channel.send(embed)
        
      } else {
          return msg.channel.send('<:atencao:566385654414704662> `|` I couldnt find a gun with this name, verify if its correct')
      }
      })

    }
  })
}




module.exports.config = {
    name: "buy",
    aliases: ["comprar"]
}

module.exports.help = {
    name: "buy",
    aliases: ["comprar"],
    usage: `[p]buy **[\`Gun: String\`]**`,
    descriptionEN: 'Buy some gun so you can steal someone',
    descriptionPT: 'Compra uma arma para poder assaltar uma pessoa'
}
