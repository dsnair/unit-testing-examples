const enhancer = require('./enhancer.js')

// DATA INTEGRITY
describe('Original data integrity', () => {
  test('Item has name, durability, enhancement', () => {
    const item = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: Math.floor(Math.random() * 21)
    }
    expect(item).toHaveProperty('name')
    expect(item).toHaveProperty('durability')
    expect(item).toHaveProperty('enhancement')
  })

  test('Item durability is a number between [0, 100]', () => {
    const item = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: Math.floor(Math.random() * 21)
    }
    expect(item.durability).toBeGreaterThanOrEqual(0)
    expect(item.durability).toBeLessThanOrEqual(100)
  })

  test('Item enhancement is a number between [0, 20]', () => {
    const item = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: Math.floor(Math.random() * 21)
    }
    expect(item.enhancement).toBeGreaterThanOrEqual(0)
    expect(item.enhancement).toBeLessThanOrEqual(20)
  })

  test('Item name is a non-empty string', () => {
    const item = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: Math.floor(Math.random() * 21)
    }
    expect(typeof item.name).toBe('string')
    expect(item.name).toBeTruthy() // no '', null, undefined, NaN, false, 0
  })
})

// REPAIR
describe('On Repair', () => {
  test('Item durability is restored to 100', () => {
    const item = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: Math.floor(Math.random() * 21)
    }
    // console.log('Repair 100', enhancer.repair(item))
    expect(enhancer.repair(item).durability).toBe(100)
  })

  test('Item enhancement is not changed', () => {
    const item = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: 10
    }
    expect(enhancer.repair(item).enhancement).toBe(10)
  })

  test('Item name is not changed', () => {
    const item = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: Math.floor(Math.random() * 21)
    }
    expect(enhancer.repair(item).name).toBe('Iron Sword')
  })
})

// SUCCESS
describe('On Success', () => {
  test('If item enhancement is between [0, 19], it ↑ 1', () => {
    const zero = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: 0
    }
    // console.log('Success [0, 19]', enhancer.success(zero))
    expect(enhancer.success(zero).enhancement).toBe(1)

    const nineteen = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: 19
    }
    expect(enhancer.success(nineteen).enhancement).toBe(20)
  })

  test('If item enhancement is 20, it is unchanged', () => {
    const twenty = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: 20
    }
    expect(enhancer.success(twenty).enhancement).toBe(20)
  })

  test('Item durability is not changed', () => {
    const item = {
      name: 'Iron Sword',
      durability: 50,
      enhancement: Math.floor(Math.random() * 21)
    }
    expect(enhancer.success(item).durability).toBe(50)
  })

  test('Item name is not changed', () => {
    const item = {
      name: 'Iron Sword',
      durability: Math.floor(Math.random() * 101),
      enhancement: Math.floor(Math.random() * 21)
    }
    expect(enhancer.success(item).name).toBe('Iron Sword')
  })
})

// FAIL
describe('On Fail', () => {
  test('When enhancement is [0, 14], durability ↓ 5 w/ [0, 100]', () => {
    const zero = {
      name: 'Iron Sword',
      durability: 0,
      enhancement: 0
    }
    // console.log('Fail [0, 14]', enhancer.fail(zero))
    expect(enhancer.fail(zero).durability).toBe(0)
    expect(enhancer.fail(zero).enhancement).toBe(0)

    const five = {
      name: 'Iron Sword',
      durability: 5,
      enhancement: 14
    }
    expect(enhancer.fail(five).durability).toBe(0)
    expect(enhancer.fail(five).enhancement).toBe(14)

    const hund = {
      name: 'Iron Sword',
      durability: 100,
      enhancement: 10
    }
    expect(enhancer.fail(hund).durability).toBe(95)
    expect(enhancer.fail(hund).enhancement).toBe(10)
  })

  test('When enhancement is [15, 16], durability ↓ 10 w/ [0, 100]', () => {
    const zero = {
      name: 'Iron Sword',
      durability: 0,
      enhancement: 15
    }
    expect(enhancer.fail(zero).durability).toBe(0)
    expect(enhancer.fail(zero).enhancement).toBe(15)

    const ten = {
      name: 'Iron Sword',
      durability: 10,
      enhancement: 16
    }
    expect(enhancer.fail(ten).durability).toBe(0)
    expect(enhancer.fail(ten).enhancement).toBe(16)
  })

  test('When enhancement is [17, 20]: durability ↓ 10 w/ [0, 100], enhancement ↓ 1 w/ [0, 20]', () => {
    const zero = {
      name: 'Iron Sword',
      durability: 0,
      enhancement: 17
    }
    expect(enhancer.fail(zero).durability).toBe(0)
    expect(enhancer.fail(zero).enhancement).toBe(16)

    const ten = {
      name: 'Iron Sword',
      durability: 10,
      enhancement: 20
    }
    expect(enhancer.fail(ten).durability).toBe(0)
    expect(enhancer.fail(ten).enhancement).toBe(19)

    const hund = {
      name: 'Iron Sword',
      durability: 100,
      enhancement: 19
    }
    expect(enhancer.fail(hund).durability).toBe(90)
    expect(enhancer.fail(hund).enhancement).toBe(18)
  })
})
