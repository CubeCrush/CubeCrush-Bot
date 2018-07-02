const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Prefix [ > ] | play.nexuspe.tk | 19130 [ECGod]', {type: 'PLAYING'});
});

client.on('message', async message => {
    if (message.author.bot) return;

    if (message.content === '>help') {
    let helpembed = new Discord.RichEmbed()
    .setTitle('- Nexus | Commands -')
    .setDescription('Prefix [ > ]')
    .addField('>avatar', 'Gets your avatar')
    .addField('>ip', 'Shows the IP and Port for Nexus')
    .addField('>socialmedia', 'Show‛s Nexus Owner’s Social Media')
    .addField('>botabout', 'Show about the Bot information!')
    .addField('>discord', 'Gives you the Nexus Discord Server Link so You can share it')
    .addField('>user', 'Checks your discord user information!')
    .setColor('RANDOM')
    .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(helpembed)
    };
    
    if (message.content === '>avatar') {
    let profileembed = new Discord.RichEmbed()
    .setTitle('Your avatar is cool.')
    .setDescription(' ')
    .setColor('RANDOM')
    .setImage(message.author.avatarURL + "?size=2048") 
    .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(profileembed)
    };
    
    if (message.content === '>ip') {
    let ipembed = new Discord.RichEmbed()
    .setTitle('CubeCrush Server IP&Port')
    .setDescription('>help for More Commands')
    .addField('IP - play.cubecrush.tk','Port - 19130')
    .setColor('RANDOM')
    .setFooter(` Requested by ${message.author.tag}`)
    return message.channel.send(ipembed)
    };
    
    if (message.content === '>user') {
    let userembed = new Discord.RichEmbed()
    .setTitle(`${message.author.tag}'s Discord User Info`)
    .setColor('RANDOM')
    .setThumbnail(client.user.avatarURL)
    .addField('Your ID:', message.author.id, true)
    .addField('Joined on:', message.member.joinedAt.toDateString(), true)
    .addField('Account Type:', message.member.user.bot ? 'Bot' : 'Personal', true)
    .setFooter(`Requested by ${message.author.tag}`)
    return message.channel.send(userembed);
    };
    
    if (message.content === '>botabout') {
    let baembed = new Discord.RichEmbed()
    .setTitle('About the Nexus Bot')
    .setDescription(' ')
    .addField('Made by MrLukePotatoes', '^_^')
    .addField('Version', 'NN-0.1')
    .setThumbnail(client.user.avatarURL)
    .addField('Created on:', client.user.createdAt)
    .addField('Bot name:', client.user.username)
    .setColor('RANDOM')
    .setFooter(` Requested by ${message.author.tag}`)
    return message.channel.send(baembed)
    };
    
    if (message.content === '>ip') {
    let ipembed = new Discord.RichEmbed()
    .setTitle('Nexus Server IP & PORT')
    .setDescription('>help for more commands')
    .addField('IP', 'play.nexuspe.tk')
    .addField('PORT', '19130')
    .setColor('RANDOM')
    .setFooter(` Requested by ${message.author.tag}`)
    return message.channel.send(ipembed)
    };
    
    if (message.content === '>discord') {
    let dcembed = new Discord.RichEmbed()
    .setTitle('Nexus Discord Link')
    .setDescription('Share VVVVV')
    .addField('-', 'https://discord.gg/7NQRC4N')
    .setColor('RANDOM')
    .setFooter(` Requested by ${message.author.tag}`)
    return message.channel.send(dcembed)
    };
});

client.login(process.env.BOT_TOKEN);
