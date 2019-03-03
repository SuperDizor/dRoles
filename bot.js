const Discord = require("discord.js");
const client = new Discord.Client();
const config = require("./config.json");

// Declare Roles
var roles = [
    "PC",
    "Xbox",
    "Playstation",
    "Switch",
    "iOS",
    "Android"
];

var cRed = "\x1b[31m";
var cBlue = "\x1b[34m";
var cYellow = "\x1b[33m";
var cGreen = "\x1b[32m";
var cCyan = "\x1b[36m";
var cNormal = "";
var cReset = "\x1b[0m"; // DON'T FORGET RESET FONT

function printLog(text, color) {
  if (color === undefined) color = cNormal;
  var timestamp = "[" + new Date().toLocaleTimeString('en-CA') + "] ";
  colorLog = color;
  logText = text;
  console.log(timestamp + colorLog + text + cReset);
}

function resetRole(message, member){

  var arrayLength = roles.length;
  for (var i = 0; i < arrayLength; i++) {
      //Do something
      //let roleArray = message.guild.roles.find("name", roles[i]);
      var roleArray = message.guild.roles.find(role => role.name === roles[i]);
      member.removeRole(roleArray).catch(console.error);
    }
}


client.on("ready", () => {
  const activities_list = [
      "+role for help",
      `Serving ${client.users.size} users`,
      `Only for SuperiorLounge`,
      "Created by SuperDizor"
      ];


  client.user.setStatus('idle');
  client.user.setActivity('JavaScript while starting...', {type: 'PLAYING'});
  printLog("Bot Starting...",cRed);

  setInterval(() => {
      const index = Math.floor(Math.random() * (activities_list.length - 1) + 1); // generates a random number between 1 and the length of the activities array list (in this case 5).
      client.user.setActivity(activities_list[index]); // sets bot's activities to one of the phrases in the arraylist.
  }, 10000); // Runs this every 10 seconds.


  printLog('Bot has started, with ' + client.users.size + ' users, in ' + client.channels.size + ' channels of ' + client.guilds.size + ' guilds.', cGreen);
  client.user.setStatus('online');
  //console.log('\x1b[32m%s\x1b[0m',`Bot has started, with ${client.users.size} users, in ${client.channels.size} channels of ${client.guilds.size} guilds.`);
  //client.user.setActivity(`+dColors | Serving ${client.users.size} servers`);

});

client.on("guildCreate", guild => {
  // This event triggers when the bot joins a guild.
  console.log(`New guild joined: ${guild.name} (id: ${guild.id}). This guild has ${guild.memberCount} members!`);
  client.user.setActivity(`+dColors | Serving ${client.guilds.size} servers`);
});

client.on("guildDelete", guild => {
  // this event triggers when the bot is removed from a guild.
  console.log(`I have been removed from: ${guild.name} (id: ${guild.id})`);
  client.user.setActivity(`+dColors | Serving ${client.guilds.size} servers`);
});

