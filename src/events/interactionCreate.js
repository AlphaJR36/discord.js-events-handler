require("colors")

module.exports = {
    name: "interactionCreate",

    run: async (interaction, client) => {

        if (interaction.isCommand()) {
            const command = client.applications.get(interaction.commandName);
            if (!command) return;
            try {
                command && command.run(interaction);
            } catch (err) {
                console.error(err);
                interaction.reply({
                    content: "❌ " + "| " + "Ocorreu um erro ao iniciar o processo... (/)",
                    ephemeral: true
                });
            }
        }
    }
}