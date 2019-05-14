const enhancer = require('./enhancer.js')

// DATA INTEGRITY
describe('Original data integrity', () => {
  test('Item has name, durability, enhancement', () => {
    expect(enhancer).toHaveProperty('name')
    expect(enhancer).toHaveProperty('durability')
    expect(enhancer).toHaveProperty('enhancement')
  })
  test('Item durability is a number between [0, 100]', () => {
    expect(enhancer.durability).toBeGreaterThanOrEqual(0)
    expect(enhancer.durability).toBeLessThanOrEqual(100)
  })
  test('Item enhancement is a number between [0, 20]', () => {
    expect(enhancer.enhancement).toBeGreaterThanOrEqual(0)
    expect(enhancer.enhancement).toBeLessThanOrEqual(20)
  })
  test('Item name is a non-empty string', () => {
    expect(typeof enhancer.name).toBe('string')
    expect(enhancer.name).toBeTruthy() // no '', null, undefined, NaN, false, 0
  })
  // console.log(enhancer)
})

// REPAIR
describe('On Repair', () => {
  test('Item durability is restored to 100', () => {
    expect(enhancer.repair().durability).toBe(100)
  })
  test('Item name and enhancement are not changed', () => {
    expect(enhancer.repair().name).toBe(enhancer.name)
    expect(enhancer.repair().enhancement).toBe(enhancer.enhancement)
    // console.log(enhancer.repair())
  })
})

// SUCCESS
describe('On Success', () => {
  test('Item enhancement increases by 1', () => {
    const one = enhancer.success()
    const two = enhancer.success()
    // console.log(one, two)
    one.enhancement === 20
      ? expect(one.enhancement).toBe(two.enhancement)
      : expect(one.enhancement).toBe(two.enhancement - 1)
  })

  test('Item name and durability are not changed', () => {
    const one = enhancer.success()
    const two = enhancer.success()
    expect(two.name).toBe(enhancer.name)
    expect(two.durability).toBe(enhancer.durability)
  })

  test('Item enhancement is a number between [0, 20]', () => {
    const one = enhancer.success()
    const two = enhancer.success()
    expect(two.enhancement).toBeGreaterThanOrEqual(0)
    expect(two.enhancement).toBeLessThanOrEqual(20)
  })
})
