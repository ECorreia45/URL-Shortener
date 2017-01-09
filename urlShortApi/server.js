require('dotenv').config();
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
const port = process.env.PORT; //port where the page is served

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

//serve a static home page
app.use('/', express.static(__dirname + '/public'));
//provide the api route
app.use("/", require('./routes/')(express));

var server = app.listen(port, function () {
   console.log("Ready to go at port " + port);
});

module.export = server;