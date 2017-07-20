const User = require('../models/User');

exports.findAll = (req, res) => {
  User.find((err, users) => {
    res.json(users);
  });
};
