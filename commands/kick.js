module.exports = {
    name: 'kick',
    description: 'Wyrzuca gracza z serwera!!',
    execute(message, args, Discord) { 
        let member = message.mentions.users.first();
        let memberTarget = message.guild.members.cache.get(member.id);
        let reason = args.slice(0).join(" ") || 'Nie podano';
        if (!member)
        {
            message.channel.send('Nie podano osoby do wyrzucenia');
            return;
        }
        try {
            memberTarget.kick({ reason: reason})
        }
        catch (e)
        {
            message.channel.send('Bot nie może wyrzucić tej osoby');
            return;
        }
        let newEmbed = new Discord.MessageEmbed()
        .setColor('#8282FF')
        .addField('Osoba wyrzucona', `${member.name, member.tag}`)
        .addField('Powód wyrzucenia', reason)
        .addField('Admin', '<@'+message.author.id+'>')
        .setTitle('Pomyślnie wyrzucono gracza z serwera!')
        .setDescription(`Wyrzucono użytkownika ${member.name, member.tag}`)
        .setFooter(message.member.displayName,  message.author.displayAvatarURL({ dynamic: true }))

        message.channel.send(newEmbed);
        message.delete();
    },
};