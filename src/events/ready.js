module.exports = {
    name: "ready",

    run: async (client) => {

        console.log("\n🤖 " + "| " + "Logado em:" + client.user.username)
    }
}