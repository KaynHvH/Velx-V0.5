module.exports = {
    name: 'ping',
    description: 'Zobacz ile ms-ów ma bot!',
    execute(client, message, args, Discord) {
        message.channel.send("Obliczanie pingu...").then(messageResult => {
            const ping = messageResult.createdTimestamp - message.createdTimestamp
            let newEmbed = new Discord.MessageEmbed()
            .setColor('#0c0357')
            .setTitle('Ping bota i opóźnienie API')
            .setDescription(`Ping bota wynosi **${ping}**, a opóźnienie API **${client.ws.ping}**`)
            .setFooter(`Komenda wywołana przez ${message.author.name, message.author.tag}`)
            message.channel.send(newEmbed);
            message.delete();
        })
    }
};