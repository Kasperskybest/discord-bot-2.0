const { CommandoClient } = require("discord.js-commando");
const path = require("path");
const {
  prefix,
  token,
  owner,
  invite,
  activity,
  tenorKey,
} = require("./config.json");
const Tenor = require("tenorjs").client({
  Key: tenorKey, // https://tenor.com/developer/keyregistration
  Filter: "off", // "off", "low", "medium", "high", not case sensitive
  Locale: "en_US", // Your locale here, case-sensitivity depends on input
  MediaFilter: "minimal", // either minimal or basic, not case sensitive
  DateFormat: "D/MM/YYYY - H:mm:ss A", // Change this accordingly
});
const inviteDelete = require("./events/inviteDelete");
const swearjar = require("./events/swearJar");
const antiSpam = require("./events/antiSpam");
const memberJoin = require("./events/memberJoin");
const memberLeave = require("./events/memberLeave");

tenor = Tenor;

const client = new CommandoClient({
  commandPrefix: prefix,
  owner: owner,
  invite: invite,
});

client.registry
  .registerDefaultTypes()
  .registerGroups([
    ["general", "General Commands Group"],
    ["moderation", "Moderation Commands Group"],
    ["fun", "Commands for miscellaneous and fun stuff"],
  ])
  .registerDefaultGroups()
  .registerDefaultCommands()
  .registerCommandsIn(path.join(__dirname, "src/commands"));

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}! (${client.user.id})`);
  client.user.setActivity(activity);
});

client.on("ready", async () => {
  inviteDelete(client);
  swearjar(client);
  memberJoin(client);
  memberLeave(client);
});

client.on("message", (message) => {
  antiSpam(client);
});

client.login(token);
