
exports.up = function(knex, Promise) {
    return knex.schema.createTable('students', 
    //new table in the same database 
    function(tbl){
        //id column
        tbl.increments();

        //name column
        tbl
        .string('name', 128)
        .notNullable()
        
        tbl
        .integer('cohort_id')//adds a column to the users table referencing the roles table ids
        .unsigned()
        .references('id')// the primary key in the parent table
        .inTable('cohorts')// the name of the parent table
        .onDelete('CASCADE')
        .onUpdate('CASCADE')
        
  
        tbl.timestamps(true, true); 
    })
  };
  

  exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('students');
  };
  