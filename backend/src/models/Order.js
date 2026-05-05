const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  usuarioId: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  productos: [
    {
      productoId: { type: mongoose.Schema.Types.ObjectId, ref: 'Product' },
      cantidad: Number
    }
  ],
  total: Number,
  estado: { type: String, default: 'pendiente' }
});

module.exports = mongoose.model('Order', orderSchema);