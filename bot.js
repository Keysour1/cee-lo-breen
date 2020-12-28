const Discord = require('discord.js');

const client = new Discord.Client();

 

client.on('ready', () => {

    console.log('I am ready!');

});

 

client.on('message', message => {

    if (message.content === 'ping') {

       message.reply('pong');

       }

});

 

// THIS  MUST  BE  THIS  WAY

client.login(process.env.NzkyOTE4MzM4ODQ5NjAzNTg0.X-ksvw.d26E0uxVjI_G6G-B1GXW2KHoytc);//BOT_TOKEN is the Client Secret