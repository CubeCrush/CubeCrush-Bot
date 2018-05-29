const Discord = require('discord.js');
const superagent = require('superagent');
const client = new Discord.Client();
const config = require('./config.json');

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('using Implactor vIR-1.2.2', {type: 'PLAYING'});
    console.log('Heyo, bot!');
});

client.on('message', async message => {
    if (message.author.bot) return;
    let prefix = config.prefix;

    if (message.content === prefix + 'help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('- ImpladeBot | Commands -')
      .setDescription('Some of commands only available by adding with Zadezter!')
      .addField('/help', 'ImpladeBot command list!')
      .addField('/find', 'Check our websites!')
      .addField('dcinvite', 'Join our developer team on Discord server!')
      .addField('/serverenemy', 'List of our current enemy!')
      .addField('/picture', 'Take your picture from your Discord profile!')
      .addField('/implactor', 'View the New Updates that have bene made to the Bot!')
      .addField('/botinfo', 'VIEW Bof Information and Versions')
      .addField('/imc', 'ImpladeMC Discord Server. Minecraft BE or Win10 players can join!')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
    }

    if (message.content === prefix + 'implactor') {
      let implactorembed = new Discord.RichEmbed()
      .setTitle('Implactor - Pocketmine-MP plugin')
      .setDescription('A plugin with having some features for Minecraft: Bedrock')
      .setColor('#FFFF00')
      .addField('GitHub', 'https://github.com/ImpladeDeveloped')
      .addField('Download via Poggit', 'https://poggit.pmmp.io/ci/ImpladeDeveloped/Implactor')
      return message.channel.send(implactorembed);
    }

    if (message.content === prefix + 'find') {
      let findembed = new Discord.RichEmbed()
      .setTitle('Check our latest updates in these websites!')
      .addField('YouTube', 'https://www.youtube.com/channel/UCZXM-i2izX8DfIx8_Lel0Cg')
      .addField('Twitter', 'Im not ready!')
      .addField('Website', 'ImpladeDeveloped.github.io')
      .setColor('#FFFF00')
      return message.channel.send(findembed);
    }

    if (message.content === prefix + 'botinfo') {
      let botinfoembed = new Discord.RichEmbed()
      .setTitle('ImpladeBot - Info')
      .setDescription('All of these version and status is on our information!')
      .addField('Version', 'IR-3.1')
      .addField('This server is running on Heroku')
      .setImage(bot.user.avatarURL)
      .addField('Bot was created on', bot.user.createdAt)
      .addField('Bot name', bot.user.username)
      return message.channel.send(botinfoembed);
    }

    if (message.content === prefix + 'serverenemy') {
      let serverenemyembed = new Discord.RichEmbed()
      .setTitle('?[ Enemy ]?')
      .setDescription('This is our enemies list were put in here!')
      .addField('ZythronPE')
      .addField('In 29 May 2018, BeckenPlayZMCPE, creator of ZythronPE is now enemies with Zadezter, founder of ImpladeMC!')
      .setColor('#808000')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(serverenemyembed);
    }

    if (message.content === prefix + 'github') {
      let githubembed = new Discord.RichEmbed()
      .setTitle('ImpladeDeveloped - Github Team')
      .setURL('https://github.com/ImpladeDeveloped/')
      .setDescription('We made some source codes for PHP and JS. Check it our repositories now!')
      .setColor('#000000')
      return message.channel.send(githubembed);
    }

    if (message.content === prefix + 'dcinvite') {
      let dcinviteembed = new Discord.RichEmbed()
      .setTitle('ImpladeDeveloped - Discord Server Team')
      .setURL('https://discord.gg/V8UhE9b')
      .setDescription('This is our developer team server which coding a Pocketmine-MP PHP plugin and Discord bot basic with JS code!')
      return message.channel.send(dcinviteembed);
    }
    
   if (message.content === prefix + 'picture') {
     let pictureembed = new Discord.RichEmbed()
     .setTitle('Heyo, this is your profile picture!')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL + "?size=2048") 
     .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(pictureembed)
   }
   
   if (message.content === prefix + 'imc') {
      let imcembed = new Discord.RichEmbed()
      .setTitle('ImpladeMC - MC:BE Discord Server')
      .addField('N/A')
      .setDescription('Coming soon!')
      return message.channel.send(imcembed);
    }    
});

client.login(process.env.BOT_TOKEN);
