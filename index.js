const Discord = require("discord.js");
const client = new Discord.Client({ intents: ['GUILD_MESSAGES', 'GUILDS'] });
require("dotenv").config();

client.on('ready', () => {
    console.log("Bot logged in as " + client.user.tag);
});

client.on('message', () => {
    if (message.content === '/Countdown') {
        message.reply('pong');
    }
});

client.login(process.env.TOKEN);