const Discord = require('discord.js')
const config = require('../config.json');
const moment = require('moment')

module.exports.run = async (client, msg, args, database) => {

    database.collection('guilds').doc(msg.guild.id).get().then((q) => {
        if(q.exists) {
            const language = q.data().language
        if(language === 'pt-br') {

            if(!args[0]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar o nome do emoji para eu ver suas informações')
            }

            const { id } = Discord.Util.parseEmoji(args[0])

            let emoji = client.emojis.get(id) || msg.guild.emojis.find(emoji => emoji.name === args[0])

            if(!emoji) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Eu não encontrei um emoji com esse nome 😫')
            }

                moment.locale('pt-br')
                const embed = new Discord.RichEmbed()
                .setTitle(`💁 Informações sobre ${emoji.name}`)
                .setColor('#007fc7')
                .addField('<:info:564497894497845290> ID', `**<:seta:573880808939716619> ${emoji.id}**`)
                .addField('<:data:563894349125910528> Criado', `**<:seta:573880808939716619> ${moment(emoji.createdAt).format('L')} - ${moment(emoji.createdAt).format('LT')}**`)
                .addField('<a:Blobs_animado:554757205300215817> Animado', `**<:seta:573880808939716619> ${emoji.animated ? 'Sim' : 'Não'}**`)
                .addField('<:servidor:568871104299532443> Servidor', `**<:seta:573880808939716619> ${emoji.guild}**`)
                .addField('<a:Link_Wut:554757541490327552> URL', `**<${emoji.url}>**`)
                .addField('👀 Caminho', `**<:seta:563082385558732800> \`${emoji}\`**`)
                .setThumbnail(emoji.url)
                .setFooter(`🔎 Informações solicitadas por ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
                msg.channel.send(embed).then(message => {
                    if(msg.member.hasPermission("MANAGE_EMOJIS") && msg.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) {
                        message.react(`${emoji.id}`)

                        const addEmoji = message.createReactionCollector((r, u) => r.emoji.id === `${emoji.id}` && u.id === msg.author.id, { time: 30000 })
                            addEmoji.on("collect", (r) => {
                                message.delete()
                                msg.guild.createEmoji(`${emoji.url}` , `${emoji.name}`)
                        let embed = new Discord.RichEmbed()
                        .setColor('#00e8ff')
                        .setDescription(`<:sucesso:572239323165098005> \`|\` Eu adicionei o emoji \`${emoji.name}\` com sucesso!`)
                        msg.channel.send(embed)
                        })
                    } else return
          })

        } else {
            if(!args[0]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` You need to type the name of a emoji to i see his informations!**')
            }

            const { id } = Discord.Util.parseEmoji(args[0])

            let emoji = client.emojis.get(id) || msg.guild.emojis.find(emoji => emoji.name === args[0])

            if(!emoji) {
                return msg.channel.send('<:atencao:556923012381802496> `|` I couldnt find a emoji with that name 😫')
            }

            moment.locale('en')
            const embed = new Discord.RichEmbed()
            .setTitle(`💁 Informations about ${emoji.name}`)
            .setColor('#007fc7')
            .addField('<:info:564497894497845290> ID', `**<:seta:573880808939716619> ${emoji.id}**`)
            .addField('<:data:563894349125910528> Created', `**<:seta:573880808939716619> ${moment(emoji.createdAt).format('L')} - ${moment(emoji.createdAt).format('LT')}**`)
            .addField('<a:Blobs_animado:554757205300215817> Animated', `**<:seta:573880808939716619> ${emoji.animated ? 'Yes' : 'No'}**`)
            .addField('<:servidor:568871104299532443> Guild', `**<:seta:573880808939716619> ${emoji.guild}**`)
            .addField('<a:Link_Wut:554757541490327552> URL', `**<${emoji.url}>**`)
            .addField('👀 Way', `**<:seta:563082385558732800> \`${emoji}\`**`)
            .setThumbnail(emoji.url)
            .setFooter(`🔎 Informations requested by ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
            msg.channel.send(embed).then(message => {

                if(msg.member.hasPermission("MANAGE_EMOJIS") && msg.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) {
                    message.react(`${emoji.id}`)

                    const addEmoji = message.createReactionCollector((r, u) => r.emoji.id === `${emoji.id}` && u.id === msg.author.id, { time: 30000 })
                        addEmoji.on("collect", (r) => {
                            message.delete()

                            msg.guild.createEmoji(`${emoji.url}` , `${emoji.name}`)
                            let embed = new Discord.RichEmbed()
                            .setColor('#00e8ff')
                            .setDescription(`<:sucesso:572239323165098005> \`|\` I added the emoji \`${emoji.name}\` with success!`)
                            msg.channel.send(embed)
                        })
                    } else return
          })
        }
    }
})

    }

    module.exports.config = {
        name: "emojiinfo",
        aliases: ["emojinfo"],
    }

module.exports.help = {
    name: "emojiinfo",
    aliases: ["emojinfo"],
    usage: `[p]emojiinfo **[\`Emoji\`]**`,
    descriptionEN: 'See the informations about the solicited emoji',
    descriptionPT: 'Veja as informações do emoji solicitado'
}
