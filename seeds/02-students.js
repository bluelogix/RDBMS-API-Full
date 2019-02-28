
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('students').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('students').insert([
        {name: 'Cynthia', cohort_id: 1 },
        {name: 'Celestine', cohort_id: 1 },
        {name: 'Ernest', cohort_id: 2 }
      ]);
    });
};
