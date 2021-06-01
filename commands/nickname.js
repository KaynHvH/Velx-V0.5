module.exports = {
    name: "nickname",
    description: "set nickname to guild member!",
    async execute(message, args, Discord, client) {
        const userTarget = message.mentions.users.first();
        if(!userTarget) {
            let newEmbed = new Discord.MessageEmbed()
            .setColor('#8282FF')
            .setTitle('Zmiana nicku nie powiodła się')
            .setDescription('Najprawdopodobniej nie oznaczyłeś osoby której chcesz zmienić nick, więc komenda nie działa! 😫')
            .setFooter(`Komenda wywołana przez ${message.member.name, message.member.tag}`)
            message.channel.send(newEmbed);
            return;
        }

        const memberTarget = message.guild.members.cache.get(userTarget.id);

        const newNickname = args.slice(1).join(' ');
        if(!newNickname) {
            let newEmbed = new Discord.MessageEmbed()
            .setColor('#8282FF')
            .setTitle('Zmiana nicku nie powiodła się')
            .setDescription('Najprawdopodobniej nie podałeś nowego nicku, więc komenda nie działa! 😫')
            .setFooter(`Komenda wywołana przez ${message.member.name, message.member.tag}`)
            message.channel.send(newEmbed);
            return;
        }
        let newEmbed = new Discord.MessageEmbed()
        .setColor('#8282FF')
        .setTitle('Pomyślnie zmieniono nick 🍹')
        .setDescription('Zmieniono nick graczowi, którego oznaczyłeś! (～￣▽￣)～')
        .setFooter(`Komenda wywołana przez ${message.member.name, message.member.tag}`)
        message.channel.send(newEmbed);
        memberTarget.setNickname(newNickname);
    }
}