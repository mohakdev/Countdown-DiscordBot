const Discord = require("discord.js");
const client = new Discord.Client({ intents: ['GUILD_MESSAGES', 'GUILDS'] });
require("dotenv").config();

client.on('ready', () => {
    console.log("Bot logged in as " + client.user.tag);
});

client.on('message', (msg) => {
    if (msg.content === '/Countdown') {
        msg.channel.send("Countdown started!");
    }
});

client.login(process.env.TOKEN);