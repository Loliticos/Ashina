const Discord = require('discord.js');

module.exports.run = async (client, msg, args, database) => {

        database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {

        const language = dataGuild.data().language
        const prefix = dataGuild.data().prefix

    if(language == 'pt-br') {

    if(!args[0]) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Por favor, digite algo que Trump iria tornar ilegal')
    }
    if(args[0].length > 6) {
        return msg.channel.send('<:atencao:556923012381802496> `|`*Máximo de 6 letras')
    }

    const trumpMadeIllegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/${args[0].toUpperCase()}.gif`;

    const embed = new Discord.RichEmbed()
    .setColor('#007fc7')
    .setTitle(`<:trump:571087851379228693> Trump agora tornou ${args[0]} ilegal`)
    .setImage(trumpMadeIllegal)

    msg.channel.send(embed)

    } else {
    if(!args[0]) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Please, type something that trump would turn illegal')
    }
    if(args[0].length > 6) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Max of 6 letters')
    }

    const isNowIllegal = `https://storage.googleapis.com/is-now-illegal.appspot.com/gifs/${args[0].toUpperCase()}.gif`;

    const embed = new Discord.RichEmbed()
    .setColor('#007fc7')
    .setTitle(`<:trump:571087851379228693> Trump now made ${args[0]} illegal`)
    .setImage(isNowIllegal);

    msg.channel.send(embed)
    }

})
}


module.exports.config = {
    name: "trump",
    aliases: ["ilegal"]
}

module.exports.help = {
    name: "trump",
    aliases: ["ilegal"],
    usage: '`[p]trump Animes`',
    descriptionEN: 'Makes trump do something ilegal',
    descriptionPT: 'Faz o trump fazer algo ilegal'
}

