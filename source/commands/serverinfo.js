const Discord = require('discord.js')
const config = require('../config.json');
const moment = require("moment")
const emojis = require('../emojis.json')

module.exports.run = async (client, msg, args, database) => {

        const server = client.guilds.get(args.join(' ')) || msg.guild

        let textChannels = server.channels.filter(c => c.type === 'text').size;
        let voiceChannels = server.channels.filter(c => c.type === 'voice').size

        database.collection('guilds').doc(msg.guild.id).get().then((q) => {
            if(q.exists) {
                const language = q.data().language
                if(language === 'pt-br') {

                    moment.locale('pt-br')
                    let embed = new Discord.RichEmbed()
                    .setTitle(`💁 Informações sobre ${server.name}`)
                    .setColor('#00e8ff')
                    .setThumbnail(`${server.iconURL}`)
                    .addField('<:info:564497894497845290> ID', `**<:seta:573880808939716619> ${server.id}**`)
                    .addField('👑 Dono', `**<:seta:573880808939716619> ${server.owner}**`)
                    .addField(`<:region:575464771852173332> Região`, `**<:seta:573880808939716619> ${server.region.replace('brazil', 'Brasil')}**`)
                    .addField('<:data:563894349125910528> Criado em', `**<:seta:573880808939716619> ${moment(server.createdAt).format('L')} - ${moment(server.createdAt).format('LT')}**`)
                    .addField('<:data:563894349125910528> Eu entrei aqui', `**<:seta:573880808939716619> ${moment(server.me.joinedAt).format('L')} - ${moment(server.me.joinedAt).format('LT')}**`)
                    .addField(`<:canal:575466692684152879> Canais (${server.channels.size})`, `**<:texto:575465880385749002> Textos \`${textChannels}\`\n <:voz:575466166383017985> Voz \`${voiceChannels}\`**`)
                    .addField(`<:members:575465068028887069> Membros (${server.memberCount})`, `**${emojis.online} Online \`${server.members.filter(a => a.presence.status == "online").size}\` \`|\` ${emojis.dnd} Ausente \`${server.members.filter(a => a.presence.status == "dnd").size}\` \`|\` ${emojis.idle} Ocupado \`${server.members.filter(a => a.presence.status == "idle").size}\` \`|\` ${emojis.offline} Offline \`${server.members.filter(a => a.presence.status == "offline").size}\`\n <:taggbot:549403420822339584> Bots \`${server.members.filter(a => a.user.bot).size}\` **`)
                    .setTimestamp()
                    .setFooter(`Informações solicitadas por ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
                    msg.channel.send(embed)

                } else {

            moment.locale('en')
        let embed = new Discord.RichEmbed()
        .setTitle(`💁 Informations about ${server.name}`)
        .setColor('#00e8ff')
        .setThumbnail(`${server.iconURL}`)
        .addField('<:info:564497894497845290> ID', `**<:seta:573880808939716619> ${server.id}**`)
        .addField('👑 Owner', `**<:seta:563082385558732800> ${server.owner}**`)
        .addField(`<:region:575464771852173332> Region`, `**<:seta:573880808939716619> ${server.region.replace('brazil', 'Brasil')}**`)
        .addField('<:data:563894349125910528> Created at', `**<:seta:573880808939716619> ${moment(server.createdAt).format('L')} - ${moment(server.createdAt).format('LT')}**`)
        .addField('<:data:563894349125910528> Joined here', `**<:seta:573880808939716619> ${moment(server.me.joinedAt).format('L')} - ${moment(server.me.joinedAt).format('LT')}**`)
        .addField(`<:canal:575466692684152879> Channels (${server.channels.size})`, `**<:texto:575465880385749002> Texts \`${textChannels}\`\n <:voz:575466166383017985> Voices \`${voiceChannels}\`**`)
        .addField(`<:members:575465068028887069> Members (${server.members.size})`, `**${emojis.online} Online \`${msg.guild.members.filter(a => a.presence.status == "online").size}\` \`|\` ${emojis.dnd} DND \`${msg.guild.members.filter(a => a.presence.status == "dnd").size}\` \`|\` ${emojis.idle} Idle \`${msg.guild.members.filter(a => a.presence.status == "idle").size}\` \`|\` ${emojis.offline} Offline \`${msg.guild.members.filter(a => a.presence.status == "offline").size}\`\n <:taggbot:549403420822339584> Bots \`${msg.guild.members.filter(a => a.user.bot).size}\` **`)
        .setTimestamp()
        .setFooter(`Informations requested by ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
        msg.channel.send(embed)

        }}})}

    module.exports.config = {
        name: "serverinfo",
        aliases: ["servidorinfo"],
    }

module.exports.help = {
    name: "serverinfo",
    aliases: ["servidorinfo"],
    usage: `[p]serverinfo **[\`Guild\`]**`,
    descriptionEN: 'Sees the atual guild info or a guil or about a guild using the id',
    descriptionPT: 'Veja as informações do servidor atual ou sobre um servidor utilizando o id'
}
