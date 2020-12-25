const { Command } = require("discord.js-commando");
const kill = require("../../../data/kill.json");

module.exports = class MeowCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "kill",
      aliases: ["kill"],
      group: "fun",
      memberName: "kill",
      description: "Get rid of someone.",
    });
  }

  run(message) {
    let member = "";
    if (!message.mentions.users.size) {
      return message.reply("you need to tag a user in order to kill them!");
    } else {
      member = message.mentions.users.first();

      const response = kill[Math.floor(Math.random() * kill.length)];
      message.say(
        response
          .replace(/\$mention/g, `${member}`)
          .replace(/\$author/g, message.author.username)
      );
    }
  }
};
