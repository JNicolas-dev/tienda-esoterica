const bcrypt = require('bcryptjs');
const Usuario = require('../models/Usuario');

const createSuperUser = async () => {

  const existe = await Usuario.findOne({
    where: {
      email: process.env.SUPERUSER_EMAIL
    }
  });

  if (!existe) {

    const passwordHash = await bcrypt.hash(
      process.env.SUPERUSER_PASSWORD,
      10
    );

    await Usuario.create({
      nombre: 'Administrador',
      email: process.env.SUPERUSER_EMAIL,
      password: passwordHash,
      rol: 'admin'
    });

    console.log('✅ Superusuario creado');

  } else {

    console.log('ℹ️ Superusuario ya existe');
  }
};

module.exports = createSuperUser;