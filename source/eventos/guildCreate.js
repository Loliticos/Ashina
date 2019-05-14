module.exports = async (client, guild) => {

  const admin = require('firebase-admin')

  let database = admin.firestore()

  database.collection('guilds').doc(guild.id).set({
      'guildID' : guild.id,
      'prefix' : 'a!',
      'welcomeMSG' : false,
      'welcomeChannel' : false,
      'language' : 'en-us',
      'logChannel' : false,
      'autoRole' : false
  })

}



