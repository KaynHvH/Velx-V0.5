const Discord = require('discord.js');
require('dotenv').config();
const client = new Discord.Client();
const { token }= require('./config.js');
const prefix = "v!";
const fs = require('fs');

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync('./commands/').filter(file => file.endsWith('.js'));

client.once('ready', () => {
    console.log('Zalogowano bota!');
    client.user.setActivity('Pomoc: "v!help"', {type: 'WATCHING'});
});

for(const file of commandFiles) {
    const command = require(`./commands/${file}`);
    client.commands.set(command.name, command);
}

client.on('message', message => {
    if(!message.content.startsWith(prefix) || message.author.bot) return;

    const args = message.content.slice(prefix.length).trim().split(/ +/);
    const command = args.shift().toLowerCase();

    if(command === 'boop') {
        client.commands.get('boop').execute(message, args);
    } else if(command === 'zaproszenie') {
        client.commands.get('zaproszenie').execute(message, args, Discord);
    }
    else if(command === 'kick') {
        client.commands.get('kick').execute(message, args, Discord);
    }
    else if(command === 'ban') {
        client.commands.get('ban').execute(message, args, Discord);
    }
    else if(command === 'unban') {
        client.commands.get('unban').execute(message, args, Discord);
    }
    else if(command === 'ankieta') {
        client.commands.get('ankieta').execute(message, args, Discord);
    }
    else if(command === 'ping') {
        client.commands.get('ping').execute(client, message, args, Discord);
    }
    else if(command === 'sugestia') {
        client.commands.get('sugestia').execute(message, args, Discord);
    }
    else if(command === 'nickname') {
        client.commands.get('nickname').execute(message, args, Discord);
    }
    else if(command === 'userinfo') {
        client.commands.get('userinfo').execute(message, args, Discord);
    }
});


client.login(token);