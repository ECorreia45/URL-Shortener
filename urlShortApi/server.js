require('./modules/serverSetup');
const util = require('./modules/debug');
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
  util.debug('info', `Ready to go at port => ${process.env.PORT}`, ['19', __filename], 'OK', null);
  util.debug('info', `Debug mode => ${process.env.DEBUG}`, ['19', __filename], 'OK', null);
});

module.exports = server;
