
module.exports = async (client, member) => {

  const admin = require('firebase-admin')

  let database = admin.firestore()

  database.collection('guilds').doc(member.guild.id).get().then((q) => {

          const message = q.data().welcomeMSG
          const channelID = q.data().welcomeChannel
          const autoRole = q.data().autoRole

          if(autoRole !== false) member.addRole(autoRole)

          if(message === false || channelID === false) return; // Se a mensagem não existir ou o canal não for setado não faz nada

          const channel = member.guild.channels.get(channelID)
          // Você pode utilizar isso para pegar o objeto do canal, já que a variavel 'channelID' é um id ele procura o canal por esse id

          channel.send(message.replace('{member}', member.user.username).replace('{@member}', member).replace('{guild}', member.guild.name).replace('{memberCount}', member.guild.memberCount))
  })
}
