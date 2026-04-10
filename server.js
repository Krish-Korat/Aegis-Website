const express = require('express');
const session = require('express-session');
const { MongoClient, ObjectId } = require('mongodb');
const crypto = require('crypto');
const cors = require('cors');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/';

app.use(cors({
  origin: ['http://localhost:5173', 'http://127.0.0.1:5173'], // Vite's default dev port
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(session({
  secret: process.env.SESSION_SECRET || 'aegis_fallback_secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 1000 * 60 * 60 * 24, // 1 day
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
  }
}));

// MongoDB connection
let db;
const client = new MongoClient(MONGO_URI);
client.connect()
  .then(client => {
    console.log('Connected to MongoDB');
    db = client.db('aegis');
    db.collection('users').createIndex({ email: 1 }, { unique: true });
  })
  .catch(err => console.error('MongoDB connection error:', err));

// Hash password function
const hashPassword = (password) => {
  return crypto.createHash('sha256').update(password).digest('hex');
};

// API Routes
app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password || password.length < 8) {
    return res.status(400).json({ error: 'Valid name, email, and a password of at least 8 characters are required' });
  }

  try {
    const existing = await db.collection('users').findOne({ email });
    if (existing) {
      return res.status(400).json({ error: 'Email already in use' });
    }

    const newUser = {
      name,
      email,
      password: hashPassword(password),
      role: email === 'admin@aegis.com' ? 'admin' : 'user',
      createdAt: new Date()
    };
    
    await db.collection('users').insertOne(newUser);
    
    req.session.user = { id: newUser._id, name: newUser.name, email: newUser.email, role: newUser.role };
    res.json({ message: 'Signup successful', user: req.session.user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  try {
    const user = await db.collection('users').findOne({ email, password: hashPassword(password) });
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password' });
    }

    req.session.user = { id: user._id, name: user.name, email: user.email, role: user.role || 'user' };
    res.json({ message: 'Login successful', user: req.session.user });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(err => {
    if (err) return res.status(500).json({ error: 'Logout failed' });
    res.clearCookie('connect.sid');
    res.json({ message: 'Logout successful' });
  });
});

app.get('/api/me', (req, res) => {
  if (req.session.user) {
    res.json({ user: req.session.user });
  } else {
    res.status(401).json({ error: 'Not authenticated' });
  }
});

app.post('/api/contact', async (req, res) => {
  const { name, company, phone, email, subject, message } = req.body;
  
  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Name, email, and message are required' });
  }

  try {
    const newContactMessage = {
      name,
      company,
      phone,
      email,
      subject,
      message,
      createdAt: new Date()
    };
    await db.collection('contact_messages').insertOne(newContactMessage);
    res.json({ message: 'Message sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

app.post('/api/integrate', async (req, res) => {
  if (!req.session.user) return res.status(401).json({ error: 'Not authenticated' });
  const { plan, domain, serverType } = req.body;
  try {
    await db.collection('users').updateOne(
      { _id: new ObjectId(req.session.user.id) }, 
      { $set: { integration: { plan, domain, serverType, status: 'Active', integratedAt: new Date() } } }
    );
    res.json({ message: 'Integration setup complete' });
  } catch (error) {
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.get('/api/admin/users', async (req, res) => {
  if (!req.session.user || req.session.user.role !== 'admin') {
    return res.status(403).json({ error: 'Access denied: Admins only' });
  }
  try {
    const users = await db.collection('users').find({}, { projection: { password: 0 } }).sort({ createdAt: -1 }).toArray();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch users' });
  }
});

// Serve frontend in production
app.use(express.static(path.join(__dirname, 'client/dist')));
app.get(/^.*$/, (req, res) => {
  res.sendFile(path.join(__dirname, 'client/dist/index.html'));
});

app.listen(PORT, () => {
  // Trigger nodemon restart 2
  console.log(`Server running on port ${PORT}`);
});
