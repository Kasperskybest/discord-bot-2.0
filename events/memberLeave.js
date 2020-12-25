module.exports = (client) => {
  client.on("guildMemberRemove", (member) => {
    const logChannel = member.guild.channels.cache.find(ch => ch.name === 'general');
    logChannel.send(`${member} has left the server!`);
  });
};
