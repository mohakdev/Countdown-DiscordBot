const Discord = require("discord.js");
const client = new Discord.Client({ intents: ['GUILD_MESSAGES', 'GUILDS'] });
require("dotenv").config();

client.on('ready', () => {
    console.log("Bot logged in as " + client.user.tag);
});

/*const { Client } = require('discord.js');
const client = new Client({ intents: ['GUILD_MESSAGES', 'GUILDS'] });
require("dotenv").config();

client.on('ready', () => {
    console.log("Bot Started");
});

client.login(process.env.TOKEN); 
*/

client.login(process.env.TOKEN);