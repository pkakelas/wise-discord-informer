// Require the necessary discord.js classes
require('dotenv').config()
const { Client, GatewayIntentBits } = require('discord.js');

// Create a new client instance
const client = new Client({ intents: [GatewayIntentBits.Guilds] });
const channel = client.channels.cache.get('');

const startDiscordBot = async () => {
	client.login(process.env.DISCORD_TOKEN);
	return new Promise(resolve => client.once('ready', resolve))
}

const sendCreditMessage = async (amount, credit) => {
	channel.send('Mitsos tests');
}

module.exports = {
	startDiscordBot,
	sendCreditMessage
}