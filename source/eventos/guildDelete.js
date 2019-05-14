module.exports = async (client, guild) => {

  const admin = require('firebase-admin')

  let database = admin.firestore()

database.collection('guilds').doc(guild.id).delete()
}


