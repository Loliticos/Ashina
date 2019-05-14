const Discord = require('discord.js')
const config = require('../config.json');
const superagent = require('superagent')
const emojis = require('../emojis.json')
const ms = require('parse-ms')

module.exports.run = async (client, msg, args, database) => {

  database.collection('users').doc(msg.author.id).get().then((dataUser) => {

   const suborno = dataUser.data().suborno
   let timeout = 900000

   if(suborno !== null && timeout - (Date.now() - suborno) > 0) {
    let time = ms(timeout - (Date.now() - suborno));
    const embed = new Discord.RichEmbed()
    .setColor('#007fc7')
    .setDescription(`<a:tempo:573983897860177940> \`|\` Você já subornou um policial hoje, espere \`${time.minutes} minuto(s) e ${time.seconds} segundo(s)\``)
    return msg.channel.send(embed)

  }

    let money = dataUser.data().money

    if(money < 500) {   
      const bancoMoney = dataUser.data().bancoMoney

    if(bancoMoney < 500) {
      return msg.channel.send(`${emojis.atencao} \`|\` É necessário \`500\` coins para subornar um policial`)
    }
    const newMoney = dataUser.data().bancoMoney -= 500
    const steal = dataUser.data().steal

    if(steal <= 0) {
      return msg.channel.send(`${emojis.atencao} \`|\` Shiii! Você não precisa subornar um policial, o tempo já foi liberado! vá assaltar alguém`)
    }

    database.collection('users').doc(msg.author.id).update({
      'bancoMoney' : bancoMoney,
      'steal' : 0,
      'suborno' : Date.now()
    })
    const embed = new Discord.RichEmbed()
    .setColor('#007fc7')
    .setDescription('<:policial:574244076782616576> `|` **Você subornou um policial e foi retirado `500` coins do seu banco, agora você pode roubar novamente**')
    return msg.channel.send(embed)

  } else if(money > 500) {

    const newMoney = dataUser.data().money -= 500
    const steal = dataUser.data().steal

    if(steal <= 0) {
      return msg.channel.send(`${emojis.atencao} \`|\` Shiii! O tempo de roubar já foi liberado para você! Vá assaltar alguém`)
    }

    database.collection('users').doc(msg.author.id).update({
      'money' : newMoney,
      'steal' : 0,
      'suborno' : Date.now()

    })

    const embed = new Discord.RichEmbed()
    .setColor('#007fc7')
    .setDescription('<:policial:574244076782616576> `|` **Você subornou um policial por `500` coins, agora você pode roubar novamente**')
    return msg.channel.send(embed)
  }

  })
}



module.exports.config = {
    name: "bribery",
    aliases: ["suborno", "subornar"]
}

module.exports.help = {
    name: "bribery",
    aliases: ["suborno", "subornar"],
    usage: '`[p]bribery`',
    descriptionEN: 'Bribery a cop so you can steal again',
    descriptionPT: 'Suborna um policial para você poder roubar novamente'
}
