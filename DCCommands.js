const {
  SlashCommandSubcommandGroupBuilder,
  EmbedBuilder,
} = require("discord.js");
let client, Author;
module.exports = {
  ClientImport: function ($) {
    client = $;
    client.users.fetch("658656740308680705").then(($) => {Author = $}) 
  },
  PrefixCommands: {
    about: function (message) {
      message.delete(), message.channel.send("test");
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
  },
};
