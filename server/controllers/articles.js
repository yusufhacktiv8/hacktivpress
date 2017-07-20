const Article = require('../models/Article');

exports.create = (req, res) => {
  const articleData = req.body;
  const article = new Article(articleData);
  article.save((err) => {
    if (!err) {
      res.json({ status: 'OK' });
    } else {
      res.status(500).send('error');
    }
  });
};

exports.findAll = (req, res) => {
  Article.find((err, articles) => {
    res.json(articles);
  });
};

exports.findOne = (req, res) => {
  const artileId = req.params.id;
  Article.findOne({
    _id: artileId,
  }, (err, article) => {
    res.json(article);
  });
};

exports.update = (req, res) => {
  const artileId = req.params.id;
  const articleForm = req.body;
  Article.findOne({
    _id: artileId,
  }, (err, foundArticle) => {
    foundArticle.title = articleForm.title;
    foundArticle.content = articleForm.content;
    foundArticle.category = articleForm.category;
    foundArticle.author = articleForm.author;

    foundArticle.save((saveErr) => {
      if (!saveErr) {
        res.json({ status: 'OK' });
      } else {
        res.status(500).send('error');
      }
    });
  });
};
