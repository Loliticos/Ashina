const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database) => {

    database.collection('users').doc(msg.author.id).get().then((dataUser) => {
        if(!dataUser) {
           database.collection('users').doc(msg.member.id).set({ // Seta um valor padrão caso a variavel 'q' não existir
                'guildID' : msg.guild.id,
                'money' : 0,
                'gun' : false,
                'bancoMoney' : 0,
                'aboutMe' : false

            })
           msg.channel.send('<a:atualizacao:568955146558636032> Eu atualizei os seus status, digite esse comando novamente')
        }

        if(!args[0]) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar uma frase para ser colocada nas suas informações')
        }

        const message = args.join(' ')

        if(message.length > 50) {
            return msg.channel.send('<:atencao:556923012381802496> `|` Máximo de 50 letras para a sua frase')
        }

        database.collection('users').doc(msg.member.id).update({
            'aboutMe' : args.join(' ')
        })

        const embed = new Discord.RichEmbed()
        .setColor('#007fc7')
        .setAuthor('Perfil', msg.author.displayAvatarURL)
        .addField('<:informations:573266051480158218> Informações atualizadas', `<:sobremim:573266376806891540> **Sobre Mim Atualizado:** \`${args.join(' ')}\``)
        msg.channel.send(embed)

    })

}

module.exports.config = {
    name: "about",
    aliases: ["sobremim", "sobre", "setmsg", "aboutme"]
}

module.exports.help = {
    name: "about",
    aliases: ["sobremim", "sobre", "setmsg", "aboutme"],
    usage: `[p]about **[\`About: String\`]**`,
    descriptionEN: 'Sets the message that will be displayed in your informations',
    descriptionPT: 'Seta a mensagem que será mostrada nas suas informações'
}