require('dotenv').config()

const { startServer } = require('./wise')

const main = async () => {
	startServer()
}

main()
