
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cohorts').del()
      .then(function() {
          // Inserts seed entries
          return knex('cohorts').insert([
              { name: 'WEB26' },
              { name: 'WEB28' },
              { name: 'WEBPT16' },
              { name: 'WEBPT14' },
          ]);
      });
};
