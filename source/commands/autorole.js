const Discord = require('discord.js')
const config = require('../config.json');
const superagent = require('superagent')

module.exports.run = async (client, msg, args, database, dataGuild) => {
      const language = dataGuild.data().language

      if(language === 'pt-br') {
            if(!msg.member.hasPermission("MANAGE_GUILD")) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
            }

            if(!msg.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
                return msg.channel.send('<:atencao:556923012381802496> `|` Eu não possuo permissão para executar esse comando')
            }

            const prefix = dataGuild.data().prefix

        if(!args[0]) {
          const embed = new Discord.RichEmbed()
          .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
          .setTitle(`<:como:563082470833127424> \`${prefix}autorole\``)
          .addField('<:exemplos:572956673665269770> Exemplos:', `${prefix}autorole \`@cargo\`\n ${prefix}autorole \`off\``)
          .addField('<:aliases:572935329699594280> Aliases', '**setrole**')
          .setColor('#007fc7')
          return msg.channel.send(embed)
        }

        if(args[0] === 'off' || args[0] === 'OFF' || args[0] === 'false') {
          database.collection('guilds').doc(msg.guild.id).update({
            'autoRole' : false
          })

          const embed = new Discord.RichEmbed()
          .setColor('#007fc7')
          .setAuthor('Configuração', msg.author.displayAvatarURL)
          .addField('<:cargo:572430325729460224> Autorole', `**<:desativado:559207785326313485> Desativado**`)
          return msg.channel.send(embed)
        }

   const role = msg.mentions.roles.first() || msg.guild.roles.find(r => r.name === args[0]) || msg.guild.roles.get(args[0])
            
    if(!role) {
        return msg.channel.send('<:atencao:556923012381802496> `|` Eu não pude encontrar um cargo com essas informações')
    } 

    database.collection('guilds').doc(msg.guild.id).update({
          'autoRole' : role.id
    })

    const embed = new Discord.RichEmbed()
    .setColor('#007fc7')
    .setAuthor('Configuração', msg.author.displayAvatarURL)
    .addField('<:cargo:572430325729460224> Autorole', `**<:ativo:559206416590700556> Ativado \`|\` Cargo: \`${role.name}\`**`)
    return msg.channel.send(embed)

      } else {

        if(!msg.member.hasPermission("MANAGE_GUILD")) {
            return msg.channel.send('<:atencao:556923012381802496> `|` You dont have permissions to execute this command')
        }

        if(!msg.guild.member(client.user).hasPermission("MANAGE_ROLES")) {
              return msg.channel.send('<:atencao:556923012381802496> `|` I dont have permissions to execute this command')
        }

        const prefix = dataGuild.data().prefix

        if(!args[0]) {
          const embed = new Discord.RichEmbed()
          .setAuthor(msg.author.tag, msg.author.displayAvatarURL)
          .setTitle(`<:como:563082470833127424> \`${prefix}autorole\``)
          .addField('<:exemplos:572956673665269770> Examples:', `${prefix}autorole \`@role\`\n ${prefix}autorole \`off\``)
          .addField('<:aliases:572935329699594280> Aliases', '**setrole**')
          .setColor('#007fc7')
          return msg.channel.send(embed)
        }

        if(args[0] === 'off' || args[0] === 'OFF' || args[0] === 'false') {
          database.collection('guilds').doc(msg.guild.id).update({
            'autoRole' : false
          })

          const embed = new Discord.RichEmbed()
          .setColor('#007fc7')
          .setAuthor('Config', msg.author.displayAvatarURL)
          .addField('<:cargo:572430325729460224> Autorole', `**<:desativado:559207785326313485> Disabled**`)
          return msg.channel.send(embed)
        }

   const role = msg.mentions.roles.first() || msg.guild.roles.find(r => r.name === args[0]) || msg.guild.roles.get(args[0])
            
   if(!role) {
       return msg.channel.send('<:atencao:556923012381802496> `|` I Couldnt find a role with that informations')
   } 

    database.collection('guilds').doc(msg.guild.id).update({
        'autoRole' : role.id
    })

    const embed = new Discord.RichEmbed()
    .setColor('#007fc7')
    .setAuthor('Config', msg.author.displayAvatarURL)
    .addField('<:cargo:572430325729460224> Autorole', `**<:ativo:559206416590700556> Activated \`|\` Role: \`${role.name}\`**`)
    return msg.channel.send(embed)
      }
}



module.exports.config = {
    name: "autorole",
    aliases: ["setrole"]
}

module.exports.help = {
    name: "autorole",
    aliases: ["setrole"],
    usage: `[p]autorole **[\`Role: Guild Role\`]**`,
    descriptionEN: 'Select a role that will be given when a member joins the guild',
    descriptionPT: 'Seleciona um cargo que será dado quando um membro entrar no servidor'
}
