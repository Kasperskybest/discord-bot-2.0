module.exports = (client) => {
  client.on("guildMemberAdd", (member) => {
   const logChannel = member.guild.channels.cache.find(ch => ch.name === 'general');
      logChannel.send(`${member} has joined the server!`);

    const role = guild.roles.cache.find((role) => {
      role.name === "Member";
    });
    member.addRole(role);
  });
};
