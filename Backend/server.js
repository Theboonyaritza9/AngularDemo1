const express = require('express');
const app = express();
const mongoose = require('mongoose');
const user = require('./routes/user');
const bodyParser = require('body-parser');
const cor = require('cors');

// Middleware
app.use(cor())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', user);

app.use(function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    // res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    // res.header('Access-Control-Allow-Origin', 'http://localhost:5000');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-type, x-access-token');
    res.header('Access-Control-Allow-Credentials', true);
    next();
});

// config Database
const frDB = 'mongodb+srv://admin:1234@mongo3-crud-7dsrv.mongodb.net/usersDB?retryWrites=true&w=majority';
const bowdb = 'mongodb+srv://admin:1234@cluster0.vozic.mongodb.net/usersDB?retryWrites=true&w=majority';

mongoose.connect(bowdb, { useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true }, (err) => {
    if (err) console.log('MongoDB can not connect...');
    else console.log('MongoDB connected successfully...');
});

// Path
app.get('/', (req, res) => {
    res.send('Hello')
});


// Connected to server
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));