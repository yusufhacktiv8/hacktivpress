const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const User = require('../models/User');

const saltRound = 10;
const TOKEN_PASSWORD = 'mypassword';

const sentLoginFailedMessage = (req, res) => {
  res.send('Invalid username or password', 403);
}

exports.create = function createUser(req, res) {
  const userData = req.body;
  const password = userData.password;

  bcrypt.genSalt(saltRound, (errSalt, salt) => {
    bcrypt.hash(password, salt, (errHash, hash) => {
      userData.password = hash;
      const user = new User(userData);
      user.save((err) => {
        if (!err) {
          res.json({ status: 'OK' });
        } else {
          res.status(500).send('error');
        }
      });
    });
  });
};

exports.findAll = (req, res) => {
  User.find((err, users) => {
    res.json(users);
  });
};
