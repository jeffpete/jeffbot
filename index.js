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

// set message listener 
client.on('message', message => {
    let command = message.content;

    // 
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
    message.channel.send('pong');
  }
});

client.login(process.env.TOKEN);



client .on('message', (message) => {
  if(message.content == 'bjeff haha') {
   var number = 4;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.send ('https://i.imgur.com/3XnnaTE.png'); break;
        case 2: message.channel.send ('https://i.imgur.com/KI4WnZT.jpg'); break;
      case 3: message.channel.send ('https://i.imgur.com/x6fJIJp.jpg'); break;
      case 4: message.channel.send ('https://i.imgur.com/3eX6PCU.jpg'); break;
                  }
  }
});



client.on('message', (message) => {
  if(message.content == 'bjeff ridegasm') {
    message.channel.send('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
  }
});

client.on('message', message=> {
  if(message.content == 'bjeff test') {
    message.channel.send('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
  }
});

client.on('message', (message) => {
  if(message.content == 'bjeff ridegasm') {
    message.channel.send('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
  message.channel.send('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
    message.channel.send('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
    message.channel.send('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
    message.channel.send('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
    message.channel.send('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
    }
});



client .on('message', (message) => {
  if(message.content == 'no u') {
   var number = 4;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.send ('that is a really bad comeback'); break;
        case 2: message.channel.send ('*laughing hysterically'); break;
      case 3: message.channel.send ('wowee good one'); break;
      case 4: message.channel.send ('nobody has used that one before'); break;
                  }
  }
});

client .on('message', (message) => {
  if(message.content == 'No u') {
   var number = 4;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.send ('that is a really bad comeback'); break;
        case 2: message.channel.send ('*laughing hysterically'); break;
      case 3: message.channel.send ('wowee good one'); break;
      case 4: message.channel.send ('nobody has used that one before'); break;
                  }
  }
});

client .on('message', (message) => {
  if(message.content == '\:no_u:') {
   var number = 5;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.send ('shit emote'); break;
        case 2: message.channel.send ('get original pl0x'); break;
      case 3: message.channel.send ('Seriously?'); break;
      case 4: message.channel.send ('Please say you did not buy nitro for that'); break;
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
            message.channel.send('You need to be in a voice channel to use this command.');
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
    if (message.content == 'bjeff mysteryfdfsdfd') {
        var channel = message.member.voiceChannel;

        if (!channel) {
            message.channel.send('You need to be in a voice channel to use this command.');
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
    message.channel.send('IT DO NO WORK WAY ROUND NO');
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
   message.channel.send('https://my.mixtape.moe/fqfnox.webm');
    }
   else if(message.content == 'kongwon') {
   message.channel.send('jeff');
    }
  else if(message.content == 'bjeff yeet') {
    message.channel.send('yote');
	}
	else if(message.content == 'bjeff yote') {
    message.channel.send('IT DO NO WORK WAY ROUND NO');
	}
  else if(message.content == 'bjeff pleeb') {
    message.channel.send('yeah, Chebureki, this bot has only existed for like 3 hours');
    }
  else if(message.content == 'bjeff help') {
    message.channel.send('https://jeffpetebothelp.glitch.me/');
    message.channel.send('For voice line commands type bjeff vchelp');
    }
  else if (message.content == 'bjeff vchelp') {
    message.channel.send('https://jeffpetebothelp.glitch.me/vchelp.html');
  }
  else if(message.content == 'bjeff onlygamerknow') {
    message.channel.send('https://i.imgur.com/sfUhK86.jpg');
    }
  else if(message.content == 'bjeff longor') {
    message.channel.send('http://s3.crackedcdn.com/phpimages/article/7/5/0/23750.jpg?v=1');
    }
  else if(message.content == 'bjeff leel') {
    message.channel.send('Caac fef lal heh roor feef lool caac ses');
	}
  else if(message.content == 'bjeff 6ix9ine') {
    message.channel.send('Caac fef lal heh roor feef lool caac ses');
    }
  else if(message.content == 'bjeff busting') {
    message.channel.send('https://i.imgur.com/COmBL8s.png');
	}
  else if(message.content == 'bjeff cocc') {
    message.channel.send('https://my.mixtape.moe/plfrel.mp4');
	}
  else if(message.content == 'bjeff stolenmeme') {
    message.channel.send('https://my.mixtape.moe/gfnhlh.mp4');
	}	
  else if(message.content == 'bjeff soy') {
    message.channel.send('https://my.mixtape.moe/ubrsvx.mov');
	}
  else if(message.content == 'bjeff johnny') {
    message.channel.send('https://pre00.deviantart.net/077d/th/pre/i/2016/053/f/3/dukey_in_johnny_flesh_by_applebeans-d9srwyr.png');
	}
  else if(message.content == 'bjeff peak') {
    message.channel.send('https://my.mixtape.moe/fqfnox.webm');
	}
  else if(message.content == 'bjeff callme') {
    message.channel.send('https://my.mixtape.moe/wnglhp.mp4');
	}
  else if(message.content == 'bjeff aids') {
    message.channel.send('https://my.mixtape.moe/fqfnox.webm');
   }
  else if(message.content == 'bjeff changelong') {
    message.channel.send('https://jeffpetebothelp.glitch.me/changelog.html');
  }
  else if(message.content == 'bjeff clap') {
    message.channel.send('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclap.mp4?1545053825548');
  }
  else if(message.content == 'bjeff version') {
    message.channel.send('Version is build 11022019');
  }
  else if(message.content == 'https://discordapp.com/channels/324641882413989898/534778227160514581') {
    message.channel.send('Hey, you pinned that like two times already, Are you hard of sight?');
  }
});
  




client .on('message', (message) => {
  if(message.content == 'bjeff roll') {
   var number = 88;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.send ('https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fbear.mp4?1537391174426'); break;
        case 2: message.channel.send ('https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fskope.mp4?1537391208068'); break;
      case 3: message.channel.send ('https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fmj.mp4?1537391127824'); break;
      case 4: message.channel.send ('https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2F19598dce7a632a6605578d2bea72feb0be286223bde0404f8d7aa60410189943_1.mp4?1537391055338'); break;
      case 5: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ffamgu.mp4?1539466780468'); break; 
        case 6: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fwindows.mp4?1537468776482'); break; 
          case 7: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fanimu.mp4?1537469274724'); break; 
          case 8: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fhorror.mp4?1537469285656'); break; 
          case 9: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fwii.mp4?1537469309903'); break; 
          case 10: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ftriangle1.mp4?1537469318509'); break; 
          case 11: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fgarfded.mp4?1537469330356'); break; 
          case 12: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ftriang2.mp4?1537469344260'); break;
        case 13: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbanepant.mp4?1537981096285'); break;
        case 14: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsoywave.mp4?1537981113050'); break;
        case 15: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsauce.mp4?1537981131773'); break;
        case 16: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fshadpalace.mp4?1537981269483'); break;
        case 17: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fglitchyman.mp4?1537981283257'); break;
        case 18: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsomemugshopbeingdestroyed.mp4?1537981300216'); break;
        case 19: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fuwu_vomit.mp4?1537981310863'); break;
        case 20: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnathandrake.mp4?1537981339605'); break;
        case 21: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fiputhisinheretoannoy.mp4?1537981367831'); break;
        case 22: message.channel.send ('I made one extra slot and I could not be asked to remove it lol so random xd'); break;
         case 23: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2F6ixxxxxxx.mp4?1539466210442'); break;
         case 24: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fckae.mp4?1539466214762'); break;
         case 25: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsnasnundetaler.mp4?1539466216699'); break;
         case 26: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fwholesomecat1.mp4?1539466217865'); break;
         case 27: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fjonbang.mp4?1539466218064'); break;
         case 28: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ftord.mp4?1539466218875'); break;
         case 29: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsmonky.mp4?1539466219449'); break;
         case 30: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsansudnertle.mp4?1539466219790'); break;
         case 31: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fcarldies.mp4?1539466221283'); break;
         case 32: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbowser.mp4?1539466221968'); break;
         case 33: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fstateit.mp4?1539466222005'); break;
        case 34: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fyoghurtmetillistopliving.mp4?1539466222074'); break;
        case 35: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbikbok.mp4?1539466936634'); break;
        case 36: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fchop.mp4?1539466946601'); break;
        case 37: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnormieloud.mp4?1539466957763'); break;
        case 38: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fhaaaaaaah.mp4?1539466966296'); break;
        case 39: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnotquitemytempo.mp4?1539466976289'); break;
        case 40: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fidkthereference.mp4?1540302780283'); break;
        case 41: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fhertpenor.mp4?1540302780439'); break;
        case 42: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fflex.mp4?1540302780655'); break;
        case 43: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbump.mp4?1540302781046'); break;
        case 44: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsansss.mp4?1540302784978'); break;
        case 45: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsansanansans.mp4?1540302787580'); break;
        case 46: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fwiwiwiwii.mp4?1540302788518'); break;
        case 47: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnumanuma.mp4?1540302789522'); break;
        case 48: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fcrust.mp4?1540302790879'); break;
        case 49: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fhell.mp4?1540302809848'); break;
        case 50: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fmanannouncesthathehadatoiletno.mp4?1541350493444'); break;
        case 51: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fdream.mp4?1541350503052'); break;
        case 52: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsaveanime.mp4?1541351028408'); break;
        case 53: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsansanssasansas.mp4?1541351030060'); break;
        case 54: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ftokofthetik.mp4?1541351030985'); break;
        case 55: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fdownwiththememe.mp4?1545053811840'); break;
        case 56: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Freactcardo.mp4?1545053812999'); break;
        case 57: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fpeppermint.mp4?1545053816574'); break;
        case 58: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fidksomeguyreferencingsomethingidontknow.mp4?1545053818346'); break;
        case 59: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbadehttih.mp4?1545053819520'); break;
        case 60: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fcar.mp4?1545053822622'); break;
        case 61: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fgondolacardo.mp4?1545053823500'); break;
        case 62: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbirdcardo.mp4?1545053824193'); break;
        case 63: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnoticeme.mp4?1545053825018'); break;
        case 64: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclap.mp4?1545053825548'); break;
        case 65: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fahememe.mp4?1545053828103'); break;
        case 66: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fledleladlelo.mp4?1545053829057'); break;
        case 67: message.channel.send ('This one gone, lol'); break;
        case 68: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fibis.mp4?1545053836620'); break;
        case 69: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ftetris.mp4?1545231451945'); break;
        case 70: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Feaster.mp4?1545231456694'); break;
        case 71: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fweird.mp4?1545231473697'); break;
        case 72: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclownmedication.mp4?1545231484222'); break;
        case 73: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsleepclown.mp4?1545231487128'); break;
        case 74: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsit.mp4?1545231495905'); break;
        case 75: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnastyclown.mp4?1545231499410'); break;
        case 76: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclownslap.mp4?1545231501160'); break;
        case 77: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclownthotnik.mp4?1545231505771'); break;
        case 78: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclown2.mp4?1545231507820'); break;
        case 79: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclownattack.mp4?1545231510637'); break;
        case 80: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fclown.mp4?1545231514685'); break;
        case 81: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fwaffle.mp4?1545231524312'); break;
        case 82: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fdogogodogdogdogdogdodogodgogodgod.mp4?1545231526614'); break;
        case 83: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ficantfindit.mp4?1545231530189'); break;
        case 84: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fmemes.mp4?1545231539994'); break;
        case 85: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbanememe.mp4?1545231543934'); break;
        case 86: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fdream.mp4?1545231551034'); break;
        case 87: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fgoodday.mp4?1545231552177'); break;
        case 88: message.channel.send ('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fpeach.mp4?1545231592724'); break;
        
        
        
        /* case : message.channel.send (''); break; */
        
        
        
        
        
                  }
  }
});

/* case : message.channel.send({files: [""]}); break;  */
client .on('message', (message) => {
  if(message.content == 'bjeff fight') {
   var number = 7;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
            case 1: message.channel.send({files: ["https://i.imgur.com/tNRXz8O.png"]}); break;
      case 2: message.channel.send({files: ["https://i.imgur.com/tRGDh0N.png"]}); break;
      case 3: message.channel.send({files: ["https://i.imgur.com/0Cl2lLy.png"]}); break;
      case 4: message.channel.send({files: ["https://i.imgur.com/j6PBxul.png"]}); break;   
        case 5: message.channel.send({files: ["https://i.imgur.com/nJIEwpT.png"]}); break; 
        case 6: message.channel.send({files: ["https://i.imgur.com/wydQhXP.png"]}); break; 
        case 7: message.channel.send({files: ["https://i.imgur.com/6IMC66X.png"]}); break; 
        case 7: message.channel.send({files: ["https://i.imgur.com/IypzpfF.png"]}); break;
                  }
  }
});

client.on('message', (message) => {
  if(message.content == 'bjeff test') {
    message.channel.send('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbadehttih.mp4?1545053063540');
  }
});

client.on('message', (message) => {
  if(message.content == 'bjeff database') {
    message.channel.send('https://jeff-fight-card-database.glitch.me/');
  }
});

client.on('message', (message) => {
  if(message.content == 'bjeff fight help') {
    message.channel.send({files: ["https://cooltext.com/Rendered/Cool-Text-309521164883898.png"]});
    message.channel.send('It is like Yu-Gi-Oh mixed with Top Trumps. Whoever has the highest Jeff Power after all Jeff Abilities have been applied wins. Simple');
    message.channel.send('To find out how to make your own cards, say "bjeff custom cards" in the chat!');
    message.channel.send('Use "bjeff database" to view this anytime');
  }
});

client.on('message', (message) => {
  if(message.content == 'bjeff custom cards') {
    message.channel.send({files: ["https://cooltext.com/Rendered/Cool-Text-309521164883898.png"]});
    message.channel.send('How to make your own Jeff Fight Cards');
    message.channel.send('This website is used: https://www.mtgcardmaker.com/. A simple guide. Below is a url for existing cards to check against the card numbers.');
    message.channel.send('https://imgur.com/a/e7Ui0R0');
    message.channel.send('**************************************************************************************************************************************************************');
    message.channel.send('AFTER YOU HAVE MADE YOUR CARD, ENTER ITS NAME AND NUMBER INTO THE DATABASE. ENTERING EMPTY ENTRIES WILL RESULT IN YOUR ABILITY TO SUBMIT CARDS BEING REVOKED!')
    message.channel.send('https://jeff-fight-card-database.glitch.me/')
    message.channel.send('Use "bjeff database" to view this anytime');
    message.channel.send('**************************************************************************************************************************************************************');
    message.channel.send('SECTION GUIDES');
    message.channel.send('Card Name: Individual words must be in capital letters');
    message.channel.send('Images: Preferably people actually called Jeff, we will probably run out of those soon anyway kek');
    message.channel.send('DESCRIPTION SECTION');
    message.channel.send('Jeff Power: Must have both words capitalized and have a space after the colon (e.g. Jeff Power: 40) ');
    message.channel.send('Jeff Ability: Same rules with the colon. Must have a full stop.');
    message.channel.send('Description: Same rules with the colon. Must have a full stop. Something funny or dumb, nothing offensive.');
    message.channel.send('Bottom text: This should be "Jeff Fight"');
    message.channel.send('Collector number: For now 01/any number that is not in the imgur gallery.');
    
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


client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff mystery') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fmystery.wav?1530136948568");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady =true && message.content == 'yuh') {
   var isReady = false;
   message.channel.send('jeff');
  
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fkillsound_5bd0b.mp3?1533931339415");
    dispatcher.on("end", end => {voiceChannel.leave()});
    var isReady = true;
    
     
    
       });
}
   
});

client.on('message', (message) => {
  if(message.content == 'var') {
    var isReady = true;
  }
});

/* ------------------------VOICE COMMANDS -----------------------------*/

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff bazinga') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbazinga.mp3?1549881427565");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff based') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbased.mp3?1549881525607");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff accident') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Faccident.mp3?1549881548623");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff bug') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbug.mp3?1549881609744");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff binder') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbinder.mp3?1549881622343");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff bees') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbees.mp3?1549881629268");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff bottom') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbotm.mp3?1549881650994");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff stitch') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fstitch.mp3?1549882191490");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff thief') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fthef.mp3?1549882191884");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff welcome') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fwelcome.mp3?1549882192409");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff swagon') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fswagon.mp3?1549882192893");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff anime') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fanime.mp3?1549882193289");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff easy') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Feasy.mp3?1549882194574");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff fearless') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ffearless.mp3?1549882195135");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff fell') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ffell.mp3?1549882195541");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff detective') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fdetective.mp3?1549882195879");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff first') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ffirst.mp3?1549882196207");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff farmer') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ffarmer.mp3?1549882196484");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff fresh') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ffresh.mp3?1549882196731");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff elegant') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Felegant.mp3?1549882196995");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff furnace') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Ffurn.mp3?1549882197281");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff gamers') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fgamers.mp3?1549882197567");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff insane') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Finsane.mp3?1549882197823");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff consume') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Flord.mp3?1549882198325");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff lord') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Flords.mp3?1549882199256");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff lot') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Flot.mp3?1549882199869");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff castle') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fsandcastle.mp3?1549882200364");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff speedy') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fspeedy.mp3?1549882200656");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff spicy') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fspicy.mp3?1549882200864");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff battery') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbattery.mp3?1549882201078");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff coop') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fcoop.mp3?1549882201432");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff dragon') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fdragon.mp3?1549882201665");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff money') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fmoney.mp3?1549882201979");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff ocean') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Focean.mp3?1549882202199");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff nebula') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fnebula.mp3?1549882202616");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff running') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Frunning.mp3?1549882202979");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff foff') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Foff.wav?1555110724818");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff skrotex') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fbruh2.ogg?1559245285476");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff skrotex2') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fskrote.mp3?v=1562713223908");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});



