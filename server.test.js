const request = require('supertest')
const server = require('./server')

describe('GET', () => {
  test('/games always returns an array', async () => {
    const res = await request(server).get('/games')
    expect(typeof res.body).toBe('array')
  })
})
