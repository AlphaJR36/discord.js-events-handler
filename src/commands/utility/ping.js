module.exports = {
    data: {
        name: "ping",
        description: "🧰 | See bot ping.",
    },

    run: async (interaction) => {

        interaction.reply({ content: `\`🏓\` **|** ${interaction.user} *Pong!*\n\`⏰\` **|** *Gateway Ping:* \`${Date.now() - interaction.createdTimestamp}ms\`\n\`💻\` **|** *API Ping:* \`${Math.round(interaction.client.ws.ping)}ms\``, ephemeral: true })
    },
};