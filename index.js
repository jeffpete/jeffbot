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

const fs = require("fs");

       

const prefix = '~';
client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + '!jeff leave')) {
    message.channel.sendMessage('pong');
  }
});

client.login(process.env.TOKEN);

client.on('message', (message) => {
  if(message.content == '!jeff yeet') {
    message.channel.sendMessage('yote');
  }
});

client .on('message', (message) => {
  if(message.content == '!jeff haha') {
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
  if(message.content == '!jeff yote') {
    message.channel.sendMessage('IT DO NO WORK WAY ROUND NO');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff ridegasm') {
    message.channel.sendMessage('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff ridegasm') {
    message.channel.sendMessage('https://pbs.twimg.com/profile_images/378800000758437408/b5f3cc10d9adb85e9e05538d42b36b59_400x400.png');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff pleeb') {
    message.channel.sendMessage('yeah, Chebureki, this bot has only existed for like 3 hours');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff help') {
    message.channel.sendMessage('https://pastebin.com/raw/nVuhJfyv');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff onlygamerknow') {
    message.channel.sendMessage('https://i.imgur.com/sfUhK86.jpg');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff longor') {
    message.channel.sendMessage('http://s3.crackedcdn.com/phpimages/article/7/5/0/23750.jpg?v=1');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff leel') {
    message.channel.sendMessage('Caac fef lal heh roor feef lool caac ses');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff 6ix9ine') {
    message.channel.sendMessage('Caac fef lal heh roor feef lool caac ses');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff busting') {
    message.channel.sendMessage('https://i.imgur.com/COmBL8s.png');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff cocc') {
    message.channel.sendMessage('https://my.mixtape.moe/plfrel.mp4');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff stolenmeme') {
    message.channel.sendMessage('https://my.mixtape.moe/gfnhlh.mp4');
  }
});

client.on('message', (message) => {
  if(message.content == '!jeff soy') {
    message.channel.sendMessage('https://my.mixtape.moe/ubrsvx.mov');
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

client.on('message', (message) => {
  if(message.content == '!jeff changelog') {
    message.channel.sendMessage('IT DO NO WORK WAY ROUND NO');
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
      client.on('message', (message) => {
        message.channel.send('!leave');
      });
    });
};

client.on('message', (message) => {
    if (message.content == '!jeff 1') {
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
        playAudio2(connection, 'https://cdn.glitch.com/d8bbf4be-dc1a-4ca6-ab4a-3db061725444%2Fmystery.wav?1530136948568');
    });
}

const leaveChannel2 = () => {
    botChannel2.leave();
    botChannel2 = undefined;
};

const playAudio2 = (connection, audioUrl) => {
    const dispatcher = connection.playArbitraryInput(audioUrl);
    dispatcher.on("end", end => {
      client.on('message', (message) => {
        message.channel.send('!leave');
      });
    });
};

client.on('message', (message) => {
    if (message.content == '!jeff 2') {
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
  if(message.content == '!jeff changelog') {
    message.channel.sendMessage('IT DO NO WORK WAY ROUND NO');
    botChannel = undefined;
    channel.leave(); 
  }
  }
});

client.on('message', (message) => {
      if (message.content == '!leave') {
        var channel = message.member.voiceChannel;

                channel.leave(); 
            
                 
    }
});

bot.on('message', function(message) {
    // Now, you can use the message variable inside
    if (message.content === "$loop") { 
        var interval = setInterval (function () {
            // use the message's channel (TextChannel) to send a new message
            message.channel.send("123")
            .catch(console.error); // add error handling here
        }, 1 * 1000); 
    }
});