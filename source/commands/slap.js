const Discord = require('discord.js')
const config = require('../config.json');
const superagent = require('superagent')

module.exports.run = async (client, msg, args, database) => {

        const member = msg.mentions.users.first() || client.users.get(args.join(' '))

        database.collection('guilds').doc(msg.guild.id).get().then(async(q) => {
            if(q.exists) {
                const language = q.data().language

            if(language === 'pt-br') {
                if(!member) {
                    return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa mencionar alguém para dar um tapa')
                }
        
                let {body} = await superagent
                .get('https://nekos.life/api/v2/img/slap')
                if(!{body}) return msg.channel.send('<:error:568137053473079326> `|` Oops alguma coisa deu errado, tente novamente')
        
                const embed = new Discord.RichEmbed()
                .setTitle('<:tapa:556933041289691136> Tapa')
                .setColor('#007fc7')
                .setDescription(`**<:doeu:556933271896981522> \`|\` ${msg.member} deu um tapa em ${member}**`)
                .setImage(body.url)
                .setTimestamp()
                .setFooter(`🔎 Tapa solicitado por ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
                msg.channel.send(embed)

            } else {

        if(!member) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You need to mention a user to slap')
        }

        let {body} = await superagent
        .get('https://nekos.life/api/v2/img/slap')
        if(!{body}) return msg.channel.send('<:error:568137053473079326> `|` Oops something gone wrong, try again')

        const embed = new Discord.RichEmbed()
        .setTitle('<:tapa:556933041289691136> Slap')
        .setColor('#007fc7')
        .setDescription(`**<:doeu:556933271896981522> \`|\` ${msg.member} slapped ${member}**`)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`🔎 Slap requested by ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
        msg.channel.send(embed)

        }}})}

    module.exports.config = {
        name: "slap",
        aliases: ["tapa"]
    }

module.exports.help = {
    name: "slap",
    aliases: ["tapa"],
    usage: `[p]slap **[\`Member: Guild Member\`]**`,
    descriptionEN: 'Are you angry from somebody ? Slap him in the fase',
    descriptionPT: 'Está com raiva de alguém ? Dê um tapa na cara dele!'
}

