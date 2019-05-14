const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database) => {

    database.collection('guilds').doc(msg.guild.id).get().then((q) => {
        if(q.exists) {
            const language = q.data().language

        if(language === 'pt-br') {
            if(!args[0]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Por favor mencione um cargo ou digite suas informações')
            }
        
            const mentionedRole = msg.mentions.roles.first() || msg.guild.roles.find(r => r.name === args.join(' ')) || msg.guild.roles.get(args[0])
                
                if(!mentionedRole) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` Eu não consegui achar um cargo com essas informações 😫')
                }
        
                let rolePosition = mentionedRole.position
                let roleName = mentionedRole.name
                let roleID = mentionedRole.id
                let roleHexColor = mentionedRole.hexColor
                let roleMembersSize = mentionedRole.members.size
                let roleMembers = mentionedRole.members.map(r => r)
                const trim = (string, max) => ((roleMembersSize > max ? `${string.slice(0, max - 3)}...` : string))

                if(roleMembersSize === 0) roleMembers = '**Nenhum membro**'
        
                trad = {
                    "CREATE_INSTANT_INVITE": "`Criar convite instantâneo`",
                    "KICK_MEMBERS": "`Expulsar usuários`",
                    "BAN_MEMBERS": "`Banir usuários`",
                    "ADMINISTRATOR": "`Administrador`",
                    "MANAGE_CHANNELS": "`Gerenciar canais`",
                    "MANAGE_GUILD": "`Gerenciar servidor`",
                    "ADD_REACTIONS": "`Adicionar reação`",
                    "VIEW_AUDIT_LOG": "`Ver registro de auditoria`",
                    "VIEW_CHANNEL": "`Ver canais`",
                    "READ_MESSAGES": "`Ver mensagens`",
                    "SEND_MESSAGES": "`Enviar mensagens`",
                    "SEND_TTS_MESSAGES": "`Enviar mensagens com aúdio`",
                    "MANAGE_MESSAGES": "`Gerenciar mensagens`",
                    "EMBED_LINKS": "`Links em embed`",
                    "ATTACH_FILES": "`Arquivos arquivados`",
                    "READ_MESSAGE_HISTORY": "`Ver histórico de mensagens`",
                    "MENTION_EVERYONE": "`Mencionar todos`",
                    "EXTERNAL_EMOJIS": "`Emojis externos`",
                    "USE_EXTERNAL_EMOJIS": "`Usar emojis externos`",
                    "CONNECT": "`Conectar`",
                    "SPEAK": "`Falar`",
                    "MUTE_MEMBERS": "`Silenciar usuários`",
                    "DEAFEN_MEMBERS": "`Perdoar usuários`",
                    "MOVE_MEMBERS": "`Mover usuários`",
                    "USE_VAD": "`Usar detecção de voz`",
                    "PRIORITY_SPEAKER": "`Prioridade para falar`",
                    "CHANGE_NICKNAME": "`Trocar apelido`",
                    "MANAGE_NICKNAMES": "`Gerenciar apelidos`",
                    "MANAGE_ROLES": "`Gerenciar cargos`",
                    "MANAGE_ROLES_OR_PERMISSIONS": "`Gerenciar cargos e permissões`",
                    "MANAGE_WEBHOOKS": "`Gerenciar webhooks`",
                    "MANAGE_EMOJIS": "`Gerenciar emojis`"
                },
                perms = Object.entries(mentionedRole.serialize()).filter(([,has]) => has).map(([perm]) => `${trad[perm]}`).join(', ')
        
                let embed = new Discord.RichEmbed()
                .setTitle(`💁 Informações sobre ${roleName}`)
                .setColor(`${roleHexColor}`)
                .addField('<:info:564497894497845290> ID', `**<:seta:563082385558732800> ${roleID}**`)
                .addField('🚩 Posição', `**<:seta:563082385558732800> ${rolePosition}**`)
                .addField('🔵 Cor', `**<:seta:563082385558732800> ${roleHexColor}**`)
                .addField(`<:users:565616701966647316> Membros (${roleMembersSize})`, `<:seta:563082385558732800> ${trim(roleMembers, 20)}`)
                .addField('<:pinging:565617149918445570> Mencionavel', `**<:seta:563082385558732800> ${mentionedRole.mentionable ? 'Sim' : 'Não'}**`)
                .addField('<:policia:560904908061147138> Permissões', `<:seta:563082385558732800> ${perms}`)
                .setTimestamp()
                .setFooter(`Informações solicitadas por ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
                msg.channel.send(embed)
        } else {
            if(!args[0]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Please mention a role or type his name')
            }
        
            const mentionedRole = msg.mentions.roles.first() || msg.guild.roles.find(r => r.name === args.join(' ')) || msg.guild.roles.get(args.join(' '))
                if(!mentionedRole) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` I couldnt find a role with that name 😫')
                }
        
                let rolePosition = mentionedRole.position
                let roleName = mentionedRole.name
                let roleID = mentionedRole.id
                let roleHexColor = mentionedRole.hexColor
                let roleMembersSize = mentionedRole.members.size
                let roleMembers = mentionedRole.members.map(r => r)
                const trim = (string, max) => ((roleMembersSize > max ? `${string.slice(0, max - 3)}...` : string))

                if(roleMembersSize === 0) roleMembers = '**None Member**'
        
                trad = {
                    "CREATE_INSTANT_INVITE": "`Create Instant Invite`",
                    "KICK_MEMBERS": "`Kick Members`",
                    "BAN_MEMBERS": "`Ban Members`",
                    "ADMINISTRATOR": "`Administrator`",
                    "MANAGE_CHANNELS": "`Manage Channels`",
                    "MANAGE_GUILD": "`Manage Guild`",
                    "ADD_REACTIONS": "`Add Reactions`",
                    "VIEW_AUDIT_LOG": "`View Audit Log`",
                    "VIEW_CHANNEL": "`View Channels`",
                    "READ_MESSAGES": "`Read Messages`",
                    "SEND_MESSAGES": "`Send Messages`",
                    "SEND_TTS_MESSAGES": "`Send TTS Messages`",
                    "MANAGE_MESSAGES": "`Manage Messages`",
                    "EMBED_LINKS": "`Embed Links`",
                    "ATTACH_FILES": "`Attach Files`",
                    "READ_MESSAGE_HISTORY": "`Read Message History`",
                    "MENTION_EVERYONE": "`Mention Everyone`",
                    "EXTERNAL_EMOJIS": "`External Emojis`",
                    "USE_EXTERNAL_EMOJIS": "`Use External Emojis`",
                    "CONNECT": "`Connect`",
                    "SPEAK": "`Speak`",
                    "MUTE_MEMBERS": "`Mute Members`",
                    "DEAFEN_MEMBERS": "`Deafen Members`",
                    "MOVE_MEMBERS": "`Move Members`",
                    "USE_VAD": "`Use Vad`",
                    "PRIORITY_SPEAKER": "`Priority Speaker`",
                    "CHANGE_NICKNAME": "`Change Nickname`",
                    "MANAGE_NICKNAMES": "`Manage Nicknames`",
                    "MANAGE_ROLES": "`Manage Roles`",
                    "MANAGE_ROLES_OR_PERMISSIONS": "`Manage Permissions`",
                    "MANAGE_WEBHOOKS": "`Manage Webhooks`",
                    "MANAGE_EMOJIS": "`Manage Emojis`"
                },
                perms = Object.entries(mentionedRole.serialize()).filter(([,has]) => has).map(([perm]) => `${trad[perm]}`).join(', ')
        
                let embed = new Discord.RichEmbed()
                .setTitle(`💁 Informations about ${roleName}`)
                .setColor(`${roleHexColor}`)
                .addField('<:info:564497894497845290> ID', `**<:seta:563082385558732800> ${roleID}**`)
                .addField('🚩 Position', `**<:seta:563082385558732800> ${rolePosition}**`)
                .addField('🔵 Color', `**<:seta:563082385558732800> ${roleHexColor}**`)
                .addField(`<:users:565616701966647316> Members (${roleMembersSize})`, `<:seta:563082385558732800> ${trim(roleMembers, 20)}`)
                .addField('<:pinging:565617149918445570> Mentionable', `**<:seta:563082385558732800> ${mentionedRole.mentionable ? 'Yes' : 'No'}**`)
                .addField('<:policia:560904908061147138> Permissions', `<:seta:563082385558732800> ${perms}`)
                .setTimestamp()
                .setFooter(`Informations requested by ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
                msg.channel.send(embed)
        }
    }
})

        }
    

 module.exports.config = {
    name: "roleinfo",
    aliases: ["cargoinfo"],
}

module.exports.help = {
    name: "roleinfo",
    aliases: ["cargoinfo"],
    usage: `[p]roleinfo **[\`Role: Guild Role\`]**`,
    descriptionEN: 'Sees the information about a role',
    descriptionPT: 'Veja as informações sobre um cargo'
}
