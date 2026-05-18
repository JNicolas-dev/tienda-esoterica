const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Producto = sequelize.define(
  'Producto',
  {
    nombre: {
      type: DataTypes.STRING
    },

    descripcion: {
      type: DataTypes.TEXT
    },

    precio: {
      type: DataTypes.FLOAT
    },

    categoria: {
      type: DataTypes.STRING
    },

    imagen: {
      type: DataTypes.TEXT
    }

  }
);

module.exports = Producto;