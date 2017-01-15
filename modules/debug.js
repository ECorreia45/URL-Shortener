require('dotenv').config();
const chalk = require('chalk');
const fs = require('fs');
const util = require('./debug.js');

const date = new Date();

// this will help format the console log format and color
exports.debug = (type, msg, location, status, data) => {
  // check if debug mode is true
  if (process.env.DEBUG === 'true') {
    const mode = '\n------------ DEBUG MODE ON ---------------\n';
    let tp = '';
    let st = '';
    let mesg = '';
    const dta = chalk.bold.blue;
    const loc = chalk.magenta;
    const tim = chalk.cyan;
    // this switch checks for the type of message sent and style message, status and type accordingly
    switch (type) {
      case 'error':
        tp = chalk.bold.red;
        st = chalk.bold.red;
        mesg = chalk.bold.red;
        break;
      case 'warn':
        tp = chalk.bold.yellow;
        mesg = chalk.bold.yellow;
        break;
      default :
        tp = chalk.bold.green;
        st = chalk.bold.green;
        mesg = chalk.bold.green;}
    // get current date and hour to be append to a log msg
    // set a log msg to be append to the log file
    // create a file name based on date and hour
    // create a default log file tittle with time and date
    const time = `time: [${date.getHours()}:${date.getMinutes()} ${date.getSeconds()}]\n`;
    const logMsg = `${type}: '${msg}'\nline: ${location} at ${__filename}\nStatus: ${status}\ndata: ${data}`;
    const file = `log_${date.getMonth() + 1}_${date.getDate()}_${date.getFullYear()}_${date.getHours()}.log`;
    const title = `================ Log of ${date.getMonth() + 1} ${date.getDate()} ${date.getFullYear()} Hour: ${date.getHours()}=====`;

    // check if the log file does not exists to create it and set a title
    if (!fs.existsSync(`logs/${file}`)) {
      fs.writeFile(`logs/${file}`, title, (err) => {
        if (err) {
          util.debug('error', `Couldn't create log "urlShortApi/logs/${file}"`, ['43', __filename], '500', null);
        }
      });
    }
    // append log message to the log file PS: this will create the file if couldnt find it
    fs.appendFile(`logs/${file}`, `\n\n${time}${logMsg.trim()}`, (err) => {
      if (err) {
        util.debug('error', `Couldn't save the log message to "urlShortApi/logs/${file}"`, ['43', __filename], '500', null);
      }
    });
    /* eslint-disable no-console */
    console.log(`${mode}${tim(time)}${tp(type)}: ${mesg(msg)}\n${loc(`line: ${location[0]} at ${location[1]}`)}\nStatus: ${st(status)}\ndata: ${dta(data)}`);
  }else{
    console.log = () => {};
  }
};

