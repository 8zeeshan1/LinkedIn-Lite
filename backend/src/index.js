require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const connectDB = require('./config/db');

const authRoutes = require('./routes/auth');
const postsRoutes = require('./routes/posts');

const app = express();
const PORT = process.env.PORT || 8000;

app.use(helmet());

const allowedOrigins = [
  "http://localhost:5173",
  "https://linkedf.netlify.app"
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
}));

app.use(express.json());

app.get('/health', (_, res) => res.json({ ok: true }));

app.use('/api/auth', authRoutes);
app.use('/api/posts', postsRoutes);

(async () => {
  try {
    await connectDB(process.env.MONGODB_URI);
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  } catch (err) {
    console.error('Failed to start server', err);
    process.exit(1);
  }
})();
