const Discord = require('discord.js')
const config = require('../config.json');
const moment = require("moment")

module.exports.run = async (client, msg, args, database) => {

        const member = msg.mentions.members.first() || msg.guild.members.get(args[0]) || msg.member

        database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
            database.collection('users').doc(member.id).get().then((dataUser) => {
         const prefix = dataGuild.data().prefix        

          let aboutMe = dataUser.data().aboutMe

          if(!aboutMe) {
            database.collection('users').doc(member.id).update({
                'aboutMe' : false
            })
          }

          if(aboutMe !== false) aboutMe = dataUser.data().aboutMe
          if(aboutMe === false || aboutMe === undefined) aboutMe = `Use ${prefix}setmsg (msg) para setar uma mensagem`

          const language = dataGuild.data().language

            if(language === 'pt-br') {
                const playing = member.presence.game ? member.presence.game : 'Jogando nada'

                moment.locale('pt-br')

                let mutualGuildsArray = []

                client.guilds.forEach(g => {
                    if(g.members.get(member.id)) mutualGuildsArray.push(g.name)
                })

                const embed = new Discord.RichEmbed()
                .setTitle(`💁 Informações sobre ${member.user.username}`)
                .setColor('#00e8ff')
                .setThumbnail(member.user.displayAvatarURL)
                .addField('<:info:564497894497845290> ID', `**<:seta:573880808939716619> ${member.id}**`)
                .addField('<:discrim:568840025454805032> Tag', `**<:seta:573880808939716619> ${member.user.tag}**`)
                .addField(`<:GGames:573890436184277008> Jogando`, `**<:seta:573880808939716619> ${playing}**`)
                .addField('<:sobremim:573266376806891540> Sobre Mim', `<:seta:573880808939716619> \`${aboutMe}\``)
                .addField('<:role:565634884358373376> Cargo Mais Alto', `<:seta:573880808939716619> ${member.highestRole}`)
                .addField('<:role:565634884358373376> Cargos', `<:seta:573880808939716619> ${member.roles.map(a => a).join(',  ')}`)
                .addField('<:data:563894349125910528> Conta criada dia', `**<:seta:573880808939716619> ${moment(member.createdAt).format('L')} - ${moment(member.createdAt).format('LT')}**`)
                .addField('<:data:563894349125910528> Entrou nesse servidor', `**<:seta:573880808939716619> ${moment(member.joinedAt).format('L')} - ${moment(member.joinedAt).format('LT')}**`)
                .addField(`<:servidores:571403052620447765> Servidores Compartilhados`, `**<:seta:573880808939716619> \`${mutualGuildsArray.join(', ')}\`**`)
                .setTimestamp()
                .setFooter(`Informações solicitadas por ${msg.author.username}`, msg.author.displayAvatarURL)
                msg.channel.send(embed)

            } else {
                const playing = member.presence.game ? member.presence.game : 'Nothing'

                let aboutMeEnglish = dataUser.data().aboutMe

                if(!aboutMeEnglish) {
                    database.collection('users').doc(member.id).update({
                        'aboutMe' : false
                })
                }    

                if(aboutMeEnglish !== false) aboutMeEnglish = dataUser.data().aboutMe
                if(aboutMeEnglish === false || aboutMeEnglish === undefined) aboutMeEnglish = `Use ${prefix}setmsg (msg) to set a new message`

                moment.locale('en-us')

                let mutualGuildsArray = [];

                client.guilds.forEach(g => {
                    if(g.members.get(member.id)) mutualGuildsArray.push(g.name)
                })

                const englishEmbed = new Discord.RichEmbed()
                .setTitle(`💁 Informations about ${member.user.username}`)
                .setColor('#00e8ff')
                .setThumbnail(member.user.displayAvatarURL)
                .addField('<:info:564497894497845290> ID', `**<:seta:573880808939716619> ${member.id}**`)
                .addField('<:discrim:568840025454805032> Tag', `**<:seta:573880808939716619> ${member.user.tag}**`)
                .addField(`<:GGames:573890436184277008> Playing`, `**<:seta:573880808939716619> ${playing}**`)
                .addField('<:sobremim:573266376806891540> About Me', `<:seta:573880808939716619> \`${aboutMeEnglish}\``)
                .addField('<:role:565634884358373376> Highest Role', `<:seta:573880808939716619> ${member.highestRole}`)
                .addField('<:role:565634884358373376> Roles', `<:seta:573880808939716619> ${member.roles.map(a => a).join(',  ')}`)
                .addField('<:data:563894349125910528> Account created', `**<:seta:573880808939716619> ${moment(member.createdAt).format('L')} - ${moment(member.createdAt).format('LT')}**`)
                .addField('<:data:563894349125910528> Joined this Guild', `**<:seta:573880808939716619> ${moment(member.joinedAt).format('L')} - ${moment(member.joinedAt).format('LT')}**`)
                .addField(`<:servidores:571403052620447765> Mutual Guilds`, `**<:seta:573880808939716619> \`${mutualGuildsArray.join(', ')}\`**`)
                .setTimestamp()
                .setFooter(`Informations requested by ${msg.author.username}`, msg.author.displayAvatarURL)
                msg.channel.send(englishEmbed)
            }
        })
    })
}
module.exports.config = {
    name: "userinfo",
    aliases: ["uinfo", "playerinfo"]
}

module.exports.help = {
    name: "userinfo",
    aliases: ["uinfo", "playerinfo"],
    usage: `[p]userinfo **[\`User: Guild Member\`]**`,
    descriptionEN: 'See your informations or the mentioned user information',
    descriptionPT: 'Veja as suas informações ou do usuário mencionado'
}
