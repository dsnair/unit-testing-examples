// implement changes to schema
exports.up = async function(knex, Promise) {
  return await knex.schema.createTable('random', table => {
    table.increments('Id').unsigned()
    table
      .string('words')
      .notNullable()
      .unique()
  })
}

// undo changes
exports.down = async function(knex, Promise) {
  return await knex.schema.dropTable('random')
}
