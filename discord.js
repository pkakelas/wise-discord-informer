// Require the necessary discord.js classes
require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js');

const channelId = '974424972133007390'
// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });

const sendCreditMessage = async (amount, credit) => {
	await client.login(process.env.DISCORD_TOKEN);
	client.once('ready', () => {
		const message = `You received ${amount} ${credit} 💸💸💸`
		client.channels.cache.get(channelId).send(message)
	})
}

module.exports = {
	sendCreditMessage
}
