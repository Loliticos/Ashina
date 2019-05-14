const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database, dataGuild) => {

    const member = msg.mentions.users.first() || client.users.get(args.join(' ')) || client.users.find(user => user.username === args[0]) || msg.author;
    const user = member.user || member;

    const language = dataGuild.data().language

    if(language === 'pt-br') {
        const embed = new Discord.RichEmbed()
        .setTitle(user.tag)
        .setColor('#ff0000')
        .setDescription(`**Caso queira baixar esse avatar clique [aqui](${user.displayAvatarURL})**`)
        .setImage(`${user.displayAvatarURL}`)
        .setTimestamp()
        .setFooter(`Avatar solicitado por ${msg.author.username}`, msg.author.displayAvatarURL)
        msg.channel.send(embed)
    } else {
        const embed = new Discord.RichEmbed()
        .setTitle(user.tag)
        .setColor('#ff0000')
        .setDescription(`**If you want to download this avatar click [here](${user.displayAvatarURL})**`)
        .setImage(`${user.displayAvatarURL}`)
        .setTimestamp()
        .setFooter(`Avatar requested by ${msg.author.username}`, msg.author.displayAvatarURL)
        msg.channel.send(embed)
    }

}

module.exports.config = {
    name: "avatar",
    aliases: ["icon"]

}

module.exports.help = {
    name: "avatar",
    aliases: ["icon"],
    usage: `[p]avatar **[\`Member: Guild Member\`]**`,
    descriptionEN: 'See your avatar or from someone',
    descriptionPT: 'Veja o seu avatar ou de alguém'
}

