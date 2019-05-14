const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database) => {

  database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
    const language = dataGuild.data().language

    let message;

    if(language === 'pt-br') message = 'Você precisa digitar uma mensagem para eu repetir!'
    if(language === 'en-us') message = 'You need to type a message for me to repeat'

    let argsresult;
    let mChannel = msg.mentions.channels.first()

    if(!args[0]) {
        return msg.channel.send(`<:atencao:556923012381802496> \`|\` ${message}`)
    }

    if(!mChannel) {
        argsresult = args.slice(0).join(' ')
        msg.channel.send(argsresult)
    } else {
        argsresult = args.slice(1).join(' ')
        mChannel.send(argsresult)
    }

  })

}


    module.exports.config = {
        name: "say",
        aliases: ["falar"],
    }

module.exports.help = {
    name: "say",
    aliases: ["falar"],
    usage: `[p]say **[\`Word: String\`]**`,
    descriptionEN: 'Makes Ashina say something',
    descriptionPT: 'Faça Ashina falar algo'
}
