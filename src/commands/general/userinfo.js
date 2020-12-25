const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const moment = require("moment");

module.exports = class UserInfoCommand extends (
  Command
) {
  constructor(client) {
    super(client, {
      name: "userinfo",
      aliases: ["user", "whois"],
      group: "general",
      memberName: "userinfo [user mention/id]",
      description:
        "Replies with an embed of a user's information. If no user is given, your own information will be displayed.",
    });
  }

  run(message) {
    let member = "";
    if (!message.mentions.users.size) {
      member = message.author;
    } else {
      member = message.mentions.users.first();
    }
    let guildMember = message.guild.member(member);
    const userInfoEmbed = new Discord.MessageEmbed()
      .setTitle(`${member.username}'s Info`)
      .setThumbnail(member.displayAvatarURL())
      .addFields(
        { name: "Username", value: member.tag },
        { name: "ID", value: member.id, inline: true }
      )
      .addField(
        "Joined server on",
        moment(guildMember.joinedAt).format("MMMM Do YYYY, h:mm a"),
        true
      )
      .addField(
        "Joined Discord on",
        moment(member.createdAt).format("MMMM Do YYYY, h:mm a"),
        true
      );
    message.say(userInfoEmbed);
  }
};