client.on("message", async message => {
  // Ignore bots, DMs and group messages.
  if (message.author.bot || !message.guild) return;


    // Ignore any message that does not start with our prefix,
  if (message.content.indexOf(config.prefix) !== 0) return;

  const args = message.content.slice(config.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();




  if (command === "role") {
    let role = args[0];
    let member = message.member;

    // IF ARG ARE NOT THERE
    if(!role || role === "help") {

      message.channel.send({
    "embed": {
    "title": "Thanks for using dRoles. You can use the following commands",
    "description": "\n __**Add your Discord role**__\n*Use role name instead of <role> (Check below for available roles)* \n`+role <role>`\n__**Reset Color to the default**__\n`+role reset`\n__**Other available commands**__\n`+role ping`\n`+role config (WIP)`\n",
    "color": 1472601,
    "timestamp": new Date(),
    "footer": {
      "text": "Version 0.1 - ISC License - 2019"
    },
    "thumbnail": {
      "url": "http://superdizor.com/img/dcolors.png"
    },
    "author": {
      "name": "dRoles - Discord Roles Bot",
      "icon_url": "http://superdizor.com/img/dcolors.png"
    },
    "fields": [
      {
        "name": "Roles available (LowerCase is important in this build)",
        "value": "```\npc\nxbox\nplaystation\nswitch\nios\nandroid```"
      },
      {
        "name": "You like this bot ?",
        "value": "This bot is currently exclusive for SuperiorLounge Discord but contact me if you want to talk about posibility for your Discord Server"
      },
      {
        "name": "GitHub",
        "value": "[Open Source on GitHub](https://github.com/SuperDizor/dRoles) \n*Give me constructive feedback* ",
        "inline": true
      },
      {
        "name": "Social",
        "value": "[Twitter](https://twitter.com/SuperDizor)\n",
        "inline": true
      }
    ]
  }
});




};


    // CONFIG | ADD ROLES TO SERVER
    if(role === "config") {
      message.reply(`config is currently WIP`);
    }

    // RESET COLOR TO DEFAULT
    if(role === "reset") {
      // Check if they have one of many roles
      if(message.member.roles.some(r=>roles.includes(r.name)) ) {
        resetRole(message, member);
        message.reply(`role changed to default.`);
      } else {
        // has none of the roles
        message.reply(`you have currently the default role.`);
      }
    }

    // PC
    if(role === "pc") {
      //const role = message.guild.roles.find("name", roles[0]);
      var roleArray = message.guild.roles.find(role => role.name === roles[0]);

      //resetRole(message, member);
      // Add the role & tell the user his role changed.
      member.addRole(roleArray).catch(console.error);
      message.reply(`PC added to your roles.`);
      //message.reply(`role changed for ${roleArray}.`);
    }

    // XBOX
    if(role === "xbox") {
      //const role = message.guild.roles.find("name", roles[0]);
      var roleArray = message.guild.roles.find(role => role.name === roles[1]);

      //resetRole(message, member);
      // Add the role & tell the user his role changed.
      member.addRole(roleArray).catch(console.error);
      message.reply(`Xbox added to your roles.`);
      //message.reply(`role changed for ${roleArray}.`);
    }

    // PLAYSTATION
    if(role === "playstation") {
      //const role = message.guild.roles.find("name", roles[0]);
      var roleArray = message.guild.roles.find(role => role.name === roles[2]);

      //resetRole(message, member);
      // Add the role & tell the user his role changed.
      member.addRole(roleArray).catch(console.error);
      message.reply(`Playstation added to your roles.`);
      //message.reply(`role changed for ${roleArray}.`);
    }

    // SWITCH
    if(role === "switch") {
      //const role = message.guild.roles.find("name", roles[0]);
      var roleArray = message.guild.roles.find(role => role.name === roles[3]);

      //resetRole(message, member);
      // Add the role & tell the user his role changed.
      member.addRole(roleArray).catch(console.error);
      message.reply(`Switch added to your roles.`);
      //message.reply(`role changed for ${roleArray}.`);
    }

    // IOS
    if(role === "ios") {
      //const role = message.guild.roles.find("name", roles[0]);
      var roleArray = message.guild.roles.find(role => role.name === roles[4]);

      //resetRole(message, member);
      // Add the role & tell the user his role changed.
      member.addRole(roleArray).catch(console.error);
      message.reply(`iOS added to your roles.`);
      //message.reply(`role changed for ${roleArray}.`);
    }

    // ANDROID
    if(role === "android") {
      //const role = message.guild.roles.find("name", roles[0]);
      var roleArray = message.guild.roles.find(role => role.name === roles[5]);

      //resetRole(message, member);
      // Add the role & tell the user his role changed.
      member.addRole(roleArray).catch(console.error);
      message.reply(`Android added to your roles.`);
      //message.reply(`role changed for ${roleArray}.`);
    }




    // PING
    if(role === "ping") {
      const m = await message.channel.send("Ping?");
      m.edit(`Ping isn't a role but Latency is ${m.createdTimestamp - message.createdTimestamp}ms. API Latency is ${Math.round(client.ping)}ms`);
    }
  }


});

client.login(config.token);
