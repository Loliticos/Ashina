const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database) => {

    database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
        const language = dataGuild.data().language

        if(language === 'pt-br') {
            const embed = new Discord.RichEmbed()
            .setTitle('<:aliases:572935329699594280> Placeholders')
            .setColor('#007fc7')
            .setDescription(`
            \`{member}\` <:setinha:572936328694726667> **Mostra o username do membro** \`(${msg.author.username})\`
            \`{@member}\` <:setinha:572936328694726667> **Menciona o membro** \`(\`${msg.member}\`)\`
            \`{guild}\` <:setinha:572936328694726667> **Mostra o nome do servidor** \`(${msg.guild.name})\`
            \`{memberCount}\` <:setinha:572936328694726667> **Mostra a quantidade de membros no servidor** \`(${msg.guild.memberCount})\``)
            msg.channel.send(embed)

        } else {

            const embed = new Discord.RichEmbed()
            .setTitle('<:aliases:572935329699594280> Placeholders')
            .setColor('#007fc7')
            .setDescription(`
            \`{member}\` <:setinha:572936328694726667> **Shows the username of the member** \`(${msg.author.username})\`
            \`{@member}\` <:setinha:572936328694726667> **Mentions the member*** \`(\`${msg.member}\`)\`
            \`{guild}\` <:setinha:572936328694726667> **Shows the guild name** \`(${msg.guild.name})\`
            \`{memberCount}\` <:setinha:572936328694726667> **Shows the guild memberCount** \`(${msg.guild.memberCount})\``)
            msg.channel.send(embed)

        }

    })
}

module.exports.config = {
    name: "placeholders",
    aliases: ["placeholder"]
}

module.exports.help = {
    name: "placeholders",
    aliases: ["placeholders"],
    usage: '`[p]placeholders`',
    descriptionEN: 'See the placeholders that you can use in customized commands from Ashina',
    descriptionPT: 'Veja os Placeholders que você pode usar em comandos customizados da Ashina'
}
