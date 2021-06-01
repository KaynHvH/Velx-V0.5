module.exports = {
    name: 'ankieta',
    description: 'zrób ankietę!',
    async execute(message, args, Discord) {
        let Arguments = args.join(' ');
 
        let newEmbed = new Discord.MessageEmbed()
        .setColor('#FFFFFF')
        .setTitle(`🚩 Ankieta Gracza ${message.author.name, message.author.tag} 🚩`)
        .setDescription(`${message.author.name, message.author.tag} proponuje \n**${Arguments}**`)
        .setFooter('Użyj reakcji, aby zagłosować.');
 
        let messageEmbed = await message.channel.send(newEmbed);
 
        messageEmbed.react('👍');
        messageEmbed.react('👎');
        message.delete();
    }
}