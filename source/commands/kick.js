const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database) => {
    database.collection('guilds').doc(msg.guild.id).get().then((q) => {
        if(q.exists) {
            const language = q.data().language
            if(language === 'pt-br') {
                if(!msg.member.hasPermission("KICK_MEMBERS")) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
                }
                if(!msg.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` Eu não possuo permissão para executar esse comando')
                }

                if(!args[0]) {
                  return msg.channel.send('<:atencao:556923012381802496> `|` Você deve mencionar um usuário e digitar a razão do punimento')
                }

                let member = msg.mentions.members.first() || msg.guild.members.get(args[0])

                if(!member) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` Mencione um jogador para ser punido')
                }

               if(member === msg.guild.member(client.user.id)) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` Bem se você quiser me kickar por que em vez disso só não me kicka de uma vez?')
                }


                let clientTrue = msg.guild.me
                let positionBot = clientTrue.highestRole.position
                let positionMember = member.highestRole.position

                if(member.id === msg.author.id) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode kickar você mesmo burrinho')
                }

                if(positionMember >= positionBot) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` Eu não posso punir esse membro por que ele possui o mesmo cargo ou um maior que o meu')
                }

                   let execRole = msg.member.highestRole
                   let mentionRole = member.highestRole

                if(execRole.comparePositionTo(mentionRole) <= 0) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode punir esse membro por que ele possui o mesmo cargo ou um maior que o seu')
                }


                const mentionedUserID = member.id
                const ownerID = msg.guild.owner.id

                if(mentionedUserID === ownerID) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` Eu não posso punir esse membro por que ele possui o mesmo cargo ou um maior que o meu')
                }

                if(!args[1]) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` Escreva uma razão para o usuário ser punido')
                }

                let argsresult;
                argsresult = args.slice(1).join(' ')

                member.kick(argsresult)
                .then(user => msg.channel.send(`<:sucesso:572239323165098005> \`|\` Eu puni o membro ${user} com sucesso!`))

            } else {

        if(!msg.member.hasPermission("KICK_MEMBERS")) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You dont have permission to execute this command')
        }
        if(!msg.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
            return msg.channel.send('<:atencao:556923012381802496> `|` I dont have permission to execute this command')
        }

        if(!args[0]) {
          return msg.channel.send('<:atencao:556923012381802496> `|` You need to mention a user and type the reason for the punishment')
        }

        let member = msg.mentions.members.first() || msg.guild.members.get(args[0])

        if(!member) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Mention a member to continue')
        }

       if(member === msg.guild.member(client.user.id)) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Welp if you want me to be kicked why instead of that you dont just KICK ME ?')
        }


        let clientTrue = msg.guild.me
        let positionBot = clientTrue.highestRole.position
        let positionMember = member.highestRole.position

        if(member.id === msg.author.id) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You cant kick your self dumbie')
        }

        if(positionMember >= positionBot) {
            return msg.channel.send('<:atencao:556923012381802496> `|` I cant kick this user because he have the same role as mine or a higher one')
        }

           let execRole = msg.member.highestRole
           let mentionRole = member.highestRole

        if(execRole.comparePositionTo(mentionRole) <= 0) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You cant kick this user because he have the same role as your or a higher one')
        }


        const mentionedUserID = member.id
        const ownerID = msg.guild.owner.id

        if(mentionedUserID === ownerID) {
            return msg.channel.send('<:atencao:556923012381802496> `|` I cant kick this user because he have the same role as mine or a higher one')
        }

        if(!args[1]) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Write a reason to that member be kicked')
        }

        let argsresult;
        argsresult = args.slice(1).join(' ')

        member.kick(argsresult)
        .then(user => msg.channel.send(`<:sucesso:572239323165098005> \`|\` Kicked the user ${user} with success!`))
    }}})}


module.exports.config = {
    name: "kick",
    aliases: ["chutar"]
}

module.exports.help = {
    name: "kick",
    aliases: ["chutar"],
    usage: `[p]kiss **[\`Member: Guild Member\`] [\`Reason: String\`]**`,
    descriptionEN: 'Did somebody break the rules ? Go ahead and kick him!',
    descriptionPT: 'Alguém quebrou as regras ? Vai em frente e chute ele bem na bunda!'
}
