const express = require('express')

const app = express()
app.use(express.json())

let games = [
  {
    title: 'Pacman', // required
    genre: 'Arcade', // required
    releaseYear: 1980 // not required
  },
  {
    title: 'Rook', // required
    genre: 'Card', // required
    releaseYear: 1906 // not required
  },
  {
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

  if (!newGame.title || !newGame.genre) {
    return res.status(422).send('New game title and genre are required.')
  }
  
  games.forEach(obj => {
    if (obj.title === newGame.title)
      return res.status(405).send('This game already exists.')
  })

  try {
    games = [...games, newGame]
    res.status(201).json(games)
  } catch (error) {
    res.status(500).json({ error, msg: 'Error creating new game.' })
  }
}

app.get('/games', getGames)
app.post('/games', postGame)
app.get('/', (req, res) => res.send('🍎  🍉  🍒'))

module.exports = app
