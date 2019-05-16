const request = require('supertest')
const server = require('./random.js')

test('sets environment to testing', () => {
  expect(process.env.DB_ENV).toBe('testing')
})
