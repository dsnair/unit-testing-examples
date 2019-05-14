class Item {
  constructor(item) {
    this.name = item.name
    this.durability = item.durability
    this.enhancement = item.enhancement
  }
  repair() {
    return { ...item, durability: 100 }
  }
  success() {
    const newItem =
      item.enhancement >= 0 && item.enhancement < 20
        ? { ...item, enhancement: ++item.enhancement }
        : { ...item }
    return newItem
  }
}

const item = new Item({
  name: 'Iron Sword',
  durability: 5,
  enhancement: 18
  // durability: Math.floor(Math.random() * 101),
  // enhancement: Math.floor(Math.random() * 21)
})

module.exports = item
