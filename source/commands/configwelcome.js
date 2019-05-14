const Discord = require('discord.js')
const config = require('../config.json');
const superagent = require('superagent')

module.exports.run = async (client, msg, args, database) => {

    let prefix = 'a!'

    database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
        const language = dataGuild.data().language
        prefix = dataGuild.data().prefix

        if(language === 'pt-br') {

            if(!msg.member.hasPermission("MANAGE_GUILD")) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
            }

            if(!args[0]) {
                const embed = new Discord.RichEmbed()
                .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
                .setTitle(`<:como:563082470833127424> \`${prefix}welcome\``)
                .addField('<:exemplos:572956673665269770> Exemplos:', `${prefix}welcome \`Seja bem-vindo {member}\`\n ${prefix}welcome \`canal #canal\`\n ${prefix}welcome off`)
                .addField('<:online:544933026522595346> Placeholders', `${prefix}placeholders`)
                .addField('<:aliases:572935329699594280> Aliases', '**configwelcome, setwelcome**')
                .setColor('#007fc7')
                return msg.channel.send(embed)

            } else if(args[0] === 'canal' || args[0] === 'channel') {

              const channel = msg.mentions.channels.first() || msg.guild.channels.get(args[1])

              if(!channel) {
                 return msg.channel.send('<:atencao:556923012381802496> `|` Eu não consegui encontrar um canal com essas informações')
              }

               const channelID = msg.mentions.channels.first().id || msg.guild.channels.get(args[1]).id

                database.collection('guilds').doc(msg.guild.id).update({
                    'welcomeChannel' : channelID
                })

                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setAuthor('Configuração', msg.author.displayAvatarURL)
                .addField('<:bem_vindo:572955070707269634> Bem-Vindo', `**<:ativo:559206416590700556> Ativado \`|\` Canal:** \`#${channel.name}\``)
                return msg.channel.send(embed)

            } else if(args[0] === 'off' || args[0] === 'OFF' || args[0] === 'false') {

                database.collection('guilds').doc(msg.guild.id).update({
                    'welcomeMSG' : false,
                    'welcomeChannel' : false
                })

                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setAuthor('Configuração', msg.author.displayAvatarURL)
                .addField('<:bem_vindo:572955070707269634> Bem-Vindo', `**<:desativado:559207785326313485> Desativado`)
                return msg.channel.send(embed)

            } else {

                database.collection('guilds').doc(msg.guild.id).update({
                    'welcomeMSG' : args.join(' ')
                })

                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setAuthor('Configuração', msg.author.displayAvatarURL)
                .addField('<:bem_vindo:572955070707269634> Bem-Vindo', `**<:ativo:559206416590700556> Ativado \`|\` Mensagem:** \`${args.join(' ')}\``)
                return msg.channel.send(embed)

            }

        } else {

            if(!msg.member.hasPermission("MANAGE_GUILD")) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You dont have permissions to execute this command')
            }

            if(!args[0]) {
                const embed = new Discord.RichEmbed()
                .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
                .setTitle(`<:como:563082470833127424> \`${prefix}welcome\``)
                .addField('<:exemplos:572956673665269770> Examples:', `${prefix}welcome \`Welcome {member}\`\n ${prefix}welcome \`channel #channel\`\n ${prefix}welcome \`off\``)
                .addField('<:online:544933026522595346> Placeholders', `${prefix}placeholders`)
                .addField('<:aliases:572935329699594280> Aliases', '**configwelcome, setwelcome**')
                .setColor('#007fc7')
                return msg.channel.send(embed)

            } else if(args[0] === 'canal' || args[0] === 'channel') {

              const channel = msg.mentions.channels.first() || msg.guild.channels.get(args[1])

              if(!channel) {
                 return msg.channel.send('<:atencao:556923012381802496> `|` I couldnt find a channel with that informations')
              }

               const channelID = msg.mentions.channels.first().id || msg.guild.channels.get(args[1]).id

                database.collection('guilds').doc(msg.guild.id).update({
                    'welcomeChannel' : channelID
                })

                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setAuthor('Configuração', msg.author.displayAvatarURL)
                .addField('<:bem_vindo:572955070707269634> Welcome', `**<:ativo:559206416590700556> Activated \`|\` Channel:** \`#${channel.name}\``)
                return msg.channel.send(embed)

            }  else if(args[0] === 'off' || args[0] === 'OFF' || args[0] === 'false') {

                database.collection('guilds').doc(msg.guild.id).update({
                    'welcomeMSG' : false,
                    'welcomeChannel' : false
                })

                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setAuthor('Config', msg.author.displayAvatarURL)
                .addField('<:bem_vindo:572955070707269634> Welcome', `**<:desativado:559207785326313485> Disabled`)
                return msg.channel.send(embed)

            } else {


                database.collection('guilds').doc(msg.guild.id).update({
                    'welcomeMSG' : args.join(' ')
                })

                const embed = new Discord.RichEmbed()
                .setColor('#007fc7')
                .setAuthor('Configuração', msg.author.displayAvatarURL)
                .addField('<:bem_vindo:572955070707269634> Welcome', `**<:ativo:559206416590700556> Activated \`|\` Message:** \`${args.join(' ')}\``)
                return msg.channel.send(embed)

            }

        }
    })
}
module.exports.config = {
    name: "configwelcome",
    aliases: ["welcome", "setwelcome"]
}

module.exports.help = {
    name: "configwelcome",
    aliases: ["welcome", "setwelcome"],
    usage: `[p]welcome **[\`Message: String\`]**`,
    descriptionEN: 'Sets the message and the channel that Ashina will compress someone when a member joins the guild',
    descriptionPT: 'Seta a mensagem e o canal que a Ashina irá comprimentar alguém quando um membro entrar no servidor'
}
