const request = require('supertest')
const server = require('./server')

describe('GET /games', () => {
  test('always returns an array', async () => {
    const res = await request(server).get('/games')
    expect(res).toEqual(expect.arrayContaining([]))
  })

  test('returns 200', async () => {
    const res = await request(server).get('/games')
    expect(res.status).toBe(200)
  })

  test('returns JSON', async () => {
    const res = await request(server).get('/games')
    expect(res.type).toBe('application/json')
  })
})

describe('POST /games', () => {
  test('returns 422 if title and genre are not provided', async () => {
    const res = await request(server)
      .post('/games')
      .send({
        incorrectKey: 'testing'
      })
      .set('Accept', 'application/json')
    expect(res.status).toBe(422)
  })

  test('returns 405 if duplicate title is provided', async () => {
    const res = await request(server)
      .post('/games')
      .send({
        title: 'Pacman',
        genre: 'Arcade'
      })
      .set('Accept', 'application/json')
    expect(res.status).toBe(405)
  })

  test('returns 201 when new game is created', async () => {
    const res = await request(server)
      .post('/games')
      .send({
        title: 'Carcassonne',
        genre: 'Board',
        releaseYear: 2000
      })
      .set('Accept', 'application/json')
    expect(res.status).toBe(201)
  })
})
