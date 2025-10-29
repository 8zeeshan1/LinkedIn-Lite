const mongoose = require('mongoose');

const CommentSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  authorName: { type: String, required: true },
  text: { type: String, required: true, maxlength: 500 },
  createdAt: { type: Date, default: Date.now }
});

module.exports = CommentSchema;
