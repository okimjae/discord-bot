const { Events, ActivityType } = require("discord.js");

module.exports = (client) => {
  client.pickPresence = async () => {
    const options = [
      {
        type: ActivityType.Watching,
        text: "Teste",
        status: "online",
      },
      {
        type: ActivityType.Watching,
        text: "Teste2",
        status: "idle",
      },
      {
        type: ActivityType.Watching,
        text: "Teste3",
        status: "dnd",
      },
    ];
    const option = Math.floor(Math.random() * options.length);

    client.user.setPresence({
      activities: [
        {
          name: options[option].text,
          type: options[option].type,
        },
      ],
      status: options[option].status,
    });
  };
};
