
module.exports = async (client, msg) => {

  if(msg.channel.type === 'dm' || msg.author.bot) return;
  if(!isNaN(msg.content)) return

  const admin = require('firebase-admin')

  let database = admin.firestore()

  const Discord = require('discord.js');

    database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
      const prefix = dataGuild.data().prefix
      const language = dataGuild.data().language
   if(RegExp(`^<@!?${client.user.id}>$`).test(msg.content)) {

      if(language === 'pt-br') {
        const embed = new Discord.RichEmbed()
        .setColor('#007fc7')
        .setDescription(`**Olá ${msg.member}, o meu prefixo nesse servidor é \`${prefix}\` você pode testar utilizando esse comando \`${prefix}ajuda\`**`)
        return msg.channel.send(embed)
      } else {
        const embed = new Discord.RichEmbed()
        .setColor('#007fc7')
        .setDescription(`**Hello ${msg.member}, my prefix in this guild is \`${prefix}\` you can test using this command \`${prefix}help\`**`)
        return msg.channel.send(embed)
      }

  }


    if(!msg.content.startsWith(prefix)) return;

    database.collection('bot').doc(msg.author.id).get().then((dataBan) => {
      if(dataBan.exists) {
        const banned = dataBan.data().banned
        const reason = dataBan.data().motivo

        if(banned === true) {
          if(language === 'pt-br') {
            const embed = new Discord.RichEmbed()
            .setTitle('<:banido:574675264517439520> Usuário banido')
            .setColor('#ff0000')
            .setDescription(`**Você foi banido de utilizar meus comandos\n Motivo: \`${reason}\`**`)
            return msg.channel.send(embed)

          } else {  
            const embed = new Discord.RichEmbed()
            .setTitle('<:banido:574675264517439520> User Banned')
            .setColor('#ff0000')
            .setDescription(`**You are banned from using my commands\n Reason: \`${reason}\`**`)
            return msg.channel.send(embed)
          }              
        }
    }
        
        let manutencao = false

        if(msg.author.id !== '532294395655880705' && manutencao === true) {
          return msg.channel.send('Ashina está em manutenção! Melhorias em breve')
        }

        let messageArray = msg.content.split(' ')
        let cmd = messageArray[0]
        let args = messageArray.slice(1)  

        let commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
        if(commandFile) commandFile.run(client, msg, args, database, dataGuild)
    })
    })
}