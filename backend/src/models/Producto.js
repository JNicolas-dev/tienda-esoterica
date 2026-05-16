const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Producto = sequelize.define('Producto', {

  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },

  descripcion: {
    type: DataTypes.TEXT,
    allowNull: false
  },

  precio: {
    type: DataTypes.FLOAT,
    allowNull: false
  },

  categoria: {
    type: DataTypes.STRING,
    allowNull: false
  }

});

module.exports = Producto;