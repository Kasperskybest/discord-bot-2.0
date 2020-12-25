const { Command } = require("discord.js-commando");

module.exports = class MuteCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "unmute",
      aliases: [],
      group: "moderation",
      memberName: "unmutemember",
      description: "Unmutes a member from your server.",
      clientPermissions: ["SEND_MESSAGES", "EMBED_LINKS", "KICK_MEMBERS"],
      userPermissions: ["KICK_MEMBERS"],
    });
  }

  run(message) {
    let member = "";
    let taggedUser = "";

    if (!message.mentions.users.size) {
      message.say("You must tag a member to unmute them.");
    } else {
      member = message.mentions.users.first();
      taggedUser = message.guild.member(member);
      const muteRole = taggedUser.guild.roles.cache.find(
        (role) => role.name === "Muted"
      );

      if (!taggedUser.kickable) {
        message.say("This member can't be unmuted.");
      } else {
        taggedUser.roles
          .remove(muteRole)
          .then(message.say(`${taggedUser} has been unmuted`));
      }
    }
  }
};
