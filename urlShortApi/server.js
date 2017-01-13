require('./modules/serverSetup');
require('./modules/debug');
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//serve a static home page
app.use('/', express.static(__dirname + '/public'));
//provide the api route
app.use("/", require('./routes/')(express));

var server = app.listen(process.env.PORT, function () {
   console.log("Ready to go at port => " + process.env.PORT);
   console.log("Debug mode => " + process.env.DEBUG);
});

module.exports = server;