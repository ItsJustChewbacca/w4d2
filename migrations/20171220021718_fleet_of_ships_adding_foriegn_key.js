exports.up = function(knex, Promise) {
  return Promise.all([
    knex.schema.table("fleets_v2", function(table) {
      table.integer("fleets_v2").unsigned();
      table.foreign("fleets_v2").references("fleets_v2.id");
    })
  ]);
};

exports.down = function(knex, Promise) {
  Promise.all([knex.schem.dropTable("fleets_v2")]);
  Promise.all([knex.schem.dropForeign("fleets_v2")]);
};
