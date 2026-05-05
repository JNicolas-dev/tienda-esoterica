const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  nombre: String,
  descripcion: String,
  precio: Number,
  categoria: String,
  imagen: String
});

module.exports = mongoose.model('Product', productSchema);