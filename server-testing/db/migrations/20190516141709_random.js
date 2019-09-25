// implement changes to schema
exports.up = async function(knex) {
  return await knex.schema
    .createTable('random', table => {
      table.increments('Id')
      table.string('words').notNullable()
    })
    .createTable('random_test', table => {
      table.increments('Id')
      table.string('words').notNullable()
    })
}

// undo changes
exports.down = async function(knex) {
  return await knex.schema.dropTable('random_test').dropTable('random')
}
