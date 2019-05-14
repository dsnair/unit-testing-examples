const repair = item => ({ ...item, durability: 100 })

const success = item =>
  item.enhancement >= 0 && item.enhancement < 20
    ? { ...item, enhancement: ++item.enhancement }
    : item

const fail = item => {
  let { enhancement, durability } = item

  if (enhancement >= 0 && enhancement <= 14) {
    return durability - 5 >= 0
      ? { ...item, durability: (durability -= 5) }
      : item
  }

  if (enhancement >= 15 && enhancement <= 16) {
    return durability - 10 >= 0
      ? { ...item, durability: (durability -= 10) }
      : item
  }

  if (enhancement >= 17 && enhancement <= 20) {
    return durability - 10 >= 0
      ? {
          ...item,
          durability: (durability -= 10),
          enhancement: (enhancement -= 1)
        }
      : { ...item, enhancement: (enhancement -= 1) }
  }
}

module.exports = { repair, success, fail }
