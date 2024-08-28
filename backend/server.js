const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();

const db = require('./db'); // Import the db connection file

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Define routes
app.get('/', (req, res) => {
  res.send('Welcome to the NGO Project API');
});

app.post('/user/signup', (req, res) => {
  const { username, password } = req.body;
  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
  
  db.query(query, [username, password], (err, result) => {
    if (err) {
      console.error('Error inserting user:', err);
      res.status(500).json({ message: 'Server error', error: err });
      return;
    }
    res.status(201).json({ message: 'User created successfully', userId: result.insertId });
  });
});

const port = process.env.PORT || 4002;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
