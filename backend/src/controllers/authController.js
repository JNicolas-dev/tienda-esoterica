const Usuario = require('../models/usuario');

exports.register = async (req, res) => {

  try {

    const usuario = await Usuario.create({

      nombre: req.body.nombre,
      email: req.body.email,
      password: req.body.password,
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

    if (usuario.password !== req.body.password) {

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