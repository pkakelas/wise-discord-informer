require('dotenv').config()
const { startDiscordBot } = require('./discord')
const { startServer } = require('./wise')

const main = async () => {
	await startDiscordBot()
	startServer()
}

main()