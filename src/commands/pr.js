const { SlashCommandBuilder } = require("discord.js");

const positive = ':white_check_mark:'
const negative = ':x:'

const data = new SlashCommandBuilder()
  .setName("pr")
  .setDescription("Creates a Pull Request to be reviewed.")
  .addStringOption((option) =>
    option.setName("description").setDescription("s").setRequired(true)
  )
  .addStringOption((option) =>
    option
      .setName("build")
      .setDescription("s")
      .setRequired(true)
      .addChoices(
        { name: "Passou :)", value: positive },
        { name: "Falhou :(", value: negative }
      )
  )
  .addStringOption((option) =>
    option.setName("url").setDescription("s").setRequired(true)
  );

module.exports = {
  data,
  async execute(interaction) {
    const channel = interaction.client.channels.cache.get(
      "1078748760101888111"
    );

    const sentMessage = {
      color: 0x0099ff,
      title: interaction.options.data[0].value,
      url: interaction.options.data[2].value,
      author: {
        name: interaction.user.username,
        iconURL: interaction.user.avatarURL(),
        url: "https://discord.js.org",
      },
      fields: [
        {
          name: "Build",
          value: `${interaction.options.data[1].value}`,
          inline: true,
        },
      ],
      timestamp: new Date().toISOString(),
      footer: {
        text: "Created at",
        icon_url: interaction.user.avatarURL(),
      },
    };

    channel.send({ embeds: [sentMessage] });
  },
};
