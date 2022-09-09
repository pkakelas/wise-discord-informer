const express = require('express')
const app = express()
const bodyParser = require('body-parser');
const { sendCreditMessage } = require('./discord')

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const validateBody = body =>
	typeof body.data === 'object' &&
	'amount' in body.data &&
	'currency' in body.data

app.post('/informer', async (req, res) => {
	console.log('[CREDIT]', req.body)
	if (!validateBody(req.body)) {
		return res.sendStatus(400)
	}
	const { amount, currency } = req.body.data
	await sendCreditMessage(amount, currency)

	res.sendStatus(200);
})

const startServer = () => {
	app.listen(process.env.PORT, () => {
		console.log(`Wise webhook server listening on port ${process.env.PORT}`)
	})
}

module.exports = {
	startServer
}