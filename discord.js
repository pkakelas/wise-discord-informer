// Require the necessary discord.js classes
require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js');


// TODO: Login only once
const sendCreditMessage = async (amount, credit) => {
	const client = new Client({ intents: [GatewayIntentBits.Guilds] });
	await client.login(process.env.DISCORD_TOKEN);
	client.once('ready', () => {
		const message = `You received ${amount} ${credit} 💸💸💸`
		client.channels.cache.get(process.env.CHANNEL_ID).send(message)
	})
}

module.exports = {
	sendCreditMessage
}
