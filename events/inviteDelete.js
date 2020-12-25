module.exports = (client) => {
  const isInvite = async (guild, code) => {
    return await new Promise((resolve) => {
      guild.fetchInvites().then((invites) => {
        for (const invite of invites) {
          if (code === invite[0]) {
            resolve(true);
            return;
          }
        }

        resolve(false);
      });
    });
  };
  // Check for invite links
  client.on("message", async (message) => {
    //whenever a message is sent
    const { guild, member, content } = message;
    const code = content.split("discord.gg/")[1];
    if (content.includes("discord.gg/")) {
      const isOurInvite = await isInvite(guild, code);
      if (!isOurInvite) {
        message
          .delete() //delete the message
          .then(
            message.channel.send(
              `${member} **Link Deleted:**\nInvite links are not permitted on this server`
            )
          );
      }
    }
  });
};
