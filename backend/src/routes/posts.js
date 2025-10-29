const express = require('express');
const multer = require('multer');
const Post = require('../models/Post');
const auth = require('../middleware/auth');
const { uploadFileToS3 } = require('../utils/s3');

const router = express.Router();
const upload = multer(); // in-memory storage (small files only)

// GET /api/posts  - public
router.get('/', async (req, res) => {
  try {
    const posts = await Post.find().sort({ createdAt: -1 }).lean();
    res.json(posts);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/posts - create a new post (text + optional image)
router.post('/', auth, upload.single('image'), async (req, res) => {
  try {
    const { text } = req.body;
    if (!text && !req.file) return res.status(400).json({ message: 'Post text or image required' });

    let imageUrl = null;
    if (req.file) {
      const key = `posts/${Date.now()}_${req.file.originalname.replace(/\s+/g, '_')}`;
      imageUrl = await uploadFileToS3(req.file.buffer, key, req.file.mimetype);
    }

    const post = await Post.create({
      author: req.user.id,
      authorName: req.user.name,
      text: text || '',
      imageUrl
    });

    res.status(201).json(post);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

// POST /api/posts/:postId/comments - add a comment
router.post('/:postId/comments', auth, async (req, res) => {
  try {
    const { text } = req.body;
    if (!text || !text.trim()) return res.status(400).json({ message: 'Comment required' });

    const post = await Post.findById(req.params.postId);
    if (!post) return res.status(404).json({ message: 'Post not found' });

    const comment = { author: req.user.id, authorName: req.user.name, text: text.trim() };
    post.comments.push(comment);
    await post.save();

    // Return the created comment (last item)
    const created = post.comments[post.comments.length - 1];
    res.status(201).json(created);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error' });
  }
});

module.exports = router;
