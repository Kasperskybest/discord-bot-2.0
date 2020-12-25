const { Command } = require("discord.js-commando");

module.exports = class MeowCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "kiss",
      aliases: ["kiss"],
      group: "fun",
      memberName: "kiss",
      description: "Give a kissy to someone.",
    });
  }

  run(message) {
    let member = "";

    if (!message.mentions.users.size) {
      message.say("You must tag a member to kick them.");
    } else {
      member = message.mentions.users.first();

      tenor.Search.Query("anime kiss", "10").then((Results) => {
        var images = [];
        var i = 0;
        Results.forEach((Post) => {
          images[i] = Post.url;
          i++;
        });
        const response = images[Math.floor(Math.random() * images.length)];
        message.say(
          `${member} has been kissed by ${message.author.username} ${response}`
        );
      });
    }
  }
};
