module.exports = {
    name: 'ban',
    description: 'Banuje gracza z serwera!!',
    execute(message, args, Discord) { 
        

        let member = message.mentions.users.first();
        let memberTarget = message.guild.members.cache.get(member.id);
        let reason = args.slice(0).join(" ") || 'Nie podano';
        if (!member)
        {
            message.channel.send('Nie podano osoby do odbanowania');
            return;
        }
        try {
            memberTarget.ban({ reason: reason})
        }
        catch (e)
        {
            message.channel.send('Bot nie może zbanować tej osoby');
            return;
        }
        let newEmbed = new Discord.MessageEmbed()
        .setColor('#8282FF')
        .addField('Osoba zbanowana', `${member.name, member.tag}`)
        .addField('Powód bana', reason)
        .addField('Admin', '<@'+message.author.id+'>')
        .setTitle('Pomyślnie zbanowano gracza z serwera!')
        .setDescription(`Zbanowano użytkownika ${member.name, member.tag}`)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(newEmbed);
        message.delete();
    },
};