const {
  Client,
  Events,
  GatewayIntentBits,
  GuildMember,
  PermissionsBitField,
} = require("discord.js");
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
prefix = "$";
let DimNames = { ffa: "Free For All", testing: "Name Testing" };
DiscordClient.login(token);
const {
  PrefixCommands,
  SlashCommands,
  ImportData,
} = require("./DCCommands.js");
DiscordClient.on(Events.ClientReady, (c) => {
  ImportData(DiscordClient);
  console.log(`✅${c.user.tag} is online!`);
});

//console.log(data.commands.rules)
console.log(PrefixCommands);
DiscordClient.on("messageCreate", (message) => {
  if (message.author.bot) return; // Ignore bot messages

  if (message.content.startsWith(`${prefix}say`)) {
    console.log(message.author.globalName + ` (${message.author.username})`);
    if (message.content.substring(5)) {
      message.reply(message.content.substring(5));
    }
  }
  if (message.content.startsWith(`$`)) {
    Command = message.content.substring(
      1,
      message.content.indexOf(" ") === -1
        ? message.content.length
        : message.content.indexOf(" ")
    );
    if (PrefixCommands[Command]) {
      DiscordClient.options.presence.status = "away";
      console.log(message);
      console.log(message.guild.members.cache.get(message.author.id)); //try add roles
      console.log(
        message.guild.roles.create({
          name: "Mod",
          permissions: [
            PermissionsBitField.Flags.SendMessages,
            PermissionsBitField.Flags.KickMembers,
          ],
        })
      );
      PrefixCommands[Command](message, { BotData, DimNames, data });
    } else {
      console.log("Command Doesnt Exist");
    }
  }
});
