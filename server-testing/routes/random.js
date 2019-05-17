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

const postWords = async (req, res) => {
  if (!req.body.words) return res.status(422).send('Some words are required.')

  try {
    await knex('random').insert(req.body)
    const words = await knex('random')
    res.status(201).json(words)
  } catch (error) {
    error.code === '23505'
      ? res.status(500).json({
          error,
          msg: `Please enter newer words. ${req.body} already exists.`
        })
      : res.status(500).json({ error, msg: 'Error posting new words' })
  }
}

// routes
router.get('/', getWords)
router.post('/', postWords)

module.exports = router
