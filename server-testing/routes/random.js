// imports
const express = require('express')
const knex = require('../db/knex')

// setup
const router = express.Router()

//route handlers
const getWords = async (req, res) => {
  try {
    const words = await knex('random')
    res.status(200).json(words)
  } catch (error) {
    res.status(500).json({ error, msg: 'Error getting random words' })
  }
}

// routes
router.get('/', getWords)

module.exports = router
