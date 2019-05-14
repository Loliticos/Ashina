const Discord = require('discord.js')
const config = require('../config.json');
const emojis = require('../emojis.json')

module.exports.run = async (client, msg, args, database, dataGuild) => {

    database.collection('users').doc(msg.author.id).get().then((dataUser) => {
        if(!dataUser.exists) {
            database.collection('users').doc(msg.author.id).set({
              'guildID' : msg.guild.id,
              'money' : 0,
              'gun' : false,
              'bancoMoney' : 0,
              'aboutMe' : false
            })
        }
    })

    const prefix = dataGuild.data().prefix
    const language = dataGuild.data().language

    if(language === 'pt-br') {
        if(!args[0]) {

        const embed = new Discord.RichEmbed()
        .setTitle('<:help:573887932730048543> Comandos')
        .setDescription(`**Meu prefixo nesse servidor é** \`${prefix}\``)
        .setThumbnail(msg.guild.iconURL)
        .setColor('#007fc7')
        .addField('<:diversao:573888392211988480> Diversão', '` beijar, tapa, abraçar, say, gay, carinho, personalidades, trump, ascii, setmsg, inverso`')
        .addField('<:utilidades:573888291913596950> Utilidades', '`avatar, userinfo, channelinfo, serverinfo, roleinfo, emojiinfo, ping, botinfo, docs-djs, dicionario, placeholders`')
        .addField('<:moderation:573888522625482752> Moderação', '`setprefix, kick, ban, limpar, addemoji, removeemoji, setlang, welcome, setlogs, lock, unlock, softban, autorole, configs, renameemoji`')
        .addField('<:economia:573888686597603338> Economia', '`trabalhar, coins, roubar, doar, comprar, banco, sacar, depositar, transferir, subornar, armamento, leaderboard`')
        .setTimestamp()
        .setFooter(`Para mais informações sobre um comando digite ${prefix}ajuda (nome do comando)`, msg.author.displayAvatarURL)
         msg.channel.send(embed)

        } else if(args[0]) {

            const command = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]))

            if(!command) {
                return msg.channel.send(`${emojis.atencao} \`|\` Não foi possivel encontrar esse comando, certifique-se que ele existe`)
            }

            const embed = new Discord.RichEmbed()
            .setTitle(`<:info:571100851574145041> Informações sobre o comando ${command.help.name}`)
            .setColor('#007fc7')
            .addField('<:perguntas:573962247076839424> Como usar', `${emojis.setinha} ${command.help.usage}`.replace('[p]', prefix))
            .addField('<:resultado:573961359469838349> Descrição', `${emojis.setinha} \`${command.help.descriptionPT}\``)
            .addField('<:aliases:572935329699594280> Aliases', `${emojis.setinha} \`${command.help.aliases.join(', ')}\``)
            msg.channel.send(embed)
        }

    } else {

        if(!args[0]) {

        const embed = new Discord.RichEmbed()
        .setTitle('<:help:573887932730048543> Commands')
        .setDescription(`**My prefix in this guild is** \`${prefix}\``)
        .setThumbnail(msg.guild.iconURL)
        .setColor('#007fc7')
        .addField('<:diversao:573888392211988480> Funny', '`kiss, slap, hug, say, gay, pat, personality, trump, ascii, reverse`')
        .addField('<:utilidades:573888291913596950> Utility', '`avatar, userinfo, channelinfo, serverinfo, roleinfo, emojiinfo, ping, botinfo, docs-djs, urban, placeholders`')
        .addField('<:moderation:573888522625482752> Moderation', '`setprefix, kick, ban, clear, addemoji, removeemoji, setlang, welcome, setlogs, lock, unlock, softban, autorole, config, renameemoji`')
        .addField('<:economia:573888686597603338> Economy', '`work, coins, steal, give, buy, bank, take, deposit, armament, leaderboard`')
        .setTimestamp()
        .setFooter(`To see a information about a command type ${prefix}help (Name of the command)`, msg.author.displayAvatarURL)
        msg.channel.send(embed)

        } else if(args[0]) {
            const command = client.commands.get(args[0]) || client.commands.get(client.aliases.get(args[0]))

            if(!command) {
                return msg.channel.send(`${emojis.atencao} \`|\` I couldnt find a command with that name, certify if its correct`)
            }

            const embed = new Discord.RichEmbed()
            .setTitle(`<:info:571100851574145041> Informations about the command ${command.help.name}`)
            .setColor('#007fc7')
            .addField('<:perguntas:573962247076839424> How to use', `${emojis.setinha} ${command.help.usage}`.replace('[p]', prefix))
            .addField('<:resultado:573961359469838349> Description', `${emojis.setinha} \`${command.help.descriptionEN}\``)
            .addField('<:aliases:572935329699594280> Aliases', `${emojis.setinha} \`${command.help.aliases.join(', ')}\``)
            msg.channel.send(embed)

        }
    }
}

module.exports.config = {
    name: "help",
    aliases: ["ajuda"]
}

module.exports.help = {
    name: "help",
    aliases: ["ajuda"],
    usage: `[p]help **[\`Command: String\`]**`,
    descriptionEN: 'See the list of commands available or see a information about a command',
    descriptionPT: 'Veja a lista d ecomandos disponiveis ou veja a informação sobre um comando'
}
