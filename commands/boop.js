module.exports = {
    name: 'boop',
    description: 'Komenda beep',
    execute(message, args) {
        message.channel.send('Beep! 🤖');
    },
};