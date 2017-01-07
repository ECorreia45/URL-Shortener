var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use("/", require('./routes/')(express));

var server = app.listen(port, function () {
   console.log("Ready to go at port " + port);
});

module.export = server;