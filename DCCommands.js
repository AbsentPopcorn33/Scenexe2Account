const {
  SlashCommandSubcommandGroupBuilder,
  EmbedBuilder,
} = require("discord.js");
let client, Author;
module.exports = {
  ImportData: function ($) {
    client = $;
    client.users.fetch("658656740308680705").then(($) => {
      Author = $;
    });
  },
  PrefixCommands: {
    about: function (message) {
      message.delete();
      let test = new EmbedBuilder()
        .setDescription("Test Embed") // sets the body of it
        .setColor("007DFF")

        //      .setThumbnail("./image")
        //      .setAuthor({ name: "Random Person"})
        .setTitle("This is an embed")
        .addFields({ name: "test", value: "value" });
      test.setFooter({
        text: `Bot made by ${Author.globalName}`,
        iconURL: `https://cdn.discordapp.com/avatars/${Author.id}/${Author.avatar}`,
      });
      message.channel.send({ embeds: [test] });
      console.log(Author);
    },
    test: function (message) {
      message.reply("Bot is online!");
    },
    playerCount: function (message, Data) {
      console.log(Data.BotData);
      let Reply = "";
      playerCount = Data.BotData["playerCount"];
      for (index in playerCount) {
        Reply +=
          (Data.DimNames[index]
            ? Data.DimNames[index] + ` (${index})`
            : index[0].toUpperCase() + index.substring(1)) +
          ": " +
          playerCount[index] +
          "\n";
      }
      message.reply(Reply);
    },
    execute: function (message, Data) {
      console.log(message.content.substring(9))
      ResponseData = { sendPacket: {announcement: [], other: []} };
      if (!Data.data.commands.rules["gaming"]) {
        message.reply("That Command Doesn't Exist");
      }
      Data.data.commands.execute(
        "/gaming",
        { dim: "testing" },
        {
          sendPacket: function (a, b) {
            if (a === "announcement") {
              ResponseData["sendPacket"]["announcement"].push(b);
            } else {
              ResponseData["sendPacket"]["other"].push(a, b);
            }
          },
        },
        true
      );
      console.log(ResponseData);
    },
  },
};
