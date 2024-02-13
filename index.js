require('dotenv').config();
const express=require('express');
const cors = require('cors');

const db = require('./db.js'); // Require the database connection

// const mongoose = require('mongoose');
// const db = require("./mongo.js");
// const {DB_URL} = require("./lib/config.js");
/////////////////////////////////////////////----->>>>
// const auth = require('./auth/auth.js');
////////////////////////////////////////////////
const cookieParser = require('cookie-parser');
const PORT = 5000;
////////////////////////////////////////////////////
// debugger;
const app = express()
app.use(cookieParser());
//..
app.use(express.json());
app.use(cors( )); //working
app.use(express.urlencoded({ extended: true }));

//.. Route middlewares--/////////////////////////////////////
// app.use("/auth",auth);
///////////////////////////Routes////////////////////////
app.get('/', async (req, res) =>{
    res.status(200).json({success :true ,  message : "Welcome to Taleem Sqlite API"});
});

app.get('/users', (req, res) => {
    // Execute a SELECT query to fetch all users
    db.all("SELECT * FROM users", (err, rows) => {
        if (err) {
            console.error('Error fetching users:', err.message);
            res.status(500).json({ success: false, error: 'Error fetching users' });
        } else {
            // Send the fetched users data as JSON response
            res.status(200).json({ success: true, users: rows });
        }
    });
});

///////////////////////////////////////////////////////////////////////
    app.listen(PORT, ()=>{console.log(`listening on port ${PORT}`)});





