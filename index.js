require('dotenv').config();
const { Client } = require('discord.js');
const client = new Client({ intents: [1, 512, 32768, 2, 128, 32767] });
module.exports = client
require("./handler/handler").run(client)
client.login(process.env.TOKEN)