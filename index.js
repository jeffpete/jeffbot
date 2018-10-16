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
  else if(message.content == 'bjeff version') {
    message.channel.send('Version is build 13102018');
  }
});
  




client .on('message', (message) => {
  if(message.content == 'bjeff roll') {
   var number = 39;
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
        
        
        
        
        
                  }
  }
});

client.on('message', (message) => {
  if(message.content == 'bjeff test') {
    message.channel.sendMessage('https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fskope.mp4?1537391208068');
  }
});


