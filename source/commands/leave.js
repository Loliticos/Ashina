 const Discord = require('discord.js')
 const emojis = require('../emojis.json')

 module.exports.run = async (client, msg, args, database) => {

 const voiceChannel = msg.member.voiceChannel

 if(!voiceChannel) {
 	return msg.channel.send(`${emojis.atencao} \`|\` Você não está em nenhum canal de voz`)
 }

 const botVoiceChannel = msg.guild.me.voiceChannel

 if(!botVoiceChannel) {
 	return msg.channel.send(`${emojis.atencao} \`|\` Eu não estou em nenhum canal de voz no momento`)

 } else if(botVoiceChannel) {

 	voiceChannel.leave()

 	msg.channel.send(`${emojis.bem_vindo} \`|\` Eu sai do canal de voz \`${voiceChannel.name}\` com sucesso`)
 	}
}

 module.exports.config = {
    name: "leave",
    aliases: ["sair"]
}


