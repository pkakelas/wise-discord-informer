const express = require('express')
const app = express()
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const validateBody = body =>
	typeof body.data === 'object' &&
	'amount' in body.data &&
	'currency' in body.data

app.post('/', (req, res) => {
	console.log('[CREDIT]', req.body)
	if (!validateBody(req.body)) {
		return res.sendStatus(400)
	}
	const { amount, currency } = req.body.data
	console.log(`Received ${amount} ${currency}`);
	// sendCreditMessage(amount, currency)

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