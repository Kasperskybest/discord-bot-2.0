const { Command } = require("discord.js-commando");

module.exports = class MuteCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "mute",
      aliases: ["silence"],
      group: "moderation",
      memberName: "mutemember",
      description: "Mutes a member from your server.",
      clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "KICK_MEMBERS"],
      userPermissions: ["KICK_MEMBERS"],
    });
  }

  run(message) {
    let member = "";
    let taggedUser = "";

    if (!message.mentions.users.size) {
      message.say("You must tag a member to mute them.");
    } else {
      member = message.mentions.users.first();
      taggedUser = message.guild.member(member);
      const muteRole = taggedUser.guild.roles.cache.find(
        (role) => role.name === "Muted"
      );

      if (!taggedUser.kickable) {
        message.say("This member can't be muted.");
      } else {
        taggedUser.roles
          .add(muteRole)
          .then(message.say(`${taggedUser} has been muted`));
      }
    }
  }
};
