const Discord = require('discord.js')
const config = require('../config.json');
const moment = require('moment')

module.exports.run = async (client, msg, args, database) => {
        const Discord = require('discord.js');

        database.collection('guilds').doc(msg.guild.id).get().then((q) => {
            if(q.exists) {
                const language = q.data().language
    
            if(language === 'pt-br') {

                const channel = msg.mentions.channels.first() || client.channels.get(args[0]) || msg.channel

            if(!channel) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Eu não encontrei esse canal! Certifique-se que eu tenho acesso para ve-lo')
            }
                moment.locale('pt-br')
                const embed = new Discord.RichEmbed()
                .setTitle(`💁 Informações sobre ${channel.name}`)
                .setColor('#00dfff')
                .addField('<:info:564497894497845290> ID', `<:seta:573880808939716619> **${channel.id}**`)
                .addField('🚩 Posição', `**<:seta:573880808939716619> ${channel.position}**`)
                .addField('🔞 NSFW ?', `<:seta:573880808939716619> **${channel.nsfw ? "Sim" : "Não"}**`)
                .addField('<:data:563894349125910528> Criado', `<:seta:573880808939716619> **${moment(channel.createdAt).format('L')} - ${moment(channel.createdAt).format('LT')}**`)
                .addField('<a:topic:564503229409263616> Tópico', `**${channel.topic ? channel.topic : 'Nenhum'}**`)
                .setTimestamp()
                .setFooter(`Informações solicitadas por ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
                msg.channel.send(embed)

            } else {

                const channel = msg.mentions.channels.first() || client.channels.get(args[0]) || msg.channel

            if(!channel) {
                return msg.channel.send('<:atencao:556923012381802496> `|` I couldnt find this cannel, make sure i have access to it')
            }

        moment.locale('en')
        const embed = new Discord.RichEmbed()
        .setTitle(`💁 Informations about ${channel.name}`)
        .setColor('#00dfff')
        .addField('<:info:564497894497845290> ID', `<:seta:573880808939716619> **${channel.id}**`)
        .addField('🚩 Position', `**<:seta:573880808939716619> ${channel.position}**`)
        .addField('🔞 NSFW ?', `<:seta:573880808939716619> **${channel.nsfw ? "Yes" : "No"}**`)
        .addField('<:data:563894349125910528> Created', `<:seta:573880808939716619> **${moment(channel.createdAt).format('L')} - ${moment(channel.createdAt).format('LT')}**`)
        .addField('<a:topic:564503229409263616> Topic', `**${channel.topic ? channel.topic : 'None'}**`)
        .setTimestamp()
        .setFooter(`Information requested by ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
        msg.channel.send(embed)

        }}})}

module.exports.config = {
    name: "channelinfo",
    aliases: ["canalinfo"]
}

module.exports.help = {
    name: "channelinfo",
    aliases: ["canalinfo"],
    usage: `[p]channelinfo **[\`Channel: Guild Channel\`]**`,
    descriptionEN: 'See some informations about a channel',
    descriptionPT: 'Veja algumas informações sobre um canal'
}
