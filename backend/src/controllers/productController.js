const Product = require('../models/Product');

exports.getProducts = async (req, res) => {
  const { categoria } = req.query;
  const filtro = categoria ? { categoria } : {};

  const productos = await Product.find(filtro);
  res.json(productos);
};

exports.createProduct = async (req, res) => {
  const producto = new Product(req.body);
  await producto.save();
  res.status(201).json(producto);
};

exports.deleteProduct = async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.json({ mensaje: 'Producto eliminado' });
};