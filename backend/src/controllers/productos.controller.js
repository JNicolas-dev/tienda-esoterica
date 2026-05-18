const Producto = require('../models/Producto');

exports.getProductos = async (req, res) => {

  try {

    const productos = await Producto.findAll();

    res.json(productos);

  } catch (error) {

    console.log(error);

    res.status(500).json(error);

  }

};

exports.createProducto = async (req, res) => {

  try {

    const producto = await Producto.create({

      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      precio: req.body.precio,
      categoria: req.body.categoria,
      imagen: req.body.imagen

    });

    res.json({

      message: 'Producto creado',
      producto

    });

  } catch (error) {

    console.log(error);

    res.status(500).json(error);

  }

};

exports.deleteProducto = async (req, res) => {

  try {

    await Producto.destroy({

      where: {
        id: req.params.id
      }

    });

    res.json({

      message: 'Producto eliminado'

    });

  } catch (error) {

    console.log(error);

    res.status(500).json(error);

  }

};
exports.updateProducto = async (req, res) => {

  try {

    await Producto.update(

      {

        nombre: req.body.nombre,
        descripcion: req.body.descripcion,
        precio: req.body.precio,
        categoria: req.body.categoria,
        imagen: req.body.imagen

      },

      {

        where: {
          id: req.params.id
        }

      }

    );

    res.json({

      message: 'Producto actualizado'

    });

  } catch (error) {

    console.log(error);

    res.status(500).json(error);

  }

};