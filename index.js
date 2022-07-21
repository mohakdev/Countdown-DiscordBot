//Important global variables
const { Client, Collection, Guild } = require("discord.js");
const { REST } = require("@discordjs/rest");
const { ROUTE } = require("discord-api-types/v9");
const fs = require("fs");
const { env } = require("process");
const client = new Client({ intents: ['GUILD_MESSAGES', 'GUILDS'] });
require("dotenv").config();
// Command Handler
const commandsFiles = fs.readdirSync("./commands").filter(file => file.endsWith(".js"));
const commands = [];
client.commands = new Collection();
for (let file in commandsFiles) {
    let command = require(`./commands/${file}`);
    commands.push(command.data.toJson());
    client.commands.set(command.data.name, command);
}


//Start UP
client.on('ready', () => {
    console.log("Bot logged in as " + client.user.tag);

    const clientId = client.user.id;
    const rest = new REST({
        version: "9"
    }).setToken(env.process.TOKEN);

    (async () => {
        try {
            if (process.env.ENV == "production") {
                await rest.put(ROUTE.applicationCommand(clientId),
                    {
                        body: commands
                    });
                console.log("Commands registered globally.");
            }
            else {
                await rest.put(ROUTE.applicationCommand(clientId, process.env.ENV.GUILD_ID ),
                    {
                        body: commands
                    });
                console.log("Commands registered locally.");
            }
        }
        catch(error) {
            if (error) {
                console.log(error);
            }
            }
    })
});s

const Prefix = "$";



client.login(process.env.TOKEN);