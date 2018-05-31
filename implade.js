const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('using Implactor vIR-1.2.4.1', {type: 'STREAMING'});
});

client.on('message', async message => {
    if (message.author.bot) return;

    if (message.content === '$help') {
      let helpembed = new Discord.RichEmbed()
      .setTitle('- ImpladeBot | Commands -')
      .setDescription('Some of commands only available by adding with Zadezter!')
      .addField('$help', 'ImpladeBot command list!')
      .addField('$find', 'Check our websites!')
      .addField('$dcinvite', 'Join our developer team on Discord server!')
      .addField('$serverenemy', 'List of our current enemy!')
      .addField('$picture', 'Take your picture from your Discord profile!')
      .addField('$implactor', 'Implactor - Pocketmine-MP plugin!')
      .addField('$botinfo', 'See this bot about infomations!')
      .addField('$imc', 'ImpladeMC Discord Server. Minecraft BE or Win10 players can join!')
      .addField('$friends', 'Zadezter with his friends list in command!')
      .addField('$enemies', 'Zadezter with his enemies list in command!')
      .setColor('RANDOM')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(helpembed);
    };

    if (message.content === '$implactor') {
      let implactorembed = new Discord.RichEmbed()
      .setTitle('Implactor - Pocketmine-MP plugin')
      .setDescription('A plugin with having some features for Minecraft: Bedrock')
      .setColor('#FFFF00')
      .addField('GitHub', 'https://github.com/ImpladeDeveloped/Implactor')
      .addField('Download via Poggit', 'https://poggit.pmmp.io/ci/ImpladeDeveloped/Implactor')
      return message.channel.send(implactorembed);
    };

    if (message.content === '$find') {
      let findembed = new Discord.RichEmbed()
      .setTitle('Check our latest updates in these websites!')
      .addField('YouTube', 'https://www.youtube.com/channel/UCZXM-i2izX8DfIx8_Lel0Cg')
      .addField('Twitter', 'Im not ready!')
      .addField('Website', 'http://ImpladeDeveloped.github.io')
      .setColor('#FFFF00')
      return message.channel.send(findembed);
    };

    if (message.content === '$botinfo') {
      let botinfoembed = new Discord.RichEmbed()
      .setTitle('ImpladeBot - Info')
      .setDescription('All of these version and status is on our information!')
      .addField('Version', 'IR-3.1')
      .addField('This server is running on', 'Heroku')
      .addField('Bot was created on', '6 May 2018')
      return message.channel.send(botinfoembed);
    };

    if (message.content === '$serverenemy') {
      let serverenemyembed = new Discord.RichEmbed()
      .setTitle('[ Enemy ]')
      .setDescription('This is our enemies list were put in here!')
      .addField('ZythronPE - Multi-games server', 'Active in 2017 - 2018')
      .addField('29 May 2018 - present', 'BeckenPlayZMCPE as a creator of ZythronPE server are now enemies against with the leader of ImpladeDeveloped team and founder of ImpladeMC, it is Zadezter! Also, Rampage is also known as Elctrokid9182_YT or Elctro. He is rival of Zadezter. In August 2017, he raided MCGenotix for ZythronPE for some false reason, he said, "you are suck so stop taking our staff"')
      .setColor('#808000')
      .setFooter(`Requested by ${message.author.tag}`)
      return message.channel.send(serverenemyembed);
    };

    if (message.content === '$github') {
      let githubembed = new Discord.RichEmbed()
      .setTitle('ImpladeDeveloped - Github Team')
      .addField('Click here to see our codes!', 'https://github.com/ImpladeDeveloped')
      .setDescription('We made some source codes for PHP and JS. Check it our repositories now!')
      .setColor('#000000')
      return message.channel.send(githubembed);
    };

    if (message.content === '$dcinvite') {
      let dcinviteembed = new Discord.RichEmbed()
      .setTitle('ImpladeDeveloped - Discord Server Team')
      .addField('Click here to join!', 'https://discord.gg/V8UhE9b')
      .setDescription('This is our developer team server which coding a Pocketmine-MP PHP plugin and Discord bot basic with JS code!')
      return message.channel.send(dcinviteembed);
    };
    
   if (message.content === '$picture') {
     let pictureembed = new Discord.RichEmbed()
     .setTitle('Heyo, this is your profile picture?')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL + "?size=2048") 
     .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(pictureembed)
   };
   
   if (message.content === '$imc') {
      let imcembed = new Discord.RichEmbed()
      .setTitle('ImpladeMC - MC:BE Discord Server')
      .addField('Click here to join our MC:BE server!', 'https://discord.gg/DsKz9Za')
      .setDescription('A some kind of faction mode! Better than ZythronPE!')
      return message.channel.send(imcembed);
    };   
    
    if (message.content === '$friends') {
      let friendsembed = new Discord.RichEmbed()
      .setTitle('[ Friends on Implade ]')
      .setDescription('This is some of people who is Zadezter`s friends on the list!')
      .addField('---=_=---', 'MrLukePotatoes, JustyGamer45, TheMaskGuy11, WolfKid20044, DarkHyperCraft[Indo], MangoTheDev, Poofy, DarkPrinceHQ, xXLloydPlayZMCXx, YourAScrubMate, haKingdomsCraft, ItzFlqmee')
      return message.channel.send(friendsembed);
    };   
    
    if (message.content === '$enemies') {
      let enemiesembed = new Discord.RichEmbed()
      .setTitle('[ Enemies on Implade ]')
      .setDescription('This is some of people who is Zadezter`s victim or enemy on the list!')
      .addField('A staff of ZythronPE, is currently in nonsense war against ImpladeMC!', 'BeckenPlayZMCPE, TheStormFlame, iRampage22, shawngillett, MuralFive5')
      .addField('Other enemies', 'hung')
      return message.channel.send(enemiesembed);
    };
});

client.login(process.env.BOT_TOKEN);
