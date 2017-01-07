require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use('/', express.static(__dirname + '/public'));
app.use("/", require('./routes/')(express));

var server = app.listen(port, function () {
   console.log("Ready to go at port " + port);
});

module.export = server;