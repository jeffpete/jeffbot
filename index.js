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

const prefix = '~';
client.on('message', message => {
  if (message.author === client.user) return;
  if (message.content.startsWith(prefix + '!jeff ping')) {
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
    message.channel.sendMessage('https://pastebin.com/raw/sdJsUjXH');
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

client .on('message', (message) => {
  if(message.content == '!jeff mystery') {
        var VC = message.member.voiceChannel;
        if (!VC)
            message.channel.sendMessage ('get original pl0x'); 
    VC.join()
        .then(connection => {
      message.channel.sendMessage ('get fixed'); 
            const dispatcher = connection.playFile('mystery.mp3');
            dispatcher.on("end", end => {VC.leave()});
        })
        .catch(console.error);
  }
});

client .on('message', (message) => {
  if(message.content == '!jeff fuckoff') {
        client.leaveVoiceChannel(message.member.voiceState.channelID);
        message.channel.createMessage(`Thanks for tuning in!`); }
           });

client.on('message', (message) => {
  if(message.content == '!jeff yote') {
    message.channel.sendMessage('IT DO NO WORK WAY ROUND NO');
  }
});