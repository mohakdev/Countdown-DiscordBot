const { SlashCommandBuilder } = require("@discordjs/builder");

module.exports = {
    data: new SlashCommandBuilder() 
        .setName("Countdown")
        .setDescription("Counts down to a specific time and then pings the people you specify"),
    async execute(interaction) {
        interaction.reply("Coundown started");
    }
}