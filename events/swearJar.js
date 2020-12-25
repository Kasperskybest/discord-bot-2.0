const swearWords = require("../data/swearWords.json");
module.exports = (client) => {
  client.on("message", async (message) => {
    //whenever a message is sent
    let swearCount = 0;
    const { member, content } = message;
    swearWords.forEach((element) => {
      if (content.includes(element)) {
        swearCount++;
        swearNumber = swearCount;
      }
    });
    if (swearCount > 0) {
      if (swearNumber === 1) {
        message.channel.send(
          `${member}, you said ${swearNumber} swear word. You must add a penny to the swear jar.`
        );
      } else {
        message.channel.send(
          `${member}, you said ${swearNumber} swear words. You must add ${swearNumber} pennies to the swear jar.`
        );
      }
      swearNumber = 0;
    }
  });
};
