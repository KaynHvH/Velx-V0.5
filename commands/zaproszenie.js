module.exports = {
    name: 'zaproszenie',
    description: 'Zaproś bota na swój serwer!',
    execute(message, args, Discord) {
        let newEmbed = new Discord.MessageEmbed()
        .setColor('#8282FF')
        .setTitle('Zaproś mnie na swój serwer Discord!')
        .setURL('https://discord.com/api/oauth2/authorize?client_id=841365833154428949&permissions=8&scope=bot')
        .setDescription('Aby zaprosić bota na swój serwer kliknij **tekst powyżej!**')
        .setFooter('Było by mi bardzo miło, gdybyś to uczynił/a!')

        message.channel.send(newEmbed);
    }
}