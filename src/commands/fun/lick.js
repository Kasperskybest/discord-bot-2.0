const { Command } = require("discord.js-commando");

module.exports = class MeowCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "lick",
      aliases: ["lick"],
      group: "fun",
      memberName: "lick",
      description: "Plant your saliva on someone.",
    });
  }

  run(message) {
    let member = "";

    if (!message.mentions.users.size) {
      message.say("You must tag a member to lick them.");
    } else {
      member = message.mentions.users.first();

      tenor.Search.Query("anime lick", "10").then((Results) => {
        var images = [];
        var i = 0;
        Results.forEach((Post) => {
          images[i] = Post.url;
          i++;
        });
        const response = images[Math.floor(Math.random() * images.length)];
        message.say(
          `${member} has been licked by ${message.author.username} ${response}`
        );
      });
    }
  }
};
