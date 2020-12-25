const { Command } = require("discord.js-commando");
const Discord = require("discord.js");
const {ownerName, name} = require("../../../config.json");

module.exports = class InfoCommand extends Command {
  constructor(client) {
    super(client, {
      name: "info",
      aliases: ["botinfo"],
      group: "general",
      memberName: "botinfo",
      description: "Replies with an embed of the bot information.",
    });
  }

  run(message) {
    const infoEmbed = new Discord.MessageEmbed()	
    .setTitle(name)
    .setDescription('General purpose and moderation bot')
    .setFooter(`Created by ${ownerName} (2020)`);
	message.say(infoEmbed);
  }
};
