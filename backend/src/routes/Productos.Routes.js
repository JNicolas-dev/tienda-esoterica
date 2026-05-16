const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {

  const productos = [
    {
      id: 1,
      nombre: 'Retorno de pareja',
      descripcion: 'Trabajo espiritual fuerte',
      precio: 100000,
      categoria: 'amor'
    },

    {
      id: 2,
      nombre: 'Limpieza espiritual',
      descripcion: 'Elimina malas energías',
      precio: 80000,
      categoria: 'proteccion'
    }
  ];

  res.json(productos);
});

module.exports = router;