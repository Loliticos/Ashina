
module.exports.run = async (client, msg, args, database) => {

        database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
            const language = dataGuild.data().language

            if(language == 'pt-br') {
       if(!msg.member.hasPermission("MANAGE_CHANNELS")) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
        }

        if(!msg.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Eu não possuo permissão para executar esse comando')
        }

        const channel = msg.mentions.channels.first() || msg.guild.channels.get(args[0])

        if(!channel) {
            msg.channel.overwritePermissions(msg.guild.id, {
                SEND_MESSAGES: true,
            })

            msg.channel.send('<:sucesso:572239323165098005> `|` Sucesso! Agora os membros irão conseguir falar nesse canal')

    } else if(channel) {

        channel.overwritePermissions(msg.guild.id, {
            SEND_MESSAGES: true,
        })

        msg.channel.send('<:sucesso:572239323165098005> `|` Sucesso! Agora os membros irão conseguir falar nesse canal')
    }

            } else {
       if(!msg.member.hasPermission("MANAGE_CHANNELS")) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You dont have permissions to execute this command')
        }

        if(!msg.guild.member(client.user).hasPermission('MANAGE_CHANNELS')) {
            return msg.channel.send('<:atencao:556923012381802496> `|` I dont have permissions to execute this command')
        }

        const channel = msg.mentions.channels.first() || msg.guild.channels.get(args[0])

        if(!channel) {
            msg.channel.overwritePermissions(msg.guild.id, {
                SEND_MESSAGES: true,
            })

            msg.channel.send('<:sucesso:572239323165098005> `|` Success! Now the members can talk in this channel')

    } else if(channel) {

        channel.overwritePermissions(msg.guild.id, {
            SEND_MESSAGES: true,
        })

            msg.channel.send('<:sucesso:572239323165098005> `|` Success! Now the members can talk in this channel')
    }
            }
        })
}

module.exports.config = {
    name: "unlock",
    aliases: ["chat-on", "unlockchat", "unlockchannel"]
}

module.exports.help = {
    name: "unlock",
    aliases: ["chat-on", "unlockchat", "unlockchannel"],
    usage: `[p]chat **[\`Channel: Guild Channel\`]**`,
    descriptionEN: 'Unlock a channel and let peoples talk in it',
    descriptionPT: 'Destrave um canal e deixe as pessoas falar nele'
}