
const Discord = require('discord.js')

module.exports = async (client, message) => {

	  const admin = require('firebase-admin')

  	  let database = admin.firestore()

  	    database.collection('guilds').doc(message.guild.id).get().then((dataGuild) => {

  	    	const channelID = dataGuild.data().logChannel

  	    	if(channelID === false) return

            if(message.author.bot) return

  	    	const channel = message.guild.channels.get(channelID)

  	    	const embed = new Discord.RichEmbed()
  	    	.setAuthor(message.author.username, message.author.displayAvatarURL)
  	    	.addField('<:mensagem:572420914818449438> Mensagem Apagada', `\`${message.content}\``, true)
  	    	.addField('<:Membros:548301806799814657> Usuário', `\`${message.author.tag}\``, true)
  	    	.addField('<a:canal:551541016163909642> Canal', message.channel)
  	    	.setColor('#007fc7')
  	    	.setThumbnail(message.author.displayAvatarURL)
  	    	.setTimestamp()
  	    	.setFooter('© Direitos reservados a Ashina™', client.user.displayAvatarURL)
  	    	channel.send(embed)

  	    })


}
