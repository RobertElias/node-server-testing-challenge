
exports.up = function(knex) {
    return knex.schema
        .createTable("cohorts", (tbl) => {
            tbl.increments();
            tbl.string("name", 255).notNullable();
        })
        .createTable("students", (tbl) => {
            tbl.increments();
            tbl.string("name", 255).notNullable();
        })
        .createTable("studentcohorts", (tbl) => {
            tbl.increments();
            tbl.string("cohortsid").notNullable().references("cohorts.id");
            tbl.string("studentsid").notNullable().references("student.id");
        });
};

exports.down = function(knex) {
    return knex.schema
        .dropTableIfExists("studentcohorts")
        .dropTableIfExists("cohorts");
};