client.on('message', (message) => {

  
if(isReady = true && message.content == 'bjeff king') {
   var isReady = false;
   message.channel.send('jeff');
     
  
  var voiceChannel = message.member.voiceChannel;
  voiceChannel.join().then(connection =>
  {
     const dispatcher = connection.playArbitraryInput("https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fcrang%20cramson.wav?v=1565465378881");
    dispatcher.on("end", end => {setTimeout(function(){
    voiceChannel.leave();
}, 3000);});
    var isReady = true;
    
    
    
       });

}
   
});

client.on('message', (message) => {

const thisWord = "lolumeme";
if(message.content.includes(thisWord))
{
 var number = 7;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
            case 1: message.channel.send({files: ["lol, he said weeb, lol"]}); break;
      case 2: message.channel.send({files: ["woah."]}); break;
      case 3: message.channel.send({files: ["weeb?"]}); break;
      case 4: message.channel.send({files: ["actually, the correct term is otaku"]}); break;   
        case 5: message.channel.send({files: ["https://preview.redd.it/2xc9fhv1y3t11.jpg?width=484&auto=webp&s=2e508d0697dab0902c1b720897617122a2a31aa9 only true gamers get this reference"]}); break; 
        case 6: message.channel.send({files: ["ｙｏｕ　ｓａｙ　ｗｅｅｂ，　ａｎｄ　ｙｅｔ　ｙｏｕ　ｄｒｉｖｅ　ａ　ｆｏｒｄ　ｆｉｅｓｔａ　ｗｉｔｈ　ｎｏ　ｗｈｅｅｌｓ．　ｈａ！"]}); break; 
        case 7: message.channel.send({files: ["weeb backwards is Batman Begins, a superhero film based on the DC comics character Batman. A fun factoid about Batman, is that his costume is modelled after an iguana, a scaled bird."]}); break; 
        case 8: message.channel.send({files: ["i bet you've made eye contact with anime"]}); break;
                  }        

}
   
});