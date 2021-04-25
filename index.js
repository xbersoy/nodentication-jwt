const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config();

// open db connection
mongoose.connect(process.env.MONGO_CONNECTION_STRING, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to db');
});

// route imports begin
const registrationRoute = require('./routes/register');
const loginRoute = require('./routes/login');
const testRoute = require('./routes/test');

//middleware
app.use(express.json());

// route middleware
app.use('/api/user', registrationRoute);
app.use('/api/user', loginRoute);
app.use('/api/employees', testRoute);


app.listen(process.env.PORT, () => {
    console.log('3005 dinlemede, tamam.');
});
