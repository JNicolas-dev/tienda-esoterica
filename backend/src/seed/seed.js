require('dotenv').config();
const mongoose = require('mongoose');
const Product = require('../models/Product');

mongoose.connect(process.env.MONGO_URI);

const productos = [
  {
    nombre: "Retorno de pareja",
    descripcion: "Trabajo espiritual para recuperar pareja",
    precio: 100000,
    categoria: "amor"
  },
  {
    nombre: "Limpieza espiritual",
    descripcion: "Elimina energías negativas",
    precio: 80000,
    categoria: "proteccion"
  }
];

const seed = async () => {
  await Product.deleteMany();
  await Product.insertMany(productos);
  console.log('Datos insertados');
  process.exit();
};

seed();