const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { nombre, email, password } = req.body;

  const hashed = await bcrypt.hash(password, 10);

  const user = new User({ nombre, email, password: hashed });
  await user.save();

  res.json({ mensaje: 'Usuario registrado' });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) return res.status(404).json({ mensaje: 'Usuario no existe' });

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) return res.status(400).json({ mensaje: 'Contraseña incorrecta' });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

  res.json({ token });
};