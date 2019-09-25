const faker = require('faker')

const createFakeData = () => ({
  words: `${faker.hacker.ingverb()} ${faker.commerce.color()}`
})

exports.seed = async function(knex) {
  const fakeData = []
  for (let i = 0; i < 10; i++) {
    fakeData.push(createFakeData())
  }
  return await knex('random_test').insert(fakeData)
}