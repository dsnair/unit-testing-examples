class Item {
  constructor(item) {
    this.name = item.name
    this.durability = item.durability
    this.enhancement = item.enhancement
  }
  repair() {
    return { ...item, durability: 100 }
  }
}

const item = new Item({
  name: 'Iron Sword',
  durability: Math.floor(Math.random() * 101),
  enhancement: Math.floor(Math.random() * 21)
})

module.exports = item
