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

const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new commando.Client();
const client = new Discord.Client();

client.on('message', (message) => {
  if(message.content == '!jeff yeet') {
    message.channel.sendMessage('yote');
  }
});

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
