const Article = require('../models/Article');

exports.findAll = (req, res) => {
  Article.find((err, articles) => {
    res.json(articles);
  });
};
