const { MessageEmbed } = require("discord.js");

module.exports = {
    name: 'userinfo',
    description: 'Podaje informacje na temat użytkownika',
    async execute(message, args, Discord, client) {
        const userTarget = message.mentions.users.first() || message.author;
        const memberTarget = message.guild.members.cache.get(userTarget.id);

        let toBot;
        if(userTarget.bot) toBot = 'Tak';
        else toBot = 'Nie';

        const embed = new MessageEmbed()
        .setColor('RED')
        .setAuthor(`Informacje o ${userTarget.username}`, userTarget.displayAvatarURL({ dynamic: true }))
        .addFields(
            { name: 'Nazwa discord i nick serwerowy: ', value: `${userTarget.tag} | ${memberTarget.nickname}` },
            { name: 'ID: ', value: `${userTarget.id}` },
            { name: 'Czy jest botem: ', value: toBot },
            { name: 'Założył konto: ', value: new Date(userTarget.createdTimestamp).toLocaleDateString() },
            { name: 'Dołączył na serwer: ', value: new Date(memberTarget.joinedTimestamp).toLocaleDateString() },
            { name: 'Ilość ról: ', value:  memberTarget.roles.cache.size}
        );
        message.channel.send(embed);
    }
};