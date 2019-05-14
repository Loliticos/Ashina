const Discord = require('discord.js')
const ms = require('parse-ms')

module.exports.run = async (client, msg, args, database) => {

	database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {

		const prefix = dataGuild.data().prefix
		const language = dataGuild.data().language


	const member = msg.mentions.users.first() || client.users.get(args[0]) || client.users.find(u => u.username === args[0])

    if(!member) {
        const embed = new Discord.RichEmbed()
        .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
        .setTitle(`<:como:563082470833127424> \`${prefix}transferir\``)
        .addField('<:exemplos:572956673665269770> Exemplos:', `${prefix}transferir **[\`User: GuildMember\`] [\`Number\`]**\n ${prefix}transferir \`@User 500\`\n ${prefix}transfeir \`532294395655880705 1000\``)
        .addField('<:aliases:572935329699594280> Aliases', '**transfer**')
        .setColor('#007fc7')
        return msg.channel.send(embed)
    }

    if(member.id === msg.author.id) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode transferir um valor para você mesmo')
    }

    if(isNaN(args[1])) {
        return msg.channel.send('<:atencao:556923012381802496> `|` O valor para ser transferido precisa ser um número')
    }

    if(args[0].includes('-') || args[0].startsWith(0)) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode transferir um valor negativo')
     }

    database.collection('users').doc(msg.author.id).get().then((dataUser) => {
    	const bancoMoney = dataUser.data().bancoMoney

    if(bancoMoney < args[1]) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Você não pode transferir um valor que você não possui')
    }

    const moneyToBeTransfered = parseInt(args[1])
    let newMoneyBank = dataUser.data().bancoMoney -= Math.floor(moneyToBeTransfered)

    database.collection('users').doc(member.id).get().then((dataMentionedUser) => {

    
    let newUserMoneyBank = dataMentionedUser.data().bancoMoney += Math.floor(moneyToBeTransfered)

    database.collection('users').doc(msg.author.id).update({
    	'bancoMoney' : newMoneyBank
    })

    database.collection('users').doc(member.id).update({
    	'bancoMoney' : newUserMoneyBank
    })

    const embed = new Discord.RichEmbed()
    .setDescription(`<:sucesso:572239323165098005> \`|\` Você transferiu um valor de \`${Math.floor(moneyToBeTransfered)}\` para a conta do usuário \`${member.username}\``)
    .setColor('#007fc7')
    return msg.channel.send(embed)

    		})
 		})
	})
}
module.exports.config = {
    name: "transfer",
    aliases: ["transferir"]
}

module.exports.help = {
    name: "transfer",
    aliases: ["transferir"],
    usage: `[p]transfer **[\`User: GuildMember\`] [\`Int: Number\`]**`,
    descriptionEN: 'Transfer a money to a user bank account',
    descriptionPT: 'Transfira um dinheiro para a conta do banco de um usuário'
}
