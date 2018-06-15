const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('on play.cubecrush.tk:19130', {type: 'PLAYING'});
});

client.on('message', async message => {
    if (message.author.bot) return;

    if (message.content === '>help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('- CubeCrush Bot | Commands -')
      .setDescription('Prefix [ > ]')
      .addField('>avatar - Gets your avatar ')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
    };
    
   if (message.content === '>avatar') {
     let profileembed = new Discord.RichEmbed()
     .setTitle('${message.author.tag} Your avatar is cool.')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL + "?size=2048") 
     .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(profileembed)
    };
});

client.login(process.env.BOT_TOKEN);
