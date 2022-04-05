const Discord = require('discord.js');
const client = new Discord.Client();
const auth = require('./auth.json');

client.login(auth.key);

client.on('ready', () => {
    client.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
    if (msg.content === 'ping') {
        msg.reply('pong');
    }
})