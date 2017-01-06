var express = require('express');
var bodyParser = require('body-parser');
var app =express();
var port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/", require('./routes/url')(express));

var server = app.listen(port, function () {
   console.log("Ready to go at port " + port);
});

module.export = server;