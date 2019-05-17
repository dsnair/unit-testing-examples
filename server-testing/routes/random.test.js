const request = require('supertest')
const app = require('../server')

test('sets environment to testing', () => {
  expect(process.env.DB_ENV).toBe('testing')
})

describe('GET /random', () => {
  test('status code is 200', async () => {
    const res = await request(app).get('/random')
    expect(res.status).toBe(200)
  })

  test('body is an array of length 20', async () => {
    const res = await request(app).get('/random')
    // console.log('res body', res.body)
    // expect(typeof res.body).toEqual("array")
    expect(res.body).toHaveLength(20)
  })
})
