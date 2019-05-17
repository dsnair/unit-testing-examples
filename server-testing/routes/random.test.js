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

  test('body is an array', async () => {
    const res = await request(app).get('/random')
    expect(res.type).toBe('application/json')
    expect(res.body).toEqual(
      expect.arrayContaining([{ Id: 1, words: 'backing up violet' }])
    )
  })
})

describe('POST /random', () => {
  test('return 201 if required fields are present', async () => {
    const res = await request(app)
      .post('/random')
      .send({
        words: 'testing'
      })
      .set('Accept', 'application/json')
    expect(res.status).toBe(201)
  })

  test('return 422 if required fields are absent', async () => {
    const res = await request(app)
      .post('/random')
      .send({
        incorrectKey: 'testing'
      })
      .set('Accept', 'application/json')
    expect(res.status).toBe(422)
  })
})
