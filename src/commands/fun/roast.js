const { Command } = require("discord.js-commando");
const roasts = require("../../../data/roasts.json");

module.exports = class RoastCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "roast",
      aliases: ["roast"],
      group: "fun",
      memberName: "roast",
      description: "Delete someone's will to live.",
    });
  }

  run(message) {
    let member = "";
    if (!message.mentions.users.size) {
      return message.reply("you need to tag a user in order to roast them!");
    } else {
      member = message.mentions.users.first();

      const response = roasts[Math.floor(Math.random() * roasts.length)];

      message.say(`${member} ${response}`);
    }
  }
};
