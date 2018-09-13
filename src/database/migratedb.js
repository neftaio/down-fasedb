var path = require('path')
, fs = require('fs')
, knex = require('knex')
, bookshelf = require('bookshelf')
, dbFile = path.join(__dirname, 'fasedb.sqlite')
, db = null // bookshelf db instance

// init db
db = bookshelf(knex({
  client: 'sqlite3',
  connection: { filename: dbFile },
  useNullAsDefault: true
}))

// create a schema if no db found
fs.exists(dbFile, function(exists) {
  if (!exists) {
    //  Create table Category
    db.knex.schema.createTable('category', function(table) {
      table.increments();
      table.integer('idfase');
      table.string('name');
      table.timestamps();
    }).then(console.log('created category'))
    // Create table Brand
    db.knex.schema.createTable('brand', function(table) {
      table.increments();
      table.integer('idfase');
      table.integer('id_model');
      table.string('name');
      table.timestamps();
    }).then(console.log('created brand'))
    // Create table Car
    db.knex.schema.createTable('car', function(table) {
      table.increments();
      table.integer('idfase');
      table.string('id_reference');
      table.string('description');
      table.timestamps();
    }).then(console.log('created car'))
    // Create table Model
    db.knex.schema.createTable('model', function(table) {
      table.increments();
      table.integer('idfase');
      table.integer('id_state');
      table.string('name');
      table.timestamps();
    }).then(console.log('created model'))
    // Create table Reference
    db.knex.schema.createTable('reference', function(table) {
      table.increments();
      table.integer('idfase');
      table.integer('id_brand');
      table.string('name');
      table.timestamps();
    }).then(console.log('created reference'))
    // Create table State
    db.knex.schema.createTable('state', function(table) {
      table.increments();
      table.integer('idfase');
      table.integer('id_category');
      table.string('name');
      table.timestamps();
    }).then(console.log('created state'))
    // Finish creation of DB
    process.exit(1);
  }
})
