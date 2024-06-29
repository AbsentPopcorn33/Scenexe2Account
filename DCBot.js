const { Client, Events, GatewayIntentBits } = require("discord.js");
const fs = require("node:fs");
const { token } = require("./DCConfig.json");
const DiscordClient = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMembers,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent,
  ],
});
prefix = "$"
let DimNames = { ffa: "Free For All", testing: "Name Testing" };
DiscordClient.login(token);
const { PrefixCommands, SlashCommands, ClientImport } = require("./DCCommands.js");
DiscordClient.on(Events.ClientReady, (c) => {
  ClientImport(DiscordClient)
  console.log(`✅${c.user.tag} is online!`);
});

console.log(PrefixCommands);
DiscordClient.on("messageCreate", (message) => {
  if (message.author.bot) return; // Ignore bot messages
  if (message.content.startsWith(`${prefix}test`)) {
    message.reply("Bot is online!");
  }
  if (message.content.startsWith(`${prefix}playerCount`)) {
    console.log(util.format(BotData));
    let Reply = "";
    playerCount = BotData["playerCount"];
    for (index in playerCount) {
      Reply +=
        (DimNames[index]
          ? DimNames[index] + ` (${index})`
          : index.toUpperCase()) +
        ": " +
        playerCount[index] +
        "\n";
    }
    message.reply(Reply);
  }

  if (message.content.startsWith(`${prefix}say`)) {
    console.log(message.author.globalName + ` (${message.author.username})`);
    if (message.content.substring(5)) {
      message.reply(message.content.substring(5));
    }
  }
  if (message.content.startsWith(`$`)) {
    for (index in PrefixCommands) {
      if (message.content.indexOf(index) === 1) {
        PrefixCommands[index](message);
      }
    }
  }
});
