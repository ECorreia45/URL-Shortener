const chalk = require('chalk');
const fs = require('fs');
const path = require('path');
var date = new Date();


//this will help format the console log format and color
exports.debug = function (type, msg, location, status, data) {
	var mode = '\n------------ DEBUG MODE ON ---------------\n';
	var tp, st, mesg;
	var dta = chalk.bold.blue;
	var loc = chalk.magenta;
	var tim = chalk.cyan;

	switch (type){
		case "info":
			tp = chalk.bold.green;
			st = chalk.bold.green;
			mesg = chalk.bold.green;
			break;
		case "error":
			tp = chalk.bold.red;
			st = chalk.bold.red;
			mesg = chalk.bold.red;
			break;
		case "warn":
			tp = chalk.bold.yellow;
			mesg = chalk.bold.yellow;
			break;
	}
	
	if(process.env.DEBUG){
		
		var time = `time: [${date.getHours()}:${date.getMinutes()} ${date.getSeconds()}]\n`;
		var logMsg = type + ': ' + '" ' + msg +  ' " ' + '\nline: ' + location + ' at ' + __filename + '\nStatus: ' +
		status + "\ndata: " + data;
		
		var file = `log_${date.getMonth() + 1}_${date.getDate()}_${date.getFullYear()}.txt`;
		var title = `================ Log of ${date.getMonth() + 1} ${date.getDate()} ${date.getFullYear()} =====`;
		
		if(!fs.existsSync(`urlShortApi/logs/${file}`)){
			fs.writeFile(`urlShortApi/logs/${file}`, title, function (err) {
				if(err){
					console.log(`Couldn't create log "urlShortApi/logs/${file}"`);
				}
			});
		}
		
		fs.appendFile(`urlShortApi/logs/${file}`, `\n\n${time}${logMsg.trim()}`, function (err) {
			if(err){
				console.log(`Couldn't save the log message to "urlShortApi/logs/${file}"`);
			}
		});
		
		console.log(mode, tim(time) + tp(type) + ': ' + mesg('" ' + msg +  ' " ') + loc('\nline: ' + location + ' at ' + __filename) + '\nStatus: ' +
			st(status) + "\ndata: " + dta(data));
	}
};

//this will disable any console.log on the page
if(!process.env.DEBUG){
	console.log = function () {} };
