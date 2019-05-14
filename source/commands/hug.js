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
                        return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa mencionar alguém para abraçar*')
                    }
            
                    let {body} = await superagent
                    .get('https://nekos.life/api/v2/img/hug')
                    if(!{body}) return msg.channel.send('<:error:568137053473079326> `|` Oops, alguma coisa deu errado tente novamente')
            
                    const embed = new Discord.RichEmbed()
                    .setTitle('<:abraco:556932628230570022> Abraço')
                    .setColor('#007fc7')
                    .setDescription(`**<:amor:556931468119769119> \`|\` ${msg.member} abraçou ${member}**`)
                    .setImage(body.url)
                    .setTimestamp()
                    .setFooter(`🔎 Abraço solicitado por ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
                    msg.channel.send(embed)
                } else {

        if(!member) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You need to mention a user to hug')
        }

        let {body} = await superagent
        .get('https://nekos.life/api/v2/img/hug')
        if(!{body}) return msg.channel.send('<:error:568137053473079326> `|` Oops something gone wrong, try again')

        const embed = new Discord.RichEmbed()
        .setTitle('<:abraco:556932628230570022> Hug')
        .setColor('#007fc7')
        .setDescription(`**<:amor:556931468119769119> \`|\` ${msg.member} hugged ${member}**`)
        .setImage(body.url)
        .setTimestamp()
        .setFooter(`🔎 Hug requested by ${msg.author.username}`, `${msg.author.displayAvatarURL}`)
        msg.channel.send(embed)

        }}})}

module.exports.config = {
    name: "hug",
    aliases: ["abracar", "abraco", "abraçar"]
}

module.exports.help = {
    name: "hug",
    aliases: ["abracar", "abraco", "abraçar"],
    usage: `[p]hug **[\`Member: Guild Member\`]**`,
    descriptionEN: 'Are you happy with Someone? Give him a amazing hug!',
    descriptionPT: 'Está feliz com alguém ? Dê aquele abraço maravilhoso'
}
