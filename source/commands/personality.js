
const Discord = require('discord.js')

  module.exports.run = async (client, msg, args, database) => {

    database.collection('guilds').doc(msg.guild.id).get().then((dataGuild) => {
      const language = dataGuild.data().language

      if(language === 'pt-br') {
        const types = ['Psicopata', 'Depressivo', 'Carinhoso', 'Burro', 'Escuro', 'Elegante', 'Bonito', 'Feio', 'Inteligente', 'Otaku', 'Legal', 'Engraçado', 'Inseguro', 'Sozinho', 'Otimista', 'Bravo', 'Sonhador', 'Sexy', 'Gostoso', 'Delicia', 'Corno', 'Pensativo', 'Iludido', 'Bipolar'];
        const relationships = ['Solteiro', 'Casado', 'Ficando', 'Sozinho para sempre 😖'];
        const hobbys = ['Jogar', 'Ir no banheiro fazer coisas 😈', 'Matar pessoas', 'Iludir pessoas', 'Jogar pessoas de prédio', 'Comer', 'Dormir', 'Se apaixonar por pessoas', 'Se apaixonar fácil', 'Ser iludido', 'Pensar Demais'];
        const genres = ['Maconha', 'Cocaína', 'Sangue', 'Hamburguer', 'Animais', 'Drogas', 'Fumar', 'Jogar Free-Fire', 'Jogos', 'Ser iludido', 'Vampiros', 'Jogar Fortnite'];

        const type = types[Math.floor(Math.random()*types.length)];
        const relationship = relationships[Math.floor(Math.random()*relationships.length)];
        const hobby = hobbys[Math.floor(Math.random()*hobbys.length)];
        const genre = genres[Math.floor(Math.random()*genres.length)];

    	const member = msg.mentions.users.first() || client.users.get(args.join(' ')) || msg.author

      const embed = new Discord.RichEmbed()

      .setTitle('🙍 Personalidades')
      .setColor('#007fc7')
      .setAuthor(`Personalidades de ${member.username}`, member.user.displayAvatarURL)
      .addField(`<:GoodMorning:568793813162786819> ${member.username} é`, `\`${type}\``)
      .addField(`<:amor:556931468119769119> ${member.username} está atualmente`, `\`${relationship}\``)
      .addField(`🏌 O hobby de ${member.username} é`, `\`${hobby}\``)
      .addField(`🍔 ${member.username} gosta de`, `\`${genre}\``)
      .setTimestamp()
      .setFooter(`🔎 Personalidades solicitadas por ${msg.author.username}`, msg.author.displayAvatarURL)
      msg.channel.send(embed)


      } else {

        const types = ['Psychopath', 'Depressive', 'Affectionate', 'Dumb', 'Dark', 'Elegant', 'Pretty', 'Dumb', 'Smart', 'Otaku', 'Cool', 'Funny', 'Unsafe', 'Alone', 'Optimistic', 'Angry', 'Dreamer', 'Sexy', 'Hot', 'Delicious', 'Horn', 'Thoughtful', 'Deceived', 'Bipolar'];
        const relationships = ['Not married', 'Married', 'Staying', 'Alone Forever 😖'];
        const hobbys = ['Play', 'Go on bathroom do things 😈', 'Kill peoples', 'Deceive peoples', 'Playing people from the buildings', 'Eat', 'Sleep', 'Fall in love with peoples', 'Fall in love easily', 'Be deceived', 'Think too much'];
        const genres = ['Marijuana', 'Cocaine', 'Blood', 'Hamburger', 'Animals', 'Drugs', 'Smoke', 'Play Free-Fire', 'Games', 'Be Deceived', 'Vampires', 'Play Fortnite'];

        const type = types[Math.floor(Math.random()*types.length)];
        const relationship = relationships[Math.floor(Math.random()*relationships.length)];
        const hobby = hobbys[Math.floor(Math.random()*hobbys.length)];
        const genre = genres[Math.floor(Math.random()*genres.length)];

    	const member = msg.mentions.users.first() || client.users.get(args.join(' ')) || msg.author

      const embed = new Discord.RichEmbed()

      .setTitle('🙍 Personalitys')
      .setColor('#007fc7')
      .setAuthor(`Personalitys of ${member.username}`, member.user.displayAvatarURL)
      .addField(`<:GoodMorning:568793813162786819> ${member.username} is`, `\`${type}\``)
      .addField(`<:amor:556931468119769119> ${member.username} is actually`, `\`${relationship}\``)
      .addField(`🏌 he hooby of ${member.username} is`, `\`${hobby}\``)
      .addField(`🍔 ${member.username} likes`, `\`${genre}\``)
      .setTimestamp()
      .setFooter(`🔎 Personalidades solicitadas por ${msg.author.username}`, msg.author.displayAvatarURL)
      msg.channel.send(embed)


      }
    })
}


module.exports.config = {
    name: "personality",
    aliases: ["personalidade", "personalidades"]
}

module.exports.help = {
    name: "personality",
    aliases: ["personalidade", "personalidades"],
    usage: `[p]personality **[\`Member: Guild Member\`]**`,
    descriptionEN: 'See your personalitys or from someone else',
    descriptionPT: 'Veja as suas personalidades ou de outra pessoa'
}
