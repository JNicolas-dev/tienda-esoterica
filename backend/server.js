require('dotenv').config();

const app = require('./src/app');
const sequelize = require('./src/config/database');

const createSuperUser = require('./src/config/createSuperUser');
const seedProductos = require('./src/config/seed');

require('./src/models/Producto');
require('./src/models/Usuario');

const PORT = process.env.PORT || 3000;

sequelize.authenticate()

  .then(async () => {

    console.log('✅ MySQL conectado');

    await sequelize.sync();

    console.log('✅ Base de datos sincronizada');

    await createSuperUser();

    await seedProductos();

    app.listen(PORT, () => {

      console.log(
        `🚀 Servidor corriendo en http://localhost:${PORT}`
      );
    });

  })

  .catch(err => {

    console.error('❌ Error DB:', err);
  });