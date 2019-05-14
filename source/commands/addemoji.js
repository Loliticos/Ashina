const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database, dataGuild) => {


    const language = dataGuild.data().language

        if(language === 'pt-br') {
            if(!msg.member.hasPermission("MANAGE_EMOJIS")) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
            }
            if(!msg.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Eu não possuo permissão para executar esse comando')
            }
    
            if(!args[0]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar um nome para essse emoji')
            }

            if(!args[1]) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar o url de um emoji para ser utilizado')
            }

            if(/^https?:\/\/.+/gi.test(args[1])) {

            try {

            msg.guild.createEmoji(args[1], args[0])
            let embed = new Discord.RichEmbed()
            .setColor('#00e8ff')
            .setDescription(`**<:sucesso:572239323165098005> \`|\` Eu adicionei o emoji \`${args[0]}\` com sucesso**`)
            return msg.channel.send(embed)

            } catch(e) {
           	  	return msg.channel.send('<:erro:572508266412769281> `|` Oops! Eu não consegui adicionar o emoji, certifique-se que a quantidade de emojis no servidor é menor que 50')
           }

            } else {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar um URL válido para o emoji')
            }
        } else {

        if(!msg.member.hasPermission("MANAGE_EMOJIS")) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You dont have permission to execute this command')
        }
        if(!msg.guild.member(client.user).hasPermission('MANAGE_EMOJIS')) {
            return msg.channel.send('<:atencao:556923012381802496> `|` I dont have permission to execute this command')
        }

        if(!args[0]) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You need to type a name for this emoji')
        }

        if(!args[1]) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You need to type a URL for the emoji')
        }

    if(/^https?:\/\/.+/gi.test(args[1])) {

    	try {
  
        msg.guild.createEmoji(args[1], args[0])
        let embed = new Discord.RichEmbed()
        .setColor('#00e8ff')
        .setDescription(`**<:sucesso:572239323165098005> \`|\` I added the emoji \`${args[0]}\` with success**`)
        msg.channel.send(embed)

       } catch(e) {
           return msg.channel.send('<:erro:572508266412769281> `|` Oops! I couldnt add the emoji, verify if the amount of emojis in the guild is less than 50')
       }

    } else {
        return msg.channel.send('<:atencao:556923012381802496> `|` You need to type a valid image to the emoji')    
    }
  
}}


module.exports.config = {
    name: "addemoji",
    aliases: ["createemoji", "criaremoji"]
}

module.exports.help = {
    name: "addemoji",
    aliases: ["createemoji", "criaremoji"],
    usage: `[p]addemoji **[\`Name\`] [\`Url\`]**`,
    descriptionEN: 'Ever wanted to add that emoji ? Go ahead and add him now!',
    descriptionPT: 'Sempre quis adicionar aquele emoji perfeito ? Vai em frente e adicione ele agora!'
}
