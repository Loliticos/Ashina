const Discord = require('discord.js');
const client = new Discord.Client({disableEveryone: true});
const config = require('./config.json');
const fs = require('fs')

const serviceAccount = require('./serviceAccount.json')

const admin = require('firebase-admin')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

client.commands = new Discord.Collection()
client.aliases = new Discord.Collection
client.help = new Discord.Collection

fs.readdir("./eventos/", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
      const event = require(`./eventos/${file}`);
      let eventName = file.split(".")[0];
      client.on(eventName, event.bind(null, client));
  });
});

fs.readdir('./commands/', (err, files) => {

    if(err) console.log(err)

    let jsfile = files.filter(f => f.split('.').pop() === 'js')
    if(jsfile.length <= 0) {
        return console.log('[Comandos] Não consegui encontrar comandos')
    }

    jsfile.forEach((f, i) => {
        let pull = require(`./commands/${f}`)
        client.commands.set(pull.config.name, pull)
        pull.config.aliases.forEach(alias => {
            client.aliases.set(alias, pull.config.name)
        })
    })
})

client.login(config.token) // Liga o bot
