const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('Prefix [ > ] | play.cubecrush.tk:19130', {type: 'PLAYING'});
});

client.on('message', async message => {
    if (message.author.bot) return;

    if (message.content === '>help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('- CubeCrush Bot | Commands -')
      .setDescription('Prefix [ > ]')
      .addField('>avatar - Gets your avatar ')
      .addField('>ip - Shows the IP and Port for CubeCrush ')
      .addField('>socialmedia - Show‛s CubeCrush Owner’s Social Media')
      .addField('>botabout - Show`s About the Bot')
      .addField('>membercount - Tells how many players are in this server')
      .addField('>channelcount - Tells how many channels are in this server')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
    };
    
    if (message.content === '>avatar') {
     let profileembed = new Discord.RichEmbed()
     .setTitle('Your avatar is cool.')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL + "?size=2048") 
     .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(profileembed)
    };
    
    if (message.content === '>ip') {
     let ipembed = new Discord.RichEmbed()
     .setTitle('CubeCrush Server IP&Port')
     .setDescription('>help for More Commands')
     .addField('IP - play.cubecrush.tk')
     .addField('PORT - 19130')
     .setColor('RANDOM')
     .setFooter(` Requested by ${message.author.tag}`)
     return message.channel.send(ipembed)
    };
    
    if (message.content === '>socialmedia') {
    let socialmediaembed = new Discord.RichEmbed()
    .setTitle('CubeCrush`s Owner [ MrCubeCraft ] Social Media')
    .setDescription('>help for More Commands')
    .addField('YouTube - https://youtube.com/MrCubeCraft ')
    .addField('Twitter - https://bit.ly/TW-CUBY')
    .addField('Google+ - https://bit.ly/GP-CUBY')
    .addField('MrCubeCraft`s Website - https://bit.ly/cube-blog')
    .setColor('RANDOM')
    .setFooter(` Requested by ${message.author.tag}`)
    return message.channel.send(socialmediaembed)
    };
    
    if (message.content === '>botabout') {
    let botaboutembed = new Discord.RichEmbed()
    .setTitle('About CubeCrush`s Bot')
    .setDescription('>help for More Commands')
    .addField('Bot was created on 6/15/18')
    .addField('Bot was hosted on Heroku')
    .addField('MrLukePotatoes created the bot')
    .addField('Bot made using JavaScript')
    .setColor('RANDOM')
    .setFooter(` Requested by ${message.author.tag}`)
    return message.channel.send(botaboutembed)
    };
    
    if (message.content === '>membercount') {
    let membercountembed = new Discord.RichEmbed()
    .setTitle('CubeCrush Discord Server`s Member Count')
    .setDescription('How many Players are here?')
    .addField('There are ${client.users.size} Users in the CubeCrush Discord Server')
    .setColor('RANDOM')
    .setFooter(` Requested by $message.author.tag}`)
    return message.channel.send(membercountembed)
    };
    
    if (message.content === '>channelcount') {
    let channelcountembed = new Discord.RichEmbed()
    .setTitle('CubeCrush Discord Server`s Channel Count')
    .setDescription('How many channels are here?')
    .addField('There are ${client.channels.size} channels in the CubeCrush Discird Server')
    .setColor('RANDOM')
    .setFooter(` Requested by $message.author.tag}`)
    return message.channel.send(channelcountembed)
    };
});

client.login(process.env.BOT_TOKEN);
