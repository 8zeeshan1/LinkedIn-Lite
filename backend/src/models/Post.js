const mongoose = require('mongoose');
const CommentSchema = require('./Comment');

const PostSchema = new mongoose.Schema({
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  authorName: { type: String, required: true },
  text: { type: String, required: true, maxlength: 2000 },
  imageUrl: { type: String },
  comments: [CommentSchema]
}, { timestamps: true });

module.exports = mongoose.model('Post', PostSchema);
