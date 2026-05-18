const Usuario = require('../models/Usuario');

const bcrypt = require('bcryptjs');

exports.register = async (req, res) => {

  try {

    const passwordHash = await bcrypt.hash(
      req.body.password,
      10
    );

    const usuario = await Usuario.create({

      nombre: req.body.nombre,

      email: req.body.email,

      password: passwordHash,

      rol: 'cliente'

    });

    res.json({

      message: 'Usuario registrado',

      usuario

    });

  } catch (error) {

    console.log(error);

    res.status(500).json(error);

  }

};

exports.login = async (req, res) => {

  try {

    const usuario = await Usuario.findOne({

      where: {
        email: req.body.email
      }

    });

    if (!usuario) {

      return res.status(404).json({

        message: 'Usuario no encontrado'

      });

    }

    const passwordCorrecta = await bcrypt.compare(

      req.body.password,

      usuario.password

    );

    if (!passwordCorrecta) {

      return res.status(400).json({

        message: 'Contraseña incorrecta'

      });

    }

    res.json({

      message: 'Login exitoso',

      usuario

    });

  } catch (error) {

    console.log(error);

    res.status(500).json(error);

  }

};