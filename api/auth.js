const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const User = require('./users/User.model');

const config = require('../config/keys');

const newToken = (user) =>
  jwt.sign({ id: user.id }, config.jwt, {
    expiresIn: config.jwtExp,
  });

const verifyToken = (token) =>
  new Promise((resolve, reject) => {
    // eslint-disable-next-line consistent-return
    jwt.verify(token, config.jwt, (err, payload) => {
      if (err) return reject(err);
      resolve(payload);
    });
  });

const login = async (req, res) => {
  let request = req.body;
  const { email, password } = request;
  if (!email || !password) {
    return res.status(400).send({ msg: 'Email and password required' });
  }
  try {
    const user = await User.create(request);
    const token = newToken(user);
    return res.status(201).send({ token });
  } catch (error) {
    return res.status(500).end();
  }
};

exports.login = login;

const register = async (req, res) => {
  let request = req.body;
  const { email, password } = request;
  console.log(request);

  if (!email || !password) {
    return res.status(400).send({ message: 'Email and password required' });
  }

  const invalid = { message: 'Invalid email and passoword combination' };

  try {
    const user = await User.findOne({ email: email }).select('email').exec();
    console.log(user);

    if (user) {
      return res.status(400).send({ message: 'You have a account all ready' });
    }

    const newUser = User.create(request);

    const token = newToken(newUser);
    console.log(token);

    return res.status(200).send({ token });
  } catch (e) {
    return res.status(500);
  }
};

exports.register = register;
