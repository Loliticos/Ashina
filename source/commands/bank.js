const Discord = require('discord.js')
const ms = require ('parse-ms')

module.exports.run = async (client, msg, args, database, dataGuild) => {

  const language = dataGuild.data().language

  const member = msg.mentions.users.first() || msg.guild.members.get(args[0]) || msg.author

  database.collection('users').doc(member.id).get().then((dataUser) => {
    if(!dataUser) {
      database.collection('users').doc(member.id).set({
        'guildID' : msg.guild.id,
        'money' : 0,
        'gun' : false,
        'bancoMoney' : 0
      })
    }

    if(language === 'pt-br') {
      const member = msg.mentions.users.first() || msg.guild.members.get(args[0]) || msg.author

      if(member.bot) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode ver o banco de um bot! Eles são riquíssimos!')
      }


      const money = dataUser.data().money
      const bank = dataUser.data().bancoMoney
      let gun = dataUser.data().gun

      if(gun === false) gun = 'Não'
      if(gun !== false) gun = 'Sim'

      const embed = new Discord.RichEmbed()
      .setTitle('<:cofre:570798235837530113> Cofre Pessoal')
      .setColor('#007fc7')
      .addField('<:money:573880613887541278> Dinheiro Na Mão', `<:seta:573880808939716619> \`${money}\``)
      .addField('<:banco:570799272468021267> Dinheiro No Banco', `<:seta:573880808939716619> \`${bank}\``)
      .addField('<:ladrao:570799643189968899> É um ladrão ?', `<:seta:573880808939716619> \`${gun}\``)
      msg.channel.send(embed)

  } else {

    const member = msg.mentions.users.first() || msg.guild.members.get(args[0]) || msg.author

    if(member.bot) {
      return msg.channel.send('<:atencao:556923012381802496> `|` You cant see the bank of a bot! They are rich')
    }

    const bank = dataUser.data().bancoMoney
    const money = dataUser.data().money
    let gun = dataUser.data().gun

    if(gun === false) gun = 'No'
    if(gun !== true) gun = 'Yes'


    const embed = new Discord.RichEmbed()
    .setTitle('<:cofre:570798235837530113> Safe Box')
    .setColor('#007fc7')
    .addField('<:money:573880613887541278> Cash On Hand', `<:seta:573880808939716619> \`${money}\``)
    .addField('<:banco:570799272468021267> Cah In The Bank', `<:seta:573880808939716619> \`${bank}\``)
    .addField('<:ladrao:570799643189968899> Is A Thief ?', `<:seta:573880808939716619> \`${gun}\``)
    msg.channel.send(embed)
    }
  })

}



module.exports.config = {
    name: "bank",
    aliases: ["banco"]
}

module.exports.help = {
    name: "bank",
    aliases: ["banco"],
    usage: `[p]bank **[\`Member: Guild Member\`]**`,
    descriptionEN: 'See the informations about your bank or from someone else',
    descriptionPT: 'Veja as informações do seu banco ou de outra pessoa'
}
