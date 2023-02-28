const { Events, ActivityType } = require("discord.js");

// const openai = new OpenAI({apiKey: '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'});

module.exports = {
  name: Events.ClientReady,
  once: true,
  execute(client) {
    // setInterval(() => {
    //   client.pickPresence;
    // }, 10 * 1000);
    client.user.setPresence({
      activities: [{ name: "VsCode", type: ActivityType.Playing }],
      status: "idle",
    });
    console.log(`Ready! Logged in as ${client.user.tag}`);
  },
};
