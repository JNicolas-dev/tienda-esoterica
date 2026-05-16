const Producto = require('../models/Producto');

const seedProductos = async () => {

  const total = await Producto.count();

  if (total === 0) {

    await Producto.bulkCreate([
      {
        nombre: 'Retorno de pareja',
        descripcion: 'Trabajo espiritual fuerte y efectivo',
        precio: 100000,
        categoria: 'amor'
      },

      {
        nombre: 'Limpieza espiritual',
        descripcion: 'Elimina malas energías',
        precio: 80000,
        categoria: 'proteccion'
      }
    ]);

    console.log('✅ Seed completado');

  } else {

    console.log('ℹ️ Productos ya existen');
  }
};

module.exports = seedProductos;