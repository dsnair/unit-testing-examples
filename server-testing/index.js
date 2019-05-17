// imports
require('dotenv').config()
const app = require('./server')

// variables
const port = process.env.PORT || 8989

app.listen(port, () => console.log('🧞  🐚  🐊  🦀'))

module.exports = app
