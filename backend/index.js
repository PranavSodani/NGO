// import express from 'express'
// import dotenv from 'dotenv'
// import mysql from 'mysql2'

// const app = express() 
// dotenv.config()
// const port = process.env.PORT || 4000

// // Create a connection to the database
// const connection = mysql.createConnection({
//     host: process.env.DB_HOST || 'localhost',
//     port: process.env.DB_PORT || 3306,
//     user: process.env.DB_USER || 'root',
//     password: process.env.DB_PASSWORD || 'Pranav7470$',
//     database: process.env.DB_NAME || 'REGISTER'
// })

// // Connect to the database
// connection.connect((err) => {
//     if (err) {
//       console.error('Error connecting to MySQL:', err.stack);
//       return;
//     }
//     console.log('Connected to MySQL as ID ' + connection.threadId);
//   });


// app.get('/', (req, res) => {
// res.send('Welcome to the Home Page!');
// });

// app.listen(port, () => {
//   console.log(`Server is listening on port ${port}`)
// })


import express from 'express';
import dotenv from 'dotenv';
import mysql from 'mysql2';
import bodyParser from 'body-parser';

const app = express();
dotenv.config();
const port = process.env.PORT || 4000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Create a connection to the database
const connection = mysql.createConnection({
    host: process.env.DB_HOST || 'localhost',
    port: process.env.DB_PORT || 3306,
    user: process.env.DB_USER || 'root',
    password: process.env.DB_PASSWORD || 'Pranav7470$',
    database: process.env.DB_NAME || 'REGISTER'
});

// Connect to the database
connection.connect((err) => {
    if (err) {
        console.error('Error connecting to MySQL:', err.stack);
        return;
    }
    console.log('Connected to MySQL as ID ' + connection.threadId);
});

// Endpoint to handle user signup
app.post('/user/signup', (req, res) => {
    const { fullname, email, password } = req.body;

    const query = 'INSERT INTO users (fullname, email, password) VALUES (?, ?, ?)';

    connection.query(query, [fullname, email, password], (err, results) => {
        if (err) {
            console.error('Error inserting user into database:', err);
            return res.status(500).json({ message: 'Internal server error' });
        }

        res.status(201).json({ message: 'User registered successfully', user: { id: results.insertId, fullname, email } });
    });
});

app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
