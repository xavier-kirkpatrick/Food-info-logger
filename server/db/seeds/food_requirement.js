/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
export async function seed(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    { id: 1, name: 'Will', phone: '123456', food_preference: 'none' },
    { id: 2, name: 'Cong', phone: '3454', food_preference: 'port floss' },
    { id: 3, name: 'Xavier', phone: '345346', food_preference: 'cucumber' },
    { id: 4, name: 'Logan', phone: '3454534', food_preference: 'none' },
    { id: 5, name: 'Vitor', phone: '456546', food_preference: 'none' },
    { id: 6, name: 'David', phone: '3454334', food_preference: 'none' },
    { id: 7, name: 'Kirsty', phone: '4565445', food_preference: 'no capsicum' },
    { id: 8, name: 'Pathik', phone: '4564', food_preference: 'none' },
    { id: 9, name: 'Samir', phone: '45654', food_preference: 'fish' },
    { id: 10, name: 'Ricky', phone: '3453436', food_preference: 'pickles' },
    { id: 11, name: 'Gapson', phone: '345453', food_preference: 'sweet food' },
  ])
}
