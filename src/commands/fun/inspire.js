const { Command } = require("discord.js-commando");
const request = require("request");

module.exports = class MeowCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "inspire",
      aliases: ["inpsireme"],
      group: "fun",
      memberName: "inspire",
      description: "Replies with an image that will fill you with inpiration.",
    });
  }

  run(message) {
    request(
      "http://inspirobot.me/api?generate=true",
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          message.say({
            embed: {
              image: {
                url: body,
              },
            },
          });
        }
      }
    );
  }
};
