var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParse = require('body-parser');

var app = express();
mongoose.Promise = global.Promise;


const config = require('./config/database');
mongoose.connect(config.database);

let db = mongoose.connection;

//check connection
db.open('open', function() {
    console.log('connectio to mongodb');
});

//check db error
db.on('error', function(err) {
    console.log(err);
});

var students = require('./api/models/students');

app.set('port', (process.env.PORT || 3061));
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());


var routes = require('./api/routes/app-route');
routes(app);

/** start the server */
app.listen(app.get('port'), function() {
    console.log('server listening to port http://localhost:' + app.get('port'));
});