const { Command } = require("discord.js-commando");

module.exports = class BanCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "ban",
      aliases: ["hammer"],
      group: "moderation",
      memberName: "banmember",
      description: "Bans a member from your server.",
      clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "KICK_MEMBERS"],
      userPermissions: ["KICK_MEMBERS"],
    });
  }

  run(message) {
    let member = "";
    let taggedUser = "";
    if (!message.mentions.users.size) {
      message.say("You must tag a member to ban them.");
    } else {
      member = message.mentions.users.first();
      taggedUser = message.guild.member(member);

      tenor.Search.Query("anime hammer", "10").then((Results) => {
        var images = [];
        var i = 0;
        Results.forEach((Post) => {
          images[i] = Post.url;
          i++;
        });
        const response = images[Math.floor(Math.random() * images.length)];
        if (!taggedUser.kickable) {
          message.say("This member can't be banned.");
        } else {
          taggedUser
            .send(`You were banned from ${message.guild.name}`)
            .then(taggedUser.ban());

          message.say(`${taggedUser} has been banned ${response}`);
        }
      });
    }
  }
};
