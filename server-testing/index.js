// imports
const express = require('express')
const random = require('./routes/random')
const helmet = require('helmet') // secures HTTP headers

// variables
const app = express()
const port = process.env.PORT || 8989

// server configurations
app.use(helmet())
app.use(express.json()) // parser for incoming data

// routes
app.use('/', random)
app.get('/', (req, res) => res.send(`API is chillin' at the beach 🧞  🐚  🐊  🦀`))

app.listen(port, () => console.log('🧞  🐚  🐊  🦀'))
