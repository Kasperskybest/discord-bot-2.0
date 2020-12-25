const { Command } = require("discord.js-commando");

module.exports = class StabCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "stab",
      aliases: ["stab"],
      group: "fun",
      memberName: "stab",
      description: "Puncture someone.",
    });
  }

  run(message) {
    let member = "";

    if (!message.mentions.users.size) {
      message.say("You must tag a member to stab them.");
    } else {
      member = message.mentions.users.first();

      tenor.Search.Query("anime stab", "10").then((Results) => {
        var images = [];
        var i = 0;
        Results.forEach((Post) => {
          images[i] = Post.url;
          i++;
        });
        const response = images[Math.floor(Math.random() * images.length)];
        message.say(
          `${member} has been stabbed by ${message.author.username} ${response}`
        );
      });
    }
  }
};
