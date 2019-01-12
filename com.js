// inside adminCmds.js
function admin1() {
    console.log('in admin 1 command');
    // your command code here
}

function admin2() {
    console.log('in admin 2 command');
    // your command code here
}

module.exports = {
    checkAdminCmd: function(message) {
        let command = message.content, found = false;

        switch(command) {
            // your first admin command (can be whatever you want)
            case 'bjeff dfuc':
                // set found equal to true so your index.js file knows
                //   to not try executing 'other' commands
                found = true;
            message.reply('pong');
                // execute function associated with this command
                break;

            // your second admin command (similar setup as above)
            case '?admin2':
                found = true;
                break;

            // ... more admin commands
        }

        // value of 'found' will be returned in index.js
        return found;
    }
}

     

const http = require('http');
const express = require('express');
const app = express();

function userInfo(user, message) {
}
  
const Discord = require('discord.js');
const commando = require('discord.js-commando');
const bot = new commando.Client();
const client = new Discord.Client();


client.on('message', (message) => {
  if(message.content == 'bjeff dfuc') {
    message.channel.sendMessage('https://cdn.glitch.com/9249b246-88d7-49ba-84df-1358652bb4d8%2Fbadehttih.mp4?1545053063540');
  }
});