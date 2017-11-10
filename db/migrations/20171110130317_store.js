exports.up = (knex, Promise) => {
 return knex.schema.createTable('store', (table) => {
   table.increments();
   table.string("storename").notNullable();
   table.text("description").notNullable();
   table.timestamps(true, true);
 });
};

exports.down = (knex, Promise) => {
 return knex.schema.dropTable('store');
};
