const request = require('supertest')
const app = require('../server')
const knex = require('../db/knex')
const knexCleaner = require('knex-cleaner')

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
    expect(res).toEqual(expect.arrayContaining([]))
  })
})

describe('POST /random', () => {
  /*
  beforeAll() runs once and only once in describe() block.
  .clean() wipes the database table to empty. This is why have the test database should be different from the main database.
  */
 
  beforeAll(async () => await knexCleaner.clean(knex))

  test('return 201 if new post is created', async () => {
    const res = await request(app)
      .post('/random')
      .send({
        words: 'indexing ivory'
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

  test('return 422 if duplicate entry is posted', async () => {
    const res = await request(app)
      .post('/random')
      .send({
        words: 'indexing ivory'
      })
      .set('Accept', 'application/json')
    expect(res.status).toBe(422)
  })
})
