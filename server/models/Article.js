const mongoose = require('mongoose');

const articleSchema = mongoose.Schema({
  title: String,
  content: String,
  category: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
}, { timestamps: true });

const ArticleModel = mongoose.model('Article', articleSchema);

module.exports = ArticleModel;
