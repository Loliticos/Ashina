const Discord = require('discord.js')
const config = require('../config.json');

module.exports.run = async (client, msg, args, database, dataGuild) => {

    client.shard.fetchClientValues('guilds.size').then(results => {
        const guildCount = results.reduce((prev, guildCount) => prev + guildCount, 0);

        const prefix = dataGuild.data().prefix
        const language = dataGuild.data().language

        if(language === 'pt-br') {
            const creator = client.users.get('532294395655880705')
            const embed = new Discord.RichEmbed()
            .setTitle('<:taggbot:549403420822339584> Ashina')
            .setColor('#007fc7')
            .setDescription(`Olá ${msg.author.username} eu me chamo Ashina e eu sou um simples bot para Discord com funcionalidades íncriveis!
            Nesse exato momento eu estou alegrando **${guildCount} servidores** e falando com **${client.users.size} jogadores!** Eu fui criada em <:javascript:554821217060913153> **[Javascript](https://www.javascript.com/)** utilizando a framework <:discordjs:571128042530013204> **[Discord.js](https://discord.js.org/#/)**`)
            .addField('<:github:571130898775408651> Github', '**<:seta:563082385558732800> Caso você queira ver como eu fui feita clique [aqui](https://github.com/Loliticos/Ashina)**')
            .addField('<:prefixo:571132275958480896> Prefixo', `<:seta:563082385558732800> **Meu prefixo nesse servidor é \`${prefix}\`**`)
            .addField('<:add:571133701950406656> Me adicione!', `<:seta:563082385558732800> **Me adicione! basta clicar [aqui](https://discordapp.com/api/oauth2/authorize?client_id=564131346591514635&permissions=1342270694&scope=bot)**`)
            .addField('<:suporte:571138693872484352> Servidor de suporte', `<:seta:563082385558732800> **Servidor de suporte! [Entre](https://discord.gg/WSv6sUN)**`)
            .setTimestamp()
            .setFooter(`Eu fui criada pelo ${creator.username}`, `${creator.displayAvatarURL}`)
            msg.channel.send(embed)

        } else {
             const creator = client.users.get('532294395655880705')
             const embed = new Discord.RichEmbed()
            .setTitle('<:taggbot:549403420822339584> Ashina')
            .setColor('#007fc7')
            .setDescription(`Hello ${msg.author.username} my name is Ashina and im a simples bot for Discord with some amazing functions!
            In this exact moment i'm throwing rejoicing in **${guildCount} guilds** and talking with **${client.users.size} players!** I was created in <:javascript:554821217060913153> **[Javascript](https://www.javascript.com/)** with the framework <:discordjs:571128042530013204> **[Discord.js](https://discord.js.org/#/)**`)
            .addField('<:github:571130898775408651> Github', '**<:seta:563082385558732800> In case you want to see how I was made click [here](https://github.com/Loliticos/Ashina)**')
            .addField('<:prefixo:571132275958480896> Prefix', `<:seta:563082385558732800> **My prefix in this guild is \`${prefix}\`**`)
            .addField('<:add:571133701950406656> Add me!', `<:seta:563082385558732800> **Add me! Just click [here](https://discordapp.com/api/oauth2/authorize?client_id=564131346591514635&permissions=1342270694&scope=bot)**`)
            .addField('<:suporte:571138693872484352> Support Guild', `<:seta:563082385558732800> **Support Guild! [Join](https://discord.gg/WSv6sUN)**`)
            .setTimestamp()
            .setFooter(`I was created by ${creator.username}`, `${creator.displayAvatarURL}`)
            msg.channel.send(embed)
        }   
    })
}

module.exports.config = {
    name: "botinfo",
    aliases: ["infobot", "ashina"]
}

module.exports.help = {
    name: "botinfo",
    aliases: ["infobot", "ashina"],
    usage: '`[p]botinfo`',
    descriptionEN: 'See some informations about Ashina',
    descriptionPT: 'Veja algumas informações sobre a Ashina'
}
