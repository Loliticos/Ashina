        const Discord = require('discord.js')
        const config = require('../config.json');

module.exports.run = async (client, msg, args, database) => {

    if(msg.author.id !== '532294395655880705') {
        return msg.channel.send('Only special peoples can use this command :3')
    }

    if(msg.content.includes('token')) {
        return msg.channel.send('Se quer me fuder me come logo maluco')
    }

    try {
        let nylindao = args.join(" ");
        let nytotoso = eval(nylindao);
        let type = typeof nytotoso

        if (typeof nytotoso !== 'string')
            nytotoso = require('util').inspect(nytotoso, { depth: 0 });
        let embed = new Discord.RichEmbed()
        .setColor('#207ddf')
        .setTitle('<:sucesso:572239323165098005> Success')
        .setDescription(`<:seta:563082385558732800> **Returns a**
        \`\`\` ${type} \`\`\`
        <:sucesso:572239323165098005> **Result**
        \`\`\` ${nytotoso} \`\`\``)

  msg.channel.send(embed)

    } catch(e) {
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('Erro', `\`\`\` ${e} \`\`\``)

        msg.channel.send(embed)

    }

    }


module.exports.config = {
    name: "eval",
    aliases: ["debug"]
}

module.exports.help = {
    name: "eval",
    aliases: ["debug"],
    usage: `[p]eval **[\`Eval: Javascript filter\`]**`,
    descriptionEN: 'Debug something so you can see its informations (Ashina Owner Only)',
    descriptionPT: 'Debuga algo e veja os resultados do script (Dono da Ashina somente)'
}