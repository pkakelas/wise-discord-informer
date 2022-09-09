require('dotenv').config()

const { sendCreditMessage } = require('./discord')
const { startServer } = require('./wise')

const main = async () => {
	startServer()
}

main()
