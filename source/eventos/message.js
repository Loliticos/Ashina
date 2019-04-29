
module.exports = async (client, msg) => {

  if(msg.channel.type === 'dm' || msg.author.bot) return; // Se a mensagem for em dm ou o autor for o bot não faz nada

  let prefix = 'a!'

  const admin = require('firebase-admin')

  let database = admin.firestore()

  const Discord = require('discord.js');

      database.collection('guilds').doc(msg.guild.id).get().then((q) => { // Acessa a collection 'guilds' e o documento do id do servidor e pega as informações
          if(q.exists) { // se a variavel q existir
              prefix = q.data().prefix // Substitui o prefixo padrão pelo prefixo customizado
  }}).then(() => {
      if(RegExp(`^<@!?${client.user.id}>$`).test(msg.content)) {
              database.collection('guilds').doc(msg.guild.id).get().then((q) => {
              const language = q.data().language

      if(language === 'pt-br') { // Se a linguagem do servidor for pt-br
           const embed = new Discord.RichEmbed()
          .setColor('#007fc7')
          .setDescription(`**Olá ${msg.member}, o meu prefixo nesse servidor é \`${prefix}\` você pode testar utilizando esse comando \`${prefix}ajuda\`**`)
          return msg.channel.send(embed)
      } else { // caso não seja
          const embed = new Discord.RichEmbed()
          .setColor('#007fc7')
          .setDescription(`**Hello ${msg.member}, my prefix in this guild is \`${prefix}\` you can test using this command \`${prefix}help\`**`)
          return msg.channel.send(embed)
      }
  })

      }
          let messageArray = msg.content.split(' ')
          let cmd = messageArray[0]
          let args = messageArray.slice(1)

          if(!msg.content.startsWith(prefix)) return; // não responde a outros prefixos

              database.collection('users').doc(msg.member.id).get().then((q) => {
          if(!q.exists) {
              database.collection('users').doc(msg.member.id).set({ // Seta um valor padrão caso a variavel 'q' não existir
                  'guildID' : msg.guild.id,
                  'money' : 0,
                  'gun' : false,
                  'bancoMoney' : 0

              })

          if(language === 'pt-br') {
              return msg.channel.send('**<a:atualizacao:568955146558636032> Eu atualizei os seus status digite esse comando novamente**')
           
           } else {
              return msg.channel.send('**<a:atualizacao:568955146558636032> I updtaded your status, type this command again**')
           }

          } else {
              const member = msg.mentions.users.first() || client.users.get(args[0])
              if(member) {
                  database.collection('users').doc(member.id).get().then((q) => {
                      if(!q.exists) {
                          database.collection('users').doc(member.id).set({
                              'guildID' : msg.guild.id,
                              'money' : 0,
                              'gun' : false,
                              'bancoMoney' : 0
                          })

                      }
                  })
              }
              let commandFile = client.commands.get(cmd.slice(prefix.length)) || client.commands.get(client.aliases.get(cmd.slice(prefix.length)))
              if(commandFile) commandFile.run(client, msg, args, database)
          }

      })})

}
