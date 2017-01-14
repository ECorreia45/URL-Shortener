const chalk = require('chalk');
const fs = require('fs');
const util = require('./debug');

const date = new Date();


// this will help format the console log format and color
exports.debug = (type, msg, location, status, data) => {
  const mode = '\n------------ DEBUG MODE ON ---------------\n';
  let tp = '';
  let st = '';
  let mesg = '';
  const dta = chalk.bold.blue;
  const loc = chalk.magenta;
  const tim = chalk.cyan;

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
      mesg = chalk.bold.green;
  }

  if (process.env.DEBUG) {
    const time = `time: [${date.getHours()}:${date.getMinutes()} ${date.getSeconds()}]\n`;
    const logMsg = `${type}: '${msg}'\nline: ${location} at ${__filename}\nStatus: ${status}\ndata: ${data}`;

    const file = `log_${date.getMonth() + 1}_${date.getDate()}_${date.getFullYear()}_${date.getHours()}.txt`;
    const title = `================ Log of ${date.getMonth() + 1} ${date.getDate()} ${date.getFullYear()} =====`;

    if (!fs.existsSync(`urlShortApi/logs/${file}`)) {
      fs.writeFile(`urlShortApi/logs/${file}`, title, (err) => {
        if (err) {
          util.debug('error', `Couldn't create log "urlShortApi/logs/${file}"`, ['43', __filename], '500', null);
        }
      });
    }

    fs.appendFile(`urlShortApi/logs/${file}`, `\n\n${time}${logMsg.trim()}`, (err) => {
      if (err) {
        util.debug('error', `Couldn't save the log message to "urlShortApi/logs/${file}"`, ['43', __filename], '500', null);
      }
    });
    /* eslint-disable no-console */
    console.log(`${mode}${tim(time)}${tp(type)}: ${mesg(msg)}\n${loc(`line: ${location[0]} at ${location[1]}`)}\nStatus: ${st(status)}\ndata: ${dta(data)}`);
  }
};

// this will disable any console.log on the page
if (!process.env.DEBUG) {
  console.log = () => {};
}

