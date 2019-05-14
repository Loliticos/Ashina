
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
                SEND_MESSAGES: false,
            })

            msg.channel.send('<:sucesso:572239323165098005> `|` Sucesso! Agora os membros não irão conseguir falar nesse canal')

    } else if(channel) {

        channel.overwritePermissions(msg.guild.id, {
            SEND_MESSAGES: false,
        })

        msg.channel.send('<:sucesso:572239323165098005> `|` Sucesso! Agora os membros não irão conseguir falar nesse canal')
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
                SEND_MESSAGES: false,
            })

            msg.channel.send('<:sucesso:572239323165098005> `|` Success! Now the members cant talk in this channel')

    } else if(channel) {

        channel.overwritePermissions(msg.guild.id, {
            SEND_MESSAGES: false,
        })

            msg.channel.send('<:sucesso:572239323165098005> `|` Success! Now the members cant talk in this channel')
    }
            }

        })
}

module.exports.config = {
    name: "lock",
    aliases: ["chatoff", "lockchat", "lockchannel"]
}

module.exports.help = {
    name: "lock",
    aliases: ["chatoff", "lockchat", "lockchannel"],
    usage: `[p]lock **[\`Channel: Guild Channel\`]**`,
    descriptionEN: 'Lock a channel so the members cant talk in it',
    descriptionPT: 'Tranque um canal para os membros não poderem falar nele'
}

