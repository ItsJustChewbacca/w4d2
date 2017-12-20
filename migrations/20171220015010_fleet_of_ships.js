exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.createTable("fleets_v2", function(table) {
      table.increments("id");
      table.string("name");
      table.date('dom');
      table.timestamps();
    })
  ]);
};

exports.down = function(knex, Promise) {
  return Promise.all([knex.schema.dropTable("fleets_v2")]);
};