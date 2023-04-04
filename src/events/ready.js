require('dotenv').config();
const Discord = require('discord.js');
const SquareCloudAPI = require('@squarecloud/api');
const api = new SquareCloudAPI(process.env.squareCloudKey)

module.exports = {
    name: "ready",

    run: async (client) => {

        const user = await api.getUser(process.env.squareCloudUser)

        console.log("\n🤖 " + "| " + "Logado em: " + client.user.username)
        try {

            if (user.hasAccess()) {
                console.log("\n🔳 " + "| " + "Square Cloud: Conectada com Sucesso")
            }
        } catch (error) {
            if(error.data.status === 'error' && error.data.code === 'ACCESS_DENIED') {
                console.log("\n🔳 " + "| " + "Square Cloud: Conectada sem Sucesso")
            }
        }

    }
}