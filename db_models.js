var path = require('path'),
    Sequelize = require('sequelize');

sequelize = new Sequelize('sqlite://' + path.join(__dirname, 'fase.sqlite'), {
  dialect: 'sqlite',
  storage: path.join(__dirname, 'fase.sqlite')
});

Brand = sequelize.define('brand', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idfase: {
    type: Sequelize.INTEGER,
  },
  id_model: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING
  }
});

Car = sequelize.define('car', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idfase: {
    type: Sequelize.STRING,
  },
  id_reference: {
    type: Sequelize.STRING,
  },
  description: {
    type: Sequelize.STRING
  }
});

Category = sequelize.define('category', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idfase: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING
  }
});

Model = sequelize.define('model', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idfase: {
    type: Sequelize.INTEGER,
  },
  id_state: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING
  }
});

Reference = sequelize.define('reference', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idfase: {
    type: Sequelize.STRING,
  },
  id_brand: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING
  }
});

State = sequelize.define('state', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  idfase: {
    type: Sequelize.INTEGER,
  },
  id_category: {
    type: Sequelize.INTEGER,
  },
  name: {
    type: Sequelize.STRING
  }
});
