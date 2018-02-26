const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const routes = require('./routes');

const db = mongoose.connection;
mongoose.connect('mongodb://localhost/roadtripr');
db.on('error', console.error.bind(console, 'connection error:'));

const app = express();
app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use('/api', routes);

app.listen(3000);
