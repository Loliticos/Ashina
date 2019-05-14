const Discord = require('discord.js')
const config = require('../config.json');
const superagent = require('superagent')

module.exports.run = async (client, msg, args, database) => {
    database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
      const language = dataGuild.data().language

      if(language === 'pt-br') {

           if(!msg.member.hasPermission("MANAGE_GUILD")) {
               return msg.channel.send('<:atencao:556923012381802496> `|` Você não possui permissão para executar esse comando')
            }

            let autoRole = dataGuild.data().autoRole
            let language = dataGuild.data().language
            let logs = dataGuild.data().logChannel
            let welcome = dataGuild.data().welcomeChannel

            if(autoRole !== false) autoRole = `**<:ativo:559206416590700556> Ativado \`|\` Cargo: ${msg.guild.roles.get(autoRole)}**`
            if(autoRole === false) autoRole = '**<:desativado:559207785326313485> Desativado**'
            if(language === 'pt-br') language = '**<:idioma:572445685106868234> Sistema de Linguagem `|` Idioma: `Português`**'
            if(language === 'en-us') language = '**<:idioma:572445685106868234> Sistema de Linguagem `|` Idioma: `Inglês`**'
            if(logs !== false) logs = `**<:ativo:559206416590700556> Ativado \`|\` Canal: \`#${msg.guild.channels.get(logs).name}\`**`
            if(logs === false) logs = '**<:desativado:559207785326313485> Desativado**'
            if(welcome !== false) welcome = `**<:ativo:559206416590700556> Ativado \`|\` Canal:** \`#${msg.guild.channels.get(welcome).name}\``
            if(welcome === false) welcome = '**<:desativado:559207785326313485> Desativado**'

           const embed = new Discord.RichEmbed()
          .setColor('#007fc7')
          .setAuthor('Configuração', msg.author.displayAvatarURL)
          .addField('<:cargo:573881065513680896> Autorole', autoRole)
          .addField('<:mundo:572435835442692096> Linguagem', language)
          .addField('<:mensagem:572420914818449438> Logs', logs)
          .addField('<:bem_vindo:572955070707269634> Bem-Vindo', welcome)
          msg.channel.send(embed)


      } else {

           if(!msg.member.hasPermission("MANAGE_GUILD")) {
               return msg.channel.send('<:atencao:556923012381802496> `|` You dont have permissions to execute this command')
            }

            let autoRole = dataGuild.data().autoRole
            let language = dataGuild.data().language
            let logs = dataGuild.data().logChannel
            let welcome = dataGuild.data().welcomeChannel

            if(autoRole !== false) autoRole = `**<:ativo:559206416590700556> Activated \`|\` Role: ${msg.guild.roles.get(autoRole)}**`
            if(autoRole === false) autoRole = '**<:desativado:559207785326313485> Disabled**'
            if(language === 'pt-br') language = '**<:idioma:572445685106868234> System of Language `|` Language: `Portuguese`**'
            if(language === 'en-us') language = '**<:idioma:572445685106868234> System of Language `|` Language: `English`**'
            if(logs !== false) logs = `**<:ativo:559206416590700556> Activated \`|\` Channel: \`#${msg.guild.channels.get(logs).name}\`**`
            if(logs === false) logs = '**<:desativado:559207785326313485> Disabled**'
            if(welcome !== false) welcome = `**<:ativo:559206416590700556> Activated \`|\` Channel:** \`#${msg.guild.channels.get(welcome).name}\``
            if(welcome === false) welcome = '**<:desativado:559207785326313485> Disabled**'

           const embed = new Discord.RichEmbed()
          .setColor('#007fc7')
          .setAuthor('Config', msg.author.displayAvatarURL)
          .addField('<:cargo:573881065513680896> Autorole', autoRole)
          .addField('<:mundo:572435835442692096> Language', language)
          .addField('<:mensagem:572420914818449438> Logs', logs)
          .addField('<:bem_vindo:572955070707269634> Welcome', welcome)
          msg.channel.send(embed)

      }
  })
}

module.exports.config = {
    name: "configs",
    aliases: ["configuração", "config", "modules"]
}

module.exports.help = {
    name: "config",
    aliases: ["configuração", "config", "modules"],
    usage: '`[p]config`',
    descriptionEN: 'See the configuration of the guild',
    descriptionPT: 'Veja as configurações do servidor'
}

