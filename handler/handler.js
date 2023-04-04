const Discord = require("discord.js");
const { readdirSync } = require("fs");
const { REST } = require("@discordjs/rest");

module.exports = {

    run: async (client) => {

        client.commands = new Discord.Collection();
        client.aliases = new Discord.Collection();
        client.categories = readdirSync("./src/commands/");
        client.applications = new Discord.Collection();
        const application = [];

        const applicationFolders = readdirSync("./src/commands/");
        for (const subFolder of applicationFolders) {
            const commands = readdirSync(`./src/commands/${subFolder}/`).filter((file) => file.endsWith(".js"));
            console.log("\n✅ " + "| " + "Foram carregados " + commands.length + " " + "comando(s) com sucesso")
            for (const file of commands) {
                const command = require(`../src/commands/${subFolder}/${file}`);
                client.applications.set(command.data.name, command);
                application.push(command.data);
            }
        }

        const eventsFolder = readdirSync("./src/events/").filter(archive => archive.endsWith('.js'))
        console.log("\n✅ " + "| " + "Foram carregados " + eventsFolder.length + " " + "evento(s) com sucesso")
        for (let eventFile of eventsFolder) {
            let event = require(`../src/events/${eventFile}`)

            if (event.once) {
                client.once(event.name, (...args) => event.run(...args, client))
            } else {
                client.on(event.name, (...args) => event.run(...args, client))
            }
        }

        const rest = new REST({ version: "9" }).setToken(process.env.token);
        (async () => {
            try {
                console.log("\n❌ " + "| " + "Atualizando os Slash Commands... (/)")
                await rest.put(
                    Discord.Routes.applicationCommands(process.env.CLIENT_ID),
                    { body: application }
                );
                console.log("\n✅ " + "| " + "Atualizando os Slash Commands... (/)")
            } catch (error) {
                console.error(error);
            }
        })();
    }
}