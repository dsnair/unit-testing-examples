const enhancer = require('./enhancer.js')

const item = {
  name: 'Iron Sword',
  durability: Math.floor(Math.random() * 101),
  enhancement: Math.floor(Math.random() * 21)
}
// console.log('original', item)

// DATA INTEGRITY
describe('Original data integrity', () => {
  test('Item has name, durability, enhancement', () => {
    expect(item).toHaveProperty('name')
    expect(item).toHaveProperty('durability')
    expect(item).toHaveProperty('enhancement')
  })

  test('Item durability is a number between [0, 100]', () => {
    expect(item.durability).toBeGreaterThanOrEqual(0)
    expect(item.durability).toBeLessThanOrEqual(100)
  })

  test('Item enhancement is a number between [0, 20]', () => {
    expect(item.enhancement).toBeGreaterThanOrEqual(0)
    expect(item.enhancement).toBeLessThanOrEqual(20)
  })

  test('Item name is a non-empty string', () => {
    expect(typeof item.name).toBe('string')
    expect(item.name).toBeTruthy() // no '', null, undefined, NaN, false, 0
  })
})

// REPAIR
describe('On Repair', () => {
  test('Item durability is restored to 100', () => {
    expect(enhancer.repair(item).durability).toBe(100)
  })

  test('Item enhancement is not changed', () => {
    expect(enhancer.repair(item).enhancement).toBe(item.enhancement)
  })

  test('Item name is not changed', () => {
    expect(enhancer.repair(item).name).toBe(item.name)
  })
})

// SUCCESS
describe('On Success', () => {
  test('If item enhancement is between [0, 20), it increases by 1', () => {
    const testItem = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: 0
    }
    const one = enhancer.success(testItem)
    const two = enhancer.success(testItem)
    expect(two.enhancement - one.enhancement).toBe(1)
  })

  test('If item enhancement is 20, it is unchanged', () => {
    const testItem = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: 20
    }
    const one = enhancer.success(testItem)
    expect(one.enhancement).toBe(testItem.enhancement)
  })

  test('Item enhancement is a number between [0, 20]', () => {
    const one = enhancer.success(item)
    const two = enhancer.success(item)
    expect(two.enhancement).toBeGreaterThanOrEqual(0)
    expect(two.enhancement).toBeLessThanOrEqual(20)
  })

  test('Item durability is not changed', () => {
    const one = enhancer.success(item)
    const two = enhancer.success(item)
    // console.log('success [0, 20)', one, two)
    expect(two.durability).toBe(item.durability)
  })

  test('Item name is not changed', () => {
    const one = enhancer.success(item)
    const two = enhancer.success(item)
    expect(two.name).toBe(item.name)
  })
})
