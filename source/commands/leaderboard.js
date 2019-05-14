const Discord = require('discord.js')
const config = require('../config.json');
const emojis = require('../emojis.json')

module.exports.run = async (client, msg, args, database, dataGuild) => {

    const array = []

    database.collection('users').where('money', '>', 0).get().then((dataUser) => {
        dataUser.forEach(doc => {
            array.push({'id': doc.id, 'money': doc.data().money})
        })

        array.sort((b, a) => a.money - b.money)
        const leaderboard = array.slice(0, 10)

        client.fetchUser(array[0].id).then(member => {
            client.fetchUser(array[1].id).then(firstMember => {
            client.fetchUser(array[2].id).then(secondMember => {
                client.fetchUser(array[3].id).then(thirdMember => {
                    client.fetchUser(array[4].id).then(fourthMember => {
                        client.fetchUser(array[5].id).then(fifthMember => {
                            client.fetchUser(array[6].id).then(sixthMember => {
                                client.fetchUser(array[7].id).then(seventhMember => {
                                    client.fetchUser(array[8].id).then(eightMember => {
                                        client.fetchUser(array[9].id).then(ninethMember => {
                                            client.fetchUser(array[10].id).then(lastMember => {

                                                const embed = new Discord.RichEmbed()
                                                .setTitle('<:leaderboard:575772304529817629> Leaderboard')
                                                .setColor('#007fc7')
                                                .setDescription(`
                                                🥇 \`|\` **${member.username} -** \`${array[0].money} coins\`
                                                🥈 \`|\` **${firstMember.username} -** \`${array[1].money} coins\` 
                                                🥉 \`|\` **${secondMember.username} -** \`${array[2].money} coins\`
                                                🏅 \`|\` **${thirdMember.username} -** \`${array[3].money} coins\`
                                                🏅 \`|\` **${fourthMember.username} -** \`${array[4].money} coins\`
                                                🏅 \`|\` **${fifthMember.username} -** \`${array[5].money} coins\`
                                                🏅 \`|\` **${sixthMember.username} -** \`${array[6].money} coins\`
                                                🏅 \`|\` **${seventhMember.username} -** \`${array[7].money} coins\`
                                                🏅 \`|\` **${eightMember.username} -** \`${array[8].money} coins\`
                                                🏅 \`|\` **${ninethMember.username} -** \`${array[9].money} coins\`
                                                🏅 \`|\` **${lastMember.username} -** \`${array[10].money} coins\``)
                                                msg.channel.send(embed)
                                            })
                                        })
                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
            })
    })
    
}


module.exports.config = {
    name: "leaderboard",
    aliases: ["top"]
}

module.exports.help = {
    name: "leaderboard",
    aliases: ["top"],
    usage: '`[p]leaderboard`',
    descriptionEN: 'See the richest players in the Ashina economy system',
    descriptionPT: 'Veja os mais ricos no sistema de economia da Ashina'
}
