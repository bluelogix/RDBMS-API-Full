
exports.up = function(knex, Promise) {
  return knex.schema.createTable('cohorts', function(tbl) {

      //ID column
      tbl.increments();
      //name column
      tbl.string('name', 128)
      .notNullable()

      tbl.timestamps(true, true);
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists('cohorts');
};
