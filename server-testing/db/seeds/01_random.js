const faker = require('faker')

const createFakeData = () => ({
  words: `${faker.hacker.ingverb()} ${faker.commerce.color()}`
})

exports.seed = async function(knex, Promise) {
  const fakeData = []
  for (let i = 0; i < 20; i++) {
    fakeData.push(createFakeData())
  }
  return await knex('random').insert(fakeData)
}
