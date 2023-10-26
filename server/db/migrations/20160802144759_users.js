export async function up(knex) {
  await knex.schema.createTable('users', (table) => {
    table.increments('id').primary()
    table.string('name')
    table.string('phone')
    table.string('food_preference')
  })
}

export async function down(knex) {
  await knex.schema.dropTable('users')
}
