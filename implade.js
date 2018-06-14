const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('with Implactor = vIR-1.2.7', {type: 'PLAYING'});
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
      .addField('Version', 'IR-3.3')
      .addField('This server is running on', 'Heroku Services')
      .addField('Bot was created on', '6 May 2018')
      return message.channel.send(botinfoembed);
    };

    if (message.content === '$github') {
      let githubembed = new Discord.RichEmbed()
      .setTitle('ImpladeDeveloped - Github Team')
      .addField('Click here to see our codes!', 'https://github.com/ImpladeDeveloped')
      .setDescription('We made some source codes for PHP and JS. Check it our repositories now! You guys know we`re little coders!')
      .setColor('#000000')
      return message.channel.send(githubembed);
    };

    if (message.content === '$dcinvite') {
      let dcinviteembed = new Discord.RichEmbed()
      .setTitle('ImpladeDeveloped - Discord Server Team')
      .addField('Click here to join!', 'https://discord.gg/V8UhE9b')
      .setDescription('This is our developer team server, which coding a Pocketmine-MP PHP plugin but still learn, and Discord bot basic with JS code!')
      return message.channel.send(dcinviteembed);
    };
    
   if (message.content === '$picture') {
     let pictureembed = new Discord.RichEmbed()
     .setTitle('Heyo, this is your profile picture? Looks cool.')
     .setColor('RANDOM')
     .setImage(message.author.avatarURL + "?size=2048") 
     .setFooter(`Requested by ${message.author.tag}`)
     return message.channel.send(pictureembed)
   };
   
   if (message.content === '$imc') {
      let imcembed = new Discord.RichEmbed()
      .setTitle('ImpladeMC - MC:BE Discord Server')
      .addField('Click here to join our MC:BE server!', 'https://discord.gg/Fn9et4b')
      .setDescription('This is a faction server which having some cool gameplay! (Not confirmed because it wasn`t released yet)')
      return message.channel.send(imcembed);
    };   
    
    if (message.content === '$friends') {
      let friendsembed = new Discord.RichEmbed()
      .setTitle('[ Friends on Implade ]')
      .setDescription('This is some of people who is Zadezter`s friends on the list!')
      .addField('---=_=---', 'MrLukePotatoes, JustyGamer45, TheMaskGuy11, WolfKid20044, MangoTheDev, DarkPrinceHQ, xXLloydPlayZMCXx, YourAScrubMate, haKingdomsCraft, ItzFlqmee, apnazu, MrCubeCraft, NikosGamer666, xSentinql, XxMegaIS123xX, YassenTrick[Dev], BeckenPlayZMCPE[Little nemesis], MuralFive5, Rojanthebest123, CrazyGamer5314')
      return message.channel.send(friendsembed);
    };   
    
    if (message.content === '$enemies') {
      let enemiesembed = new Discord.RichEmbed()
      .setTitle('[ Enemies on Implade ]')
      .setDescription('This is some of people who is Zadezter`s victim or enemy on the list!')
      .addField('Other enemies', 'hung, AlligatorChicken, Corey, Rampage, DarkHyperCraft[Indo], TheStormFlame, shawngillett')
      return message.channel.send(enemiesembed);
    };
});

client.login(process.env.BOT_TOKEN);
