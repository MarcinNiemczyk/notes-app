const express = require('express');
const mongoose = require('mongoose');
const router = require('./router');
const app = express();
require('dotenv/config');

app.use(express.json());
app.use('/api', router);

mongoose.connect(process.env.DB_URI, () => console.log('Connected to DB'));

app.listen(3001);
