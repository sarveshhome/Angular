var http = require('http'),
    fs = require('fs'),
    express = require('express'),
    mongoose = require('mongoose'),
    bodyParse = require('body-parser'),
    cors = require('cors');
var app = express();


mongoose.Promise = global.Promise;
app.use(cors({
    origin: ["http://localhost:4200"],
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"]
}));

const config = require('./config/database');
mongoose.connect(config.database);

let db = mongoose.connection;
//check db error
db.on('error', function(err) {
    console.log(err);
    process.exit();
});

//check connection
db.once('open', function() {
    console.log('connectio to mongodb');
});

var students = require('./api/models/students.model');

app.set('port', (process.env.PORT || 4061));
app.use(bodyParse.urlencoded({ extended: false }));
app.use(bodyParse.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next();
});

var routes = require('./api/routes/app-route');
routes(app);

/** start the server */
app.listen(app.get('port'), function() {
    console.log('server listening to port http://localhost:' + app.get('port'));
});