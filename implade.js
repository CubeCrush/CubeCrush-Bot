const Discord = require('discord.js');
const config = require("./config.json");
const client = new Discord.Client();

client.on('ready', () => {
    client.user.setStatus('dnd');
    client.user.setActivity('for games!', {type: 'STREAMING'});
});

client.on('message', async msg => {
    if(msg.author.bot) return;
    if(msg.channel.type === "dm") return;

  let prefix = config.prefix;
  let msgArray = msg.content.split("");
  let cmd = msgArray[0];
  let args = msgArray.slice(1);
    
    if (msg.content === '$help') {
    	msg.channel.send('**__Commands List__** ```[ $server | $info | $ghostview | $help | $github ]``````[ $version | $botinfo | $serverinfo ]```');
    } else
        if (msg.content === 'Zade') {
    	msg.channel.send('You called him. Please tell, what do you want to talk about?');
    } else
        if (msg.content === '$ghostview') {
    	msg.channel.send('**Download the latest plugins builds on Poggit at:** __http://poggit.pmmp.io/ci/Zadezter/GhostView__``` Poggit ¡ | Github ! ```**Check all source code what is made by Zadezter on Github at:** __http://github.com/Zadezter/GhostView__');
    } else
        if (msg.content === '$server') {
    	msg.channel.send('**This is the ZythronPE server! Come and play if you have a time!** ```IP: play.zythronpe.ml | Port: 19132```');
    } else
        if (msg.content === '$info') {
    	msg.channel.send('**This bot was created on 6 May 2018 by using code with Discord.js!** [Owner: __Zadezter#0207__]');
    } else
        if (msg.content === '$version') {
        msg.channel.send('**This bot is running a language code** __discord.js__ **on version IB-1.3 with using a Heroku Server Hosting 24/7!**');
    } else
      if(cmd === `${prefix}serverinfo`){
          
    let sicon = msg.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", msg.guild.name)
    .addField("Created On", msg.guild.createdAt)
    .addField("You Joined", msg.member.joinedAt)
    .addField("Total Members", msg.guild.memberCount);
    return msg.channel.send(serverembed);
  } else
      
  if(cmd === `${prefix}botinfo`){

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt);
    return msg.channel.send(botembed);
  }

});

client.login(process.env.BOT_TOKEN);
