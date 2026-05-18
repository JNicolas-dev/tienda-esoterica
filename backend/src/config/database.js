const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: 'mysql',
    logging: false
  }
);

sequelize.authenticate()
  .then(() => {

    console.log('MySQL conectado');

  })
  .catch((error) => {

    console.log('Error DB:', error);

  });

module.exports = sequelize;