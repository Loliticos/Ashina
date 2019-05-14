const Discord = require('discord.js')
const ms = require ('parse-ms')
const emojis = require('../emojis.json')

module.exports.run = async (client, msg, args, database, dataGuild) => {

    const language = dataGuild.data().language

    if(language === 'pt-br') {

            const member = msg.mentions.users.first() || msg.guild.members.get(args[0]) || msg.author

            if(member.bot) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode ver o armamento de um bot! Eles são riquíssimos!')
            }

            database.collection('users').doc(member.id).get().then((dataUser) => {

              if(!dataUser) {
                  database.collection('users').doc(member.id).set({
                    'guildID' : msg.guild.id,
                    'money' : 0,
                    'gun' : false,
                    'bancoMoney' : 0
                  })
              }

                let gun = dataUser.data().gun

                if(gun === false) gun = 'Não possue nenhuma'
                if(gun === 'desert eagle') gun = 'Desert Eagle'
                if(gun === 'sub metralhadora') gun = 'Sub Metralhadora'
                if(gun === 'canhão') gun = 'Canhão'

                const embed = new Discord.RichEmbed()
                .setTitle(`<:ladrao:570799643189968899> Armamento de ${member.username}`)
                .setColor('#007fc7')
                .addField('<:cla:575031631446802433> Clã', `<:seta:573880808939716619> \`Em breve\``)
                .addField(`${emojis.arma} Arma`, `<:seta:573880808939716619> \`${gun}\``)
                .addField('<:tesouro:575032955253293058> Gemas do clã', `<:seta:573880808939716619> \`Em breve\``)
                msg.channel.send(embed)
})

        } else {

          const member = msg.mentions.users.first() || msg.guild.members.get(args[0]) || msg.author

          if(member.bot) {
              return msg.channel.send('<:atencao:556923012381802496> `|` You cant see the armament of a bot! They are rich')
          }

          database.collection('users').doc(member.id).get().then((dataUser) => {

            if(!dataUser) {
                database.collection('users').doc(member.id).set({
                  'guildID' : msg.guild.id,
                  'money' : 0,
                  'gun' : false,
                  'bancoMoney' : 0
                })
            }

            let gun = dataUser.data().gun

            if(gun === false) gun = 'Doesnt have any'
            if(gun === 'desert eagle') gun = 'Desert Eagle'
            if(gun === 'sub metralhadora') gun = 'Submachine Gun'
            if(gun === 'canhão') gun = 'Cannon'

            const embed = new Discord.RichEmbed()
            .setTitle(`<:ladrao:570799643189968899> Armament of ${member.username}`)
            .setColor('#007fc7')
            .addField('<:cla:575031631446802433> Clan', `<:seta:573880808939716619> \`Soon\``)
            .addField(`${emojis.arma} Gun`, `<:seta:573880808939716619> \`${gun}\``)
            .addField('<:tesouro:575032955253293058> Gems of the Clan', `<:seta:573880808939716619> \`Soon\``)
            msg.channel.send(embed)
        })
        }

}



module.exports.config = {
    name: "armament",
    aliases: ["armas", "arma", "armamento", "armamentos"]
}

module.exports.help = {
    name: "armament",
    aliases: ["armas", "arma", "armamento", "armamentos"],
    usage: `[p]armament **[\`Member: Guild Member\`]**`,
    descriptionEN: 'See the armament of that player',
    descriptionPT: 'Veja o armamento de um jogador'
}
