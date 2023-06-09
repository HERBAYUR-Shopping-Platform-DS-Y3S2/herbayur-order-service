

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

// routes
const orders = require('./routes/orders');  //use this when implementing routes

const app = express();


connectDB();


app.use(cors({ origin: true, credentials: true }));


app.use(express.json({ extended: false }));

// use Routes
app.use('/api/orders', orders);  //use this when implementing routes

app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5004;

app.use(express.static(path.join(__dirname, '/client/build')))
   .listen(PORT, () => console.log(`Listening on ${PORT}`));