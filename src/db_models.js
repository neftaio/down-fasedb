var knex = require('knex')({
  client: 'sqlite3',
  connection: {
    filename: "./mydb.sqlite"
  }
});

var bookshelf = require('bookshelf')(knex);

var Category = bookshelf.Model.extend({
  tableName: 'category'
});

knex.schema.createTable('category', function(table) {  
    table.increments();
    table.string('name');
    table.string('email', 128);
    table.string('role').defaultTo('admin');
    table.string('password');
    table.timestamps();
});

// category = sequelize.define('category', {
//   id: {
//     type: sequelize.integer,
//     primarykey: true,
//     autoincrement: true
//   },
//   idfase: {
//     type: sequelize.integer,
//   },
//   name: {
//     type: sequelize.string
//   }
// });




// import Sequelize from 'sequelize';
// sequelize = new Sequelize('sqlite://' + path.join(__dirname, 'fase.sqlite'), {
//   dialect: 'sqlite',
//   storage: path.join(__dirname, 'fase.sqlite')
// });

// brand = sequelize.define('brand', {
//   id: {
//     type: sequelize.integer,
//     primarykey: true,
//     autoincrement: true
//   },
//   idfase: {
//     type: sequelize.integer,
//   },
//   id_model: {
//     type: sequelize.integer,
//   },
//   name: {
//     type: sequelize.string
//   }
// });
//
// car = sequelize.define('car', {
//   id: {
//     type: sequelize.integer,
//     primarykey: true,
//     autoincrement: true
//   },
//   idfase: {
//     type: sequelize.string,
//   },
//   id_reference: {
//     type: sequelize.string,
//   },
//   description: {
//     type: sequelize.string
//   }
// });
//
// category = sequelize.define('category', {
//   id: {
//     type: sequelize.integer,
//     primarykey: true,
//     autoincrement: true
//   },
//   idfase: {
//     type: sequelize.integer,
//   },
//   name: {
//     type: sequelize.string
//   }
// });
//
// model = sequelize.define('model', {
//   id: {
//     type: sequelize.integer,
//     primarykey: true,
//     autoincrement: true
//   },
//   idfase: {
//     type: sequelize.integer,
//   },
//   id_state: {
//     type: sequelize.integer,
//   },
//   name: {
//     type: sequelize.string
//   }
// });
//
// reference = sequelize.define('reference', {
//   id: {
//     type: sequelize.integer,
//     primarykey: true,
//     autoincrement: true
//   },
//   idfase: {
//     type: sequelize.string,
//   },
//   id_brand: {
//     type: sequelize.integer,
//   },
//   name: {
//     type: sequelize.string
//   }
// });
//
// state = sequelize.define('state', {
//   id: {
//     type: sequelize.integer,
//     primarykey: true,
//     autoincrement: true
//   },
//   idfase: {
//     type: sequelize.integer,
//   },
//   id_category: {
//     type: sequelize.integer,
//   },
//   name: {
//     type: sequelize.string
//   }
// });
