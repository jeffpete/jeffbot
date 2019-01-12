const http = require('http');
const express = require('express');
const app = express();
app.get("/", (request, response) => {
  console.log(Date.now() + " Ping Received");
  response.sendStatus(200);
});
app.listen(process.env.PORT);
setInterval(() => {
  http.get(`http://${process.env.PROJECT_DOMAIN}.glitch.me/`);
}, 280000);

function userInfo(user, message) {
}
  
const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new commando.Client();
const client = new Discord.Client();

// get admin commands from other file
const adminCmds = require('./com.js');

// set message listener 
client.on('message', message => {
    let command = message.content;

    // execute admin commands
    // -> if function checkAdminCmd returns false, move on to checking 'other' commands
    if ( adminCmds.checkAdminCmd(message) )
        return;

    // execute other commands
    else {
        switch(command) {
            case '?PING':
                message.reply('pong');
                break;

            // ... other commands here
        }
    }
});

client.on('ready',() => {
  console.log('I\'m Online\nI\'m Online');
});
     
client.on('ready',() => {
client.user.setActivity('at Ram Ranch | bjeff help for help');
});

const fs = require("fs");

       

const prefix = '~';
client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + 'bjeff leave')) {
    message.channel.sendMessage('pong');
  }
});

client.login(process.env.TOKEN);



client .on('message', (message) => {
  if(message.content == 'bjeff haha') {
   var number = 4;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.sendMessage ('https://i.imgur.com/3XnnaTE.png'); break;
        case 2: message.channel.sendMessage ('https://i.imgur.com/KI4WnZT.jpg'); break;
      case 3: message.channel.sendMessage ('https://i.imgur.com/x6fJIJp.jpg'); break;
      case 4: message.channel.sendMessage ('https://i.imgur.com/3eX6PCU.jpg'); break;
                  }
  }
});



