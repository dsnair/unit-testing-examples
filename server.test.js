const request = require('supertest')
const server = require('./server')

describe('GET /games', () => {
  test('always returns an array', async () => {
    const res = await request(server).get('/games')
    expect(res.body).toEqual(expect.arrayContaining([]))
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
