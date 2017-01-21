require('./modules/serverSetup');
const util = require('debug_utility_tool');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true,
}));

// serve a static home page
app.use('/', express.static(path.join(__dirname, '/public')));
// provide the api route
app.use('/', require('./routes/')(express));

const server = app.listen(process.env.PORT, () => {
  util.debug(`Ready to go at port => ${process.env.PORT}`);
  util.debug(`Debug mode => ${process.env.DEBUG}`);
});

module.exports = server;
