const { Command } = require("discord.js-commando");

module.exports = class KickCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "kick",
      aliases: ["boot"],
      group: "moderation",
      memberName: "kickmember",
      description: "Kicks a member from your server.",
      clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "KICK_MEMBERS"],
      userPermissions: ["KICK_MEMBERS"],
    });
  }

  run(message) {
    let member = "";
    let taggedUser = "";
    if (!message.mentions.users.size) {
      message.say("You must tag a member to kick them.");
    } else {
      member = message.mentions.users.first();
      taggedUser = message.guild.member(member);

      tenor.Search.Query("anime kick", "10").then((Results) => {
        var images = [];
        var i = 0;
        Results.forEach((Post) => {
          images[i] = Post.url;
          i++;
        });
        const response = images[Math.floor(Math.random() * images.length)];
        if (!taggedUser.kickable) {
          message.say("This member is not kickable.");
        } else {
          taggedUser
            .send(`You were kicked from ${message.guild.name}`)
            .then(taggedUser.kick());

          message.say(`${taggedUser} has been kicked ${response}`);
        }
      });
    }
  }
};
