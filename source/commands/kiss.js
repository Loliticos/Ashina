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
                        return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa mencionar alguém para beijar')
                    }
            
                    let {body} = await superagent
                    .get('https://nekos.life/api/v2/img/kiss')
                    if(!{body}) return msg.channel.send('<:error:568137053473079326> `|` Oops, alguma coisa deu errado tente novamente')
            
                    const embed = new Discord.RichEmbed()
                    .setTitle('<:passarinhos:556932352220332083> Beijo')
                    .setColor('#007fc7')
                    .setDescription(`**<:casal:556931651238756382> \`|\` ${msg.member} beijou ${member}**`)
                    .setImage(body.url)
                    .setTimestamp()
                    .setFooter(`🔎 Beijo solicitado por ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
                    msg.channel.send(embed)
                } else {

        if(!member) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You need to mention a user to kiss')
        }

        let {body} = await superagent
        .get('https://nekos.life/api/v2/img/kiss')
        if(!{body}) return msg.channel.send('<:error:568137053473079326> `|` Oops something gone wrong, try again')

        const embed = new Discord.RichEmbed()
        .setTitle('<:passarinhos:556932352220332083> Kiss')
        .setColor('#007fc7')
        .setDescription(`**<:casal:556931651238756382> \`|\` ${msg.member} kissed ${member}**`)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`🔎 Kiss requested by ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
        msg.channel.send(embed)

        }}})}

module.exports.config = {
    name: "kiss",
    aliases: ["beijar"]
}

module.exports.help = {
    name: "kiss",
    aliases: ["beijar"],
    usage: `[p]kiss **[\`Member: Guild Member\`]**`,
    descriptionEN: 'Ever wanted to kiss somebody ? Go ahead!',
    descriptionPT: 'Sempre quis beijar aquela pessoa ? Vai em frente!'
}