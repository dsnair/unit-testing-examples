const repair = item => ({ ...item, durability: 100 })

const success = item => {
  item =
    item.enhancement >= 0 && item.enhancement < 20
      ? { ...item, enhancement: ++item.enhancement }
      : { ...item }
  return item
}

module.exports = { repair, success }
