const Discord = require('discord.js')
const config = require('../config.json');
const superagent = require('superagent')
const emojis = require('../emojis.json')

module.exports.run = async (client, msg, args, database) => {

    database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {

        const language = dataGuild.data().language

        if(language === 'pt-br') {
            if(!msg.member.hasPermission("MANAGE_GUILD")) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
            }

            let prefix = 'a!'

            prefix = dataGuild.data().prefix

            if(!args[0]) {
                const embed = new Discord.RichEmbed()
                .setAuthor(`${msg.author.username}`, `${msg.author.displayAvatarURL}`)
                .setColor('#007fc7')
                .addField('<:como:563082470833127424> Como usar?', `\`${prefix}setlog canal #canal\``)
                .addField('🔙 Retorna', `\`Seta o canal selecionado como sistema de logs\``)

                return msg.channel.send(embed)
            }


            if(args[0] === 'channel' || args[0] === 'canal') {
                 const channel = msg.mentions.channels.first() || msg.guild.channels.get(args[1])

                if(!channel) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` **Eu não consegui achar um canal com essas informações, certifique-se que está correto**')
                }

                  const channelID = msg.mentions.channels.first().id || msg.guild.channels.get(args[0]).id


                database.collection('guilds').doc(msg.guild.id).update({
                        'logChannel' : channelID
                })

          const embed = new Discord.RichEmbed()
          .setColor('#007fc7')
          .setAuthor('Configuração', msg.author.displayAvatarURL)
          .addField('<:mensagem:572420914818449438> Logs', `**<:ativo:559206416590700556> Ativado \`|\` Canal: \`#${channel.name}\`**`)
          return msg.channel.send(embed)

            }
            if(args[0] === 'off' || args[0] === 'desativar' || args[0] === 'false' || args[0] === 'falso') {
                database.collection('guilds').doc(msg.guild.id).update({
                        'logChannel' : false
                })

           const embed = new Discord.RichEmbed()
          .setColor('#007fc7')
          .setAuthor('Configuração', msg.author.displayAvatarURL)
          .addField('<:mensagem:572420914818449438> Logs', `**<:desativado:559207785326313485> Desativado**`)
          msg.channel.send(embed)

            } else {
                return msg.channel.send(`${emojis.atencao} \`|\` **Você forneceu um argumento invalido, os argumentos validos são: \n \`canal\` e \`off\`**`)
            }

            } else {
                if(!msg.member.hasPermission("MANAGE_GUILD")) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` You dont have permission to execute this command')
                }

                let prefix = 'a!'

                prefix = dataGuild.data().prefix

                    if(!args[0]) {
                        const embed = new Discord.RichEmbed()
                        .setAuthor(`${msg.author.username}`, `${msg.author.displayAvatarURL}`)
                        .setColor('#007fc7')
                        .addField('<:como:563082470833127424> How to use ?', `\`${prefix}setlog channel #channel\``)
                        .addField('🔙 Returns', `\`Sets the channel as the log system\``)
                        msg.channel.send(embed)
                    }

                    if(args[0] === 'channel' || args[0] === 'canal') {
                        const channelID = msg.mentions.channels.first().id || msg.guild.channels.get(args[0]).id

                        database.collection('guilds').doc(msg.guild.id).update({
                                  'logChannel' : channelID
                        })
                            const channel = msg.mentions.channels.first() || msg.guild.channels.get(args[0])
                            const embed = new Discord.RichEmbed()
                            .setColor('#007fc7')
                            .setAuthor('Config', msg.author.displayAvatarURL)
                            .addField('<:mensagem:572420914818449438> Logs', `**<:ativo:559206416590700556> Activated \`|\` Channel \`#${channel.name}\`**`)
                            return msg.channel.send(embed)
                    }
                    if(args[0] === 'off' || args[0] === 'desativar' || args[0] === 'false' || args[0] === 'falso') {
                        database.collection('guilds').doc(msg.guild.id).update({
                                'logChannel' : false
                        })

                   const embed = new Discord.RichEmbed()
                  .setColor('#007fc7')
                  .setAuthor('Config', msg.author.displayAvatarURL)
                  .addField('<:mensagem:572420914818449438> Logs', `**<:desativado:559207785326313485> Disabled**`)
                  msg.channel.send(embed)

                    } else {
                        return msg.channel.send(`${emojis.atencao} \`|\` **You need to type a valid argument, the arguments are: \n \`channel\` and \`off\`**`)
                    }

                    }
      
    })
}
module.exports.config = {
    name: "setlog",
    aliases: ["canalog", "setarlog", "log", "setlogs", "logs"]
}

module.exports.help = {
    name: "setlog",
    aliases: ["canalog", "setarlog", "log", "setlogs", "logs"],
    usage: `[p]setlog **[\`Channel: Guild Channel\`]**`,
    descriptionEN: 'Set the log channel for the guild',
    descriptionPT: 'Seta o canal de logs para o servidor'
}