client.on('message', (message) => {
  if(message.content == 'bjeff ridegasm') {
    message.channel.sendMessage('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
  }
});

client.on('message', (message) => {
  if(message.content == 'bjeff ridegasm') {
    message.channel.sendMessage('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
  message.channel.sendMessage('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
    message.channel.sendMessage('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
    message.channel.sendMessage('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
    message.channel.sendMessage('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
    message.channel.sendMessage('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
    }
});



client .on('message', (message) => {
  if(message.content == 'no u') {
   var number = 4;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.sendMessage ('that is a really bad comeback'); break;
        case 2: message.channel.sendMessage ('*laughing hysterically'); break;
      case 3: message.channel.sendMessage ('wowee good one'); break;
      case 4: message.channel.sendMessage ('nobody has used that one before'); break;
                  }
  }
});

client .on('message', (message) => {
  if(message.content == '\:no_u:') {
   var number = 5;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.sendMessage ('shit emote'); break;
        case 2: message.channel.sendMessage ('get original pl0x'); break;
      case 3: message.channel.sendMessage ('Seriously?'); break;
      case 4: message.channel.sendMessage ('Please say you did not buy nitro for that'); break;
                  }
  }
});




let botChannel= undefined;

const joinChannel = (channel) => {
    channel.join().then(connection => {
        botChannel = channel;
        playAudio(connection, 'https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fkillsound_5bd0b.mp3?1533931339415');
    });
}

const leaveChannel = () => {
    botChannel.leave();
    botChannel = undefined;
};

const playAudio = (connection, audioUrl) => {
    const dispatcher = connection.playArbitraryInput(audioUrl);
    dispatcher.on("end", end => {
      console.log('I\'m Online\nI\'m Online');
             /* client.channels.find(`name`,`general`).send(`bjeff l`); */
      });
    
};

client.on('message', (message) => {
    if (message.content == 'bjeff yuh') {
        var channel = message.member.voiceChannel;

        if (!channel) {
            message.channel.sendMessage('You need to be in a voice channel to use this command.');
            return console.error("The channel does not exist!"); 
        }

        if (!botChannel) {
            joinChannel(channel);
        }     
    }
});


let botChannel2 = undefined;

const joinChannel2 = (channel) => {
    channel.join().then(connection => {
        botChannel2 = channel;
        playAudio2(connection, 'https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fkillsound_5bd0b.mp3?1533931339415');
    });
}

const leaveChannel2 = () => {
    botChannel2.leave();
    botChannel2 = undefined;
};

const playAudio2 = (connection, audioUrl) => {
    const dispatcher = connection.playArbitraryInput(audioUrl);
    dispatcher.on("end", end => {
            console.log('I\'m Online\nI\'m Online');
/*      client.channels.find(`name`,`general`).send(`bjeff l`); */
             });
    
};

client.on('message', (message) => {
    if (message.content == 'bjeff mystery') {
        var channel = message.member.voiceChannel;

        if (!channel) {
            message.channel.sendMessage('You need to be in a voice channel to use this command.');
            return console.error("The channel does not exist!"); 
        }

        if (!botChannel2) {
            joinChannel2(channel);
        }     
    }
});


bot.commands = new Discord.Collection();

fs.readdir("./commands/", (err, files) => {
  
   if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js");
  if(jsfile.length <= 0){
    console.log("Couldn't find commands.");
    return;
  }

  jsfile.forEach((f, i) =>{
    let props = require(`./commands/${f}`);
    console.log(`${f} loaded!`);
    bot.commands.set(props.help.name, props);
  });

});

bot.on("ready", () => {
       console.log('Bot is ready! ${bot.user.username}');
});

bot.on("message", async message => {
  if(message.author.bot) return;
  if(message.channel.type === "dm") return;
  
  let messageArray = message.content.split(/\s+/g);
  let command = messageArray[0];
  let args = messageArray.slice(1);
  
  if(!command.startswith(prefix)) return;
  
  let cmd = bot.commands.get(command.slice(prefix.length))
  if(cmd) cmd.run(bot, message, args);
});
       



client.on('message', (message) => {
  const joinChannel2 = (channel) => {
  if(message.content == 'bjeff notused') {
    message.channel.sendMessage('IT DO NO WORK WAY ROUND NO');
    botChannel = undefined;
    channel.leave(); 
  }
  }
});

client.on('message', (message) => {
      if (message.content == 'bjeff l') {
        var channel = message.member.voiceChannel;

                channel.leave(); 
            
                 
    }
});

client.on('message', (message) => {
      if (message.content == 'bjeff l') {
        var channel = message.member.voiceChannel2;

                channel.leave(); 
            
                 
    }
});

bot.on('message', function() {
    client.on('message', (message) => {
      if (message.content == '!p') {
         message.channel.send("123") (10000);
       
      }
    });
    });

client.on('message', (message) => {
  if(message.content == 'bjeff flesh') {
    client.guilds.get(461554225558585364).channels.get(481122092125913089).send("Spook!");
  }
});

   

client.on('message', (message) => {
  if(message.content == 'bjeff test2') {
client.channels.find(`name`,`welcome`).send(`Thx for invite`);
  }
});

client.on('message', (message) => {
  if(message.content == 'donkong') {
   message.channel.sendMessage('https://my.mixtape.moe/fqfnox.webm');
    }
   else if(message.content == 'kongwon') {
   message.channel.sendMessage('jeff');
    }
  else if(message.content == 'bjeff yeet') {
    message.channel.sendMessage('yote');
	}
	else if(message.content == 'bjeff yote') {
    message.channel.sendMessage('IT DO NO WORK WAY ROUND NO');
	}
  else if(message.content == 'bjeff pleeb') {
    message.channel.sendMessage('yeah, Chebureki, this bot has only existed for like 3 hours');
    }
  else if(message.content == 'bjeff help') {
    message.channel.sendMessage('https://jeffpetebothelp.glitch.me/');
    }
  else if(message.content == 'bjeff onlygamerknow') {
    message.channel.sendMessage('https://i.imgur.com/sfUhK86.jpg');
    }
  else if(message.content == 'bjeff longor') {
    message.channel.sendMessage('http://s3.crackedcdn.com/phpimages/article/7/5/0/23750.jpg?v=1');
    }
  else if(message.content == 'bjeff leel') {
    message.channel.sendMessage('Caac fef lal heh roor feef lool caac ses');
	}
  else if(message.content == 'bjeff 6ix9ine') {
    message.channel.sendMessage('Caac fef lal heh roor feef lool caac ses');
    }
  else if(message.content == 'bjeff busting') {
    message.channel.sendMessage('https://i.imgur.com/COmBL8s.png');
	}
  else if(message.content == 'bjeff cocc') {
    message.channel.sendMessage('https://my.mixtape.moe/plfrel.mp4');
	}
  else if(message.content == 'bjeff stolenmeme') {
    message.channel.sendMessage('https://my.mixtape.moe/gfnhlh.mp4');
	}	
  else if(message.content == 'bjeff soy') {
    message.channel.sendMessage('https://my.mixtape.moe/ubrsvx.mov');
	}
  else if(message.content == 'bjeff johnny') {
    message.channel.sendMessage('https://pre00.deviantart.net/077d/th/pre/i/2016/053/f/3/dukey_in_johnny_flesh_by_applebeans-d9srwyr.png');
	}
  else if(message.content == 'bjeff peak') {
    message.channel.sendMessage('https://my.mixtape.moe/fqfnox.webm');
	}
  else if(message.content == 'bjeff callme') {
    message.channel.sendMessage('https://my.mixtape.moe/wnglhp.mp4');
	}
  else if(message.content == 'bjeff aids') {
    message.channel.sendMessage('https://my.mixtape.moe/fqfnox.webm');
   }
  else if(message.content == 'bjeff changelong') {
    message.channel.send('https://jeffpetebothelp.glitch.me/changelog.html');
  }
  else if(message.content == 'bjeff clap') {
    message.channel.send('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclap.mp4?1545053825548');
  }
  else if(message.content == 'bjeff version') {
    message.channel.send('Version is build 12012019');
  }
});
  




client .on('message', (message) => {
  if(message.content == 'bjeff roll') {
   var number = 88;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.sendMessage ('https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fbear.mp4?1537391174426'); break;
        case 2: message.channel.sendMessage ('https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fskope.mp4?1537391208068'); break;
      case 3: message.channel.sendMessage ('https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fmj.mp4?1537391127824'); break;
      case 4: message.channel.sendMessage ('https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2F19598dce7a632a6605578d2bea72feb0be286223bde0404f8d7aa60410189943_1.mp4?1537391055338'); break;
      case 5: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ffamgu.mp4?1539466780468'); break; 
        case 6: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fwindows.mp4?1537468776482'); break; 
          case 7: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fanimu.mp4?1537469274724'); break; 
          case 8: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fhorror.mp4?1537469285656'); break; 
          case 9: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fwii.mp4?1537469309903'); break; 
          case 10: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ftriangle1.mp4?1537469318509'); break; 
          case 11: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fgarfded.mp4?1537469330356'); break; 
          case 12: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ftriang2.mp4?1537469344260'); break;
        case 13: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbanepant.mp4?1537981096285'); break;
        case 14: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsoywave.mp4?1537981113050'); break;
        case 15: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsauce.mp4?1537981131773'); break;
        case 16: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fshadpalace.mp4?1537981269483'); break;
        case 17: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fglitchyman.mp4?1537981283257'); break;
        case 18: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsomemugshopbeingdestroyed.mp4?1537981300216'); break;
        case 19: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fuwu_vomit.mp4?1537981310863'); break;
        case 20: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnathandrake.mp4?1537981339605'); break;
        case 21: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fiputhisinheretoannoy.mp4?1537981367831'); break;
        case 22: message.channel.sendMessage ('I made one extra slot and I could not be asked to remove it lol so random xd'); break;
         case 23: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2F6ixxxxxxx.mp4?1539466210442'); break;
         case 24: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fckae.mp4?1539466214762'); break;
         case 25: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsnasnundetaler.mp4?1539466216699'); break;
         case 26: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fwholesomecat1.mp4?1539466217865'); break;
         case 27: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fjonbang.mp4?1539466218064'); break;
         case 28: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ftord.mp4?1539466218875'); break;
         case 29: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsmonky.mp4?1539466219449'); break;
         case 30: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsansudnertle.mp4?1539466219790'); break;
         case 31: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fcarldies.mp4?1539466221283'); break;
         case 32: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbowser.mp4?1539466221968'); break;
         case 33: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fstateit.mp4?1539466222005'); break;
        case 34: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fyoghurtmetillistopliving.mp4?1539466222074'); break;
        case 35: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbikbok.mp4?1539466936634'); break;
        case 36: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fchop.mp4?1539466946601'); break;
        case 37: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnormieloud.mp4?1539466957763'); break;
        case 38: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fhaaaaaaah.mp4?1539466966296'); break;
        case 39: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnotquitemytempo.mp4?1539466976289'); break;
        case 40: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fidkthereference.mp4?1540302780283'); break;
        case 41: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fhertpenor.mp4?1540302780439'); break;
        case 42: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fflex.mp4?1540302780655'); break;
        case 43: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbump.mp4?1540302781046'); break;
        case 44: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsansss.mp4?1540302784978'); break;
        case 45: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsansanansans.mp4?1540302787580'); break;
        case 46: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fwiwiwiwii.mp4?1540302788518'); break;
        case 47: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnumanuma.mp4?1540302789522'); break;
        case 48: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fcrust.mp4?1540302790879'); break;
        case 49: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fhell.mp4?1540302809848'); break;
        case 50: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fmanannouncesthathehadatoiletno.mp4?1541350493444'); break;
        case 51: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fdream.mp4?1541350503052'); break;
        case 52: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsaveanime.mp4?1541351028408'); break;
        case 53: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsansanssasansas.mp4?1541351030060'); break;
        case 54: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ftokofthetik.mp4?1541351030985'); break;
        case 55: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fdownwiththememe.mp4?1545053811840'); break;
        case 56: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Freactcardo.mp4?1545053812999'); break;
        case 57: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fpeppermint.mp4?1545053816574'); break;
        case 58: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fidksomeguyreferencingsomethingidontknow.mp4?1545053818346'); break;
        case 59: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbadehttih.mp4?1545053819520'); break;
        case 60: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fcar.mp4?1545053822622'); break;
        case 61: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fgondolacardo.mp4?1545053823500'); break;
        case 62: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbirdcardo.mp4?1545053824193'); break;
        case 63: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnoticeme.mp4?1545053825018'); break;
        case 64: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclap.mp4?1545053825548'); break;
        case 65: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fahememe.mp4?1545053828103'); break;
        case 66: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fledleladlelo.mp4?1545053829057'); break;
        case 67: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbanefamilyvalues.mp4?1545053834601'); break;
        case 68: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fibis.mp4?1545053836620'); break;
        case 69: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ftetris.mp4?1545231451945'); break;
        case 70: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Feaster.mp4?1545231456694'); break;
        case 71: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fweird.mp4?1545231473697'); break;
        case 72: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclownmedication.mp4?1545231484222'); break;
        case 73: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsleepclown.mp4?1545231487128'); break;
        case 74: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsit.mp4?1545231495905'); break;
        case 75: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnastyclown.mp4?1545231499410'); break;
        case 76: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclownslap.mp4?1545231501160'); break;
        case 77: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclownthotnik.mp4?1545231505771'); break;
        case 78: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclown2.mp4?1545231507820'); break;
        case 79: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclownattack.mp4?1545231510637'); break;
        case 80: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclown.mp4?1545231514685'); break;
        case 81: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fwaffle.mp4?1545231524312'); break;
        case 82: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fdogogodogdogdogdogdodogodgogodgod.mp4?1545231526614'); break;
        case 83: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ficantfindit.mp4?1545231530189'); break;
        case 84: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fmemes.mp4?1545231539994'); break;
        case 85: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbanememe.mp4?1545231543934'); break;
        case 86: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fdream.mp4?1545231551034'); break;
        case 87: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fgoodday.mp4?1545231552177'); break;
        case 88: message.channel.sendMessage ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fpeach.mp4?1545231592724'); break;
        
        
        
        /* case : message.channel.sendMessage (''); break; */
        
        
        
        
        
                  }
  }
});

/* case : message.channel.sendMessage({files: [""]}); break;  */
client .on('message', (message) => {
  if(message.content == 'bjeff fight') {
   var number = 7;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
            case 1: message.channel.sendMessage({files: ["https://i.imgur.com/tNRXz8O.png"]}); break;
      case 2: message.channel.sendMessage({files: ["https://i.imgur.com/tRGDh0N.png"]}); break;
      case 3: message.channel.sendMessage({files: ["https://i.imgur.com/0Cl2lLy.png"]}); break;
      case 4: message.channel.sendMessage({files: ["https://i.imgur.com/j6PBxul.png"]}); break;   
        case 5: message.channel.sendMessage({files: ["https://i.imgur.com/nJIEwpT.png"]}); break; 
        case 6: message.channel.sendMessage({files: ["https://i.imgur.com/wydQhXP.png"]}); break; 
        case 7: message.channel.sendMessage({files: ["https://i.imgur.com/6IMC66X.png"]}); break; 
        case 7: message.channel.sendMessage({files: ["https://i.imgur.com/IypzpfF.png"]}); break;
                  }
  }
});

client.on('message', (message) => {
  if(message.content == 'bjeff test') {
    message.channel.sendMessage('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbadehttih.mp4?1545053063540');
  }
});

client.on('message', (message) => {
  if(message.content == 'bjeff database') {
    message.channel.sendMessage('https://jeff-fight-card-database.glitch.me/');
  }
});

client.on('message', (message) => {
  if(message.content == 'bjeff fight help') {
    message.channel.sendMessage({files: ["https://cooltext.com/Rendered/Cool-Text-309521164883898.png"]});
    message.channel.sendMessage('It is like Yu-Gi-Oh mixed with Top Trumps. Whoever has the highest Jeff Power after all Jeff Abilities have been applied wins. Simple');
    message.channel.sendMessage('To find out how to make your own cards, say "bjeff custom cards" in the chat!');
    message.channel.sendMessage('Use "bjeff database" to view this anytime');
  }
});

client.on('message', (message) => {
  if(message.content == 'bjeff custom cards') {
    message.channel.sendMessage({files: ["https://cooltext.com/Rendered/Cool-Text-309521164883898.png"]});
    message.channel.sendMessage('How to make your own Jeff Fight Cards');
    message.channel.sendMessage('This website is used: https://www.mtgcardmaker.com/. A simple guide. Below is a url for existing cards to check against the card numbers.');
    message.channel.sendMessage('https://imgur.com/a/e7Ui0R0');
    message.channel.sendMessage('**************************************************************************************************************************************************************');
    message.channel.sendMessage('AFTER YOU HAVE MADE YOUR CARD, ENTER ITS NAME AND NUMBER INTO THE DATABASE. ENTERING EMPTY ENTRIES WILL RESULT IN YOUR ABILITY TO SUBMIT CARDS BEING REVOKED!')
    message.channel.sendMessage('https://jeff-fight-card-database.glitch.me/')
    message.channel.sendMessage('Use "bjeff database" to view this anytime');
    message.channel.sendMessage('**************************************************************************************************************************************************************');
    message.channel.sendMessage('SECTION GUIDES');
    message.channel.sendMessage('Card Name: Individual words must be in capital letters');
    message.channel.sendMessage('Images: Preferably people actually called Jeff, we will probably run out of those soon anyway kek');
    message.channel.sendMessage('DESCRIPTION SECTION');
    message.channel.sendMessage('Jeff Power: Must have both words capitalized and have a space after the colon (e.g. Jeff Power: 40) ');
    message.channel.sendMessage('Jeff Ability: Same rules with the colon. Must have a full stop.');
    message.channel.sendMessage('Description: Same rules with the colon. Must have a full stop. Something funny or dumb, nothing offensive.');
    message.channel.sendMessage('Bottom text: This should be "Jeff Fight"');
    message.channel.sendMessage('Collector number: For now 01/any number that is not in the imgur gallery.');
    
  }
});



client.on('message', (message) => {
  if(message.content == 'bjeff flip') {
{
      function doRandHT() {
var rand = ['HEADS','TAILS'];

return rand[Math.floor(Math.random()*rand.length)];
}

 const embed = {
"title": `Result`,
"description": doRandHT(),
"color": 7584788,
};
message.channel.send({ embed });
}
}
});
