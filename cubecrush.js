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
      .setDescription('!')
      .addField('No Commands Yet')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
    };
});

client.login(process.env.BOT_TOKEN);
