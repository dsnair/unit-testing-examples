const enhancer = require('./enhancer.js')

test('Item has name, durability, enhancement', () => {
  // original item
  expect(enhancer).toHaveProperty('name')
  expect(enhancer).toHaveProperty('durability')
  expect(enhancer).toHaveProperty('enhancement')
  // after repair
  expect(enhancer.repair()).toHaveProperty('name')
  expect(enhancer.repair()).toHaveProperty('durability')
  expect(enhancer.repair()).toHaveProperty('enhancement')
  // console.log(enhancer)
})

test('Item durability is a number between [0, 100]', () => {
  // original item
  expect(enhancer.durability).toBeGreaterThanOrEqual(0)
  expect(enhancer.durability).toBeLessThanOrEqual(100)
})

test('When item is repaired, its durability is restored to 100', () => {
  expect(enhancer.repair().durability).toBe(100)
  // console.log(enhancer.repair())
})

test('Item name is a non-empty string', () => {
  // original
  expect(typeof enhancer.name).toBe('string')
  expect(enhancer.name).toBeTruthy() // no '', null, undefined, NaN, false, 0
  // after repair
  expect(typeof enhancer.repair().name).toBe('string')
  expect(enhancer.repair().name).toBeTruthy()
})
