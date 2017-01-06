var express = require('express');
var app =express();
var port = 3000;

app.use("/", require('./routes/url')(express));

var server = app.listen(port, function () {
   console.log("Ready to go at port " + port);
});

module.export = server;