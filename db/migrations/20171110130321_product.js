exports.up = (knex, Promise) => {
 return knex.schema.createTable('product', (table) => {
   table.increments();
   table.string('productname').notNullable();
   table.integer('store_id')
   .notNullable()
   .references('id')
   .inTable('store')
   .onDelete('CASCADE')
   .index();
   table.decimal('price')
   table.text('description').notNullable();
   table.timestamps(true, true);
 });
};

exports.down = (knex, Promise) => {
 return knex.schema.dropTable('product');
};
