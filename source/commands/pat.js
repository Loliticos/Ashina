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
                        return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa mencionar alguém para acariciar')
                    }
            
                    let {body} = await superagent
                    .get('https://nekos.life/api/v2/img/pat')
                    if(!{body}) return msg.channel.send('<:error:568137053473079326> `|` Oops, alguma coisa deu errado tente novamente')
            
                    const embed = new Discord.RichEmbed()
                    .setTitle('<:carinho:552192918853779485> Carinho')
                    .setColor('#007fc7')
                    .setDescription(`**<:amor:556931468119769119> \`|\` ${msg.member} acariciou ${member}**`)
                    .setImage(body.url)
                    .setTimestamp()
                    .setFooter(`🔎  solicitado por ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
                    msg.channel.send(embed)
                } else {

        if(!member) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You need to mention a user to pat!')
        }

        let {body} = await superagent
        .get('https://nekos.life/api/v2/img/pat')
        if(!{body}) return msg.channel.send('<:error:568137053473079326> `|` Oops something gone wrong, try again')

        const embed = new Discord.RichEmbed()
        .setTitle('<:carinho:552192918853779485> Pat')
        .setColor('#007fc7')
        .setDescription(`**<:amor:556931468119769119> \`|\` ${msg.member} stroked ${member}**`)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`🔎 Pat requested by ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
        msg.channel.send(embed)

        }}})}

module.exports.config = {
    name: "pat",
    aliases: ["acariciar", "carinho"]
}

module.exports.help = {
    name: "pat",
    aliases: ["acariciar", "carinho"],
    usage: `[p]pat **[\`Member: Guild Member\`]**`,
    descriptionEN: 'Are you happy with Someone ? Give him a nice pat!',
    descriptionPT: 'Está feliz com alguém ? De um belo carinho para ele'
}
