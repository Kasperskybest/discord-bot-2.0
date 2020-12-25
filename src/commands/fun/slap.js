const { Command } = require("discord.js-commando");

module.exports = class SlapCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "slap",
      aliases: ["slap"],
      group: "fun",
      memberName: "slap",
      description: "Leave your handprint on someone's face.",
    });
  }

  run(message) {
    let member = "";

    if (!message.mentions.users.size) {
      message.say("You must tag a member to slap them.");
    } else {
      member = message.mentions.users.first();

      tenor.Search.Query("anime slap", "10").then((Results) => {
        var images = [];
        var i = 0;
        Results.forEach((Post) => {
          images[i] = Post.url;
          i++;
        });
        const response = images[Math.floor(Math.random() * images.length)];
        message.say(
          `${member} has been slapped by ${message.author.username} ${response}`
        );
      });
    }
  }
};
