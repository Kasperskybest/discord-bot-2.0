const { Command } = require("discord.js-commando");
const Discord = require("discord.js");

module.exports = class AvatarCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "avatar",
      aliases: ["avatar"],
      group: "general",
      memberName: "avatar",
      description:
        "Replies with an avatar of the user. If no user is given, your own avatar will be displayed",
    });
  }

  run(message) {
    if (!message.mentions.users.size) {
      const avatarEmbed = new Discord.MessageEmbed()

        .setDescription(`Your Avatar`)
        .setURL(message.author.displayAvatarURL())
        .setImage(message.author.displayAvatarURL());

      message.say(avatarEmbed);
    } else {
      const taggedUser = message.mentions.users.first();

      const avatarEmbed = new Discord.MessageEmbed()
        .setDescription(taggedUser.tag + `'s Avatar`)
        .setURL(taggedUser.displayAvatarURL())
        .setImage(taggedUser.displayAvatarURL());

      message.say(avatarEmbed);
    }
  }
};
