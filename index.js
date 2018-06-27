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


const rando_imgs = [
'https://i.imgur.com/3QK8XKs.jpg',
'https://i.imgur.com/KI4WnZT.jpg',
'https://i.imgur.com/3XnnaTE.png',
]

client .on('message', (message) => {
  if(message.content == '!jeff haha') {
   var number = 5;
      var random = Math.floor (Math.random() * (number - 1 + 1)) + 1;
    switch (random) {
      case 1: message.channel.sendMessage ('https://i.imgur.com/3XnnaTE.png'); break;
        case 2: message.channel.sendMessage ('https://i.imgur.com/KI4WnZT.jpg'); break;
      case 3: message.channel.sendMessage ('https://i.imgur.com/x6fJIJp.jpg'); break;
      case 4: message.channel.sendMessage ('https://i.imgur.com/3eX6PCU.jpg'); break;
                  }
  }
});