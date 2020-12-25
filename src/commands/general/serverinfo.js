const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const moment = require("moment");

module.exports = class SeverInfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: "serverinfo",
      aliases: ["server"],
      group: "general",
      memberName: "serverinfo",
      description: "Replies with an embed of the server information.",
    });
  }

  run(message) {
    const serverInfoEmbed = new Discord.MessageEmbed()
      .setThumbnail(message.guild.iconURL())
      .setAuthor("Server's Info", message.guild.iconURL)
      .addField("Name", message.guild.name, true)
      .addField("ID", message.guild.id, true)
      .addField(
        "Owner",
        `${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`,
        true
      )
      .addField("Region", message.guild.region, true)
      .addField(
        "Server created on",
        moment(message.guild.createdAt).format("MMMM Do YYYY, h:mm a")
      )
      .addField("Channels", message.guild.channels.cache.size)
      .addField("Total", `${message.guild.members.cache.size}`, true)
      .addField(
        "Humans",
        `${
          message.guild.members.cache.filter((member) => !member.user.bot).size
        }`,
        true
      )
      .addField(
        "Bots",
        `${
          message.guild.members.cache.filter((member) => member.user.bot).size
        }`,
        true
      );

    return message.say(serverInfoEmbed);
  }
};
