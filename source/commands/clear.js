const discord = require('discord.js');

module.exports.run = async (client, msg, args, database) => {

  let messagecount = parseInt(args[0]) || parseInt(args[1])

  database.collection('guilds').doc(msg.guild.id).get().then((q) => {
    if(q.exists) {
        const language = q.data().language

    if(language === 'pt-br') {
      if(!msg.member.hasPermission("KICK_MEMBERS")) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
      }

    if(!msg.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
      return msg.channel.send('<:atencao:556923012381802496> `|` Eu não possuo permissão para executar esse comando')
    }

    if(!args[0]) {
      return msg.channel.send('<:atencao:556923012381802496> `|` Você precisa digitar a quantidade de mensagens para ser apagada')
    }

  if(messagecount >= 101){
      return msg.channel.send('<:atencao:556923012381802496> `|` Eu não posso limpar mais de 100 mensagens')
      }

    try {

  if(msg.mentions.channels.first()) {
      let channel = msg.mentions.channels.first()
      channel.bulkDelete(args[1], true)
      msg.channel.send(`<:sucesso:572239323165098005> \`|\` Eu pude limpar \`${args[1]}\` mensagens`)
  } else {
      msg.delete()
      msg.channel.bulkDelete(args[0], true)
      msg.channel.send(`<:sucesso:572239323165098005> \`|\` Eu pude limpar \`${args[0]}\` mensagens`)
  }} catch(e) {
    return msg.channel.send('<:atencao:556923012381802496> `|` Eu não posso limpar mensagens que fazem mais de 2 semanas')
  }

    } else {
      if(!msg.member.hasPermission("KICK_MEMBERS")) {
        return msg.channel.send('<:atencao:556923012381802496> `|` You dont have permission to execute this command')
      }

    if(!msg.guild.member(client.user).hasPermission('KICK_MEMBERS')) {
        return msg.channel.send('<:atencao:556923012381802496> `|` I dont have permission to execute this command')
      }

    if(!args[0]) {
      return msg.channel.send('<:atencao:556923012381802496> `|` You need to type the amount of messages to delete')
    }

  if(messagecount >= 101){
      return msg.channel.send('<:atencao:556923012381802496> `|` I cant clear more than 100 messages**')
      }

    try {



  if(msg.mentions.channels.first()) {
      let channel = msg.mentions.channels.first()
      channel.bulkDelete(args[1], true)
      msg.channel.send(`<:sucesso:556929399501619220> \`|\` I could clear \`${args[1]}\` messages`)
  }else {
      msg.delete()
      msg.channel.bulkDelete(args[0], true)
      msg.channel.send(`<:sucesso:572239323165098005> \`|\` I could clear \`${args[0]}\` messages`)
  }}catch(e) {
      return msg.channel.send('<:sucesso:572239323165098005> `|` I cant clear messages older than 2 weeks')
  }

}}})}

module.exports.config = {
    name: "clear",
    aliases: ["purge", "limpar"]
}

module.exports.help = {
    name: "clear",
    aliases: ["purge", "limpar"],
    usage: `[p]clear **[\`Amount: Int\`]**`,
    descriptionEN: 'Clear the amount of messages of the current channel or from the selected channel',
    descriptionPT: 'Limpa as mensagems do canal atual ou do canal selecionado'
}