// imports
const express = require('express')
const randomRoute = require('./routes/random')
const helmet = require('helmet') // secures HTTP headers

// variables
const app = express()

// server configurations
app.use(helmet())
app.use(express.json()) // parser for incoming data

// routes
app.use('/random', randomRoute)
app.get('/', (req, res) => res.send(`API is chillin' at the beach 🧞  🐚  🐊  🦀`))

module.exports = app
