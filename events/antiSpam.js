const AntiSpam = require("discord-anti-spam");
const antiSpam = new AntiSpam({
  warnThreshold: 15, // Amount of messages sent in a row that will cause a warning.
  kickThreshold: 30, // Amount of messages sent in a row that will cause a ban.
  banThreshold: 40, // Amount of messages sent in a row that will cause a ban.
  maxInterval: 1000, // Amount of time (in milliseconds) in which messages are considered spam.
  warnMessage: "{@user}, Please stop spamming.", // Message that will be sent in chat upon warning a user.
  kickMessage: "**{user_tag}** has been kicked for spamming.", // Message that will be sent in chat upon kicking a user.
  banMessage: "**{user_tag}** has been banned for spamming.", // Message that will be sent in chat upon banning a user.
  maxDuplicatesWarning: 7, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesKick: 10, // Amount of duplicate messages that trigger a warning.
  maxDuplicatesBan: 12, // Amount of duplicate messages that trigger a warning.
  exemptPermissions: ["ADMINISTRATOR"], // Bypass users with any of these permissions.
  ignoreBots: true, // Ignore bot messages.
  verbose: true, // Extended Logs from module.
  ignoredUsers: [], // Array of User IDs that get ignored.
  // And many more options... See the documentation.
});

module.exports = (client) => {
  // Check for invite links
  client.on("message", (message) => antiSpam.message(message)); //whenever a message is sent
};
