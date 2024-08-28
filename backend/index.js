import express from 'express'
import dotenv from 'dotenv'
import mysql from 'mysql2'

const app = express() 
dotenv.config()
const port = process.env.PORT || 4000

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Pranav7470$',
    database: process.env.DB_NAME || 'REGISTER'
})

// Connect to the database
connection.connect((err) => {
    if (err) {
      console.error('Error connecting to MySQL:', err.stack);
      return;
    }
    console.log('Connected to MySQL as ID ' + connection.threadId);
  });


app.get('/', (req, res) => {
res.send('Welcome to the Home Page!');
});

app.listen(port, () => {
  console.log(`Server is listening on port ${port}`)
})