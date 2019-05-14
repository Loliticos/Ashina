const Discord = require('discord.js')
const config = require('../config.json');
const fs = require('fs')

module.exports.run = async (client, msg, args, database) => {

    if(msg.author.id !== '532294395655880705') {
        return msg.channel.send('Only special peoples can use this command :3')
    }

    if(!args[0]) {
        return msg.channel.send('Digite um comando para eu mostrar seu conteúdo')
    }

    try {
        fs.readFile(`./${args[0]}`, 'utf8', (err, data) => {

    if(data.length >= 2000) {

        const buffer = fs.readFileSync(`./${args[0]}`)

        const attachment = new Discord.Attachment(buffer, `${args[0]}`);

        msg.member.send(attachment)
        return msg.channel.send('Enviei o comando no seu privado')
    }

    if (err) msg.channel.send(err)
        msg.member.send(`\`\`\` ${data} \`\`\``);
        return msg.channel.send('Enviei o comando no seu privado')

        });

    } catch(e) {
        let embed = new Discord.RichEmbed()
        .setColor('#ff0000')
        .addField('Erro', `\`\`\` ${e} \`\`\``)

        msg.channel.send(embed)

    }

    }


module.exports.config = {
    name: "opencmd",
    aliases: ["abrircmd"]
}

module.exports.help = {
    name: "opencmd",
    aliases: ["abrircmd"],
    usage: `[p]opencmd **[\`File: String\`]**`,
    descriptionEN: 'Open the solicited command (Ashina Owner Only)',
    descriptionPT: 'Abra o comando solicitado (Dono da Ashina somente)'
}
