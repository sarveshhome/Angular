const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const config = require('./config/server.database');
let router = require('./router/route.city');

var morgan = require('morgan');
var methodOverride = require('method-override');

var port = process.env.port | 3120;

mongoose.connect(config.database);
let db = mongoose.connection;

//check connection

db.open('open', function() {
    console.log('connect to mongodb');
});

//check error
db.on('error', function(err) {
    console.log(err);
});

//init app
const app = express();

app.use(morgan('something done in server'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

//init router

app.use('/api', router);

//http://localhost:3120/api/city

app.listen(port, function() {
    console.log("app is running on port http://localhost:" + port);
});