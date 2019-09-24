const express = require('express')

const app = express()
app.use(express.json())

let games = [
  {
    id: 1,
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
  },
  {
    id: 2,
    title: 'Rook', // required
    genre: 'Card', // required
    releaseYear: 1906 // not required
  },
  {
    id: 3,
    title: 'Settlers of Catan', // required
    genre: 'Board', // required
    releaseYear: 1995 // not required
  }
]

const getGames = (req, res) => {
  try {
    res.status(200).json(games)
  } catch (error) {
    res.status(500).json({ error, msg: 'Error getting games.' })
  }
}

const postGame = (req, res) => {
  const newGame = req.body
  let exists = false

  if (!newGame.title || !newGame.genre) {
    return res.status(422).send('New game title and genre are required.')
  }

  games.forEach(obj => {
    if (obj.title === newGame.title) {
      exists = true
    }
  })

  if (exists) {
    return res.status(405).send('This game already exists.')
  }

  try {
    games =
      'releaseYear' in newGame
        ? [...games, { ...newGame, id: games.length + 1 }]
        : [...games, { ...newGame, id: games.length + 1, releaseYear: 0 }]
    res.status(201).json(games)
  } catch (error) {
    res.status(500).json({ error, msg: 'Error creating new game.' })
  }
}

app.get('/games', getGames)
app.post('/games', postGame)
app.get('/', (req, res) => res.send('🍎  🍉  🍒'))

module.exports = app
