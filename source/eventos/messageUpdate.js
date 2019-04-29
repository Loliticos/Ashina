
const Discord = require('discord.js')

module.exports = async (client, oldMessage, newMessage) => {


	  const admin = require('firebase-admin')

  	  let database = admin.firestore()

  	    database.collection('guilds').doc(oldMessage.guild.id).get().then((dataGuild) => {

  	    	const channelID = dataGuild.data().logChannel

  	    	if(channelID === false) return

  	    	if(newMessage.author.bot) return

  	    	if(oldMessage.content === newMessage.content) return

  	    	const channel = oldMessage.guild.channels.get(channelID)

  	    	const embed = new Discord.RichEmbed()
  	    	.setDescription(`**[Pular até a mensagem](${newMessage.url})**`)
  	    	.setAuthor(oldMessage.author.username, oldMessage.author.displayAvatarURL)
  	    	.addField('<:mensagem:572420914818449438> Mensagem (Antes)', `\`${oldMessage.content}\``, true)
  	    	.addField('<:mensagem:572420914818449438> Mensagem (Depois)', `\`${newMessage.content}\``, true)
  	    	.addField('<:Membros:548301806799814657> Usuário', `\`${oldMessage.author.tag}\``, true)
  	    	.addField('<a:canal:551541016163909642> Canal', oldMessage.channel, true)
  	    	.setColor('#007fc7')
  	    	.setThumbnail(oldMessage.author.displayAvatarURL)
  	    	.setTimestamp()
  	    	.setFooter('© Direitos reservados a Ashina™', client.user.displayAvatarURL)
  	    	return channel.send(embed)

  	    })

}
