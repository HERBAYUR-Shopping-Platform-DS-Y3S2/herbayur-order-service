

const express = require('express');
const connectDB = require('./config/db');
const cors = require('cors');
const path = require('path');

const app = express();


connectDB();


app.use(cors({ origin: true, credentials: true }));


app.use(express.json({ extended: false }));


app.use(express.json({ extended: false }));

const PORT = process.env.PORT || 5004;



app.use(express.static(path.join(__dirname, '/client/build')))
   .listen(PORT, () => console.log(`Listening on ${PORT}`));

