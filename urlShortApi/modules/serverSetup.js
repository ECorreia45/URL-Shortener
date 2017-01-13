//This will grab the data specified when server was served from terminal
function grab(param) {
	var i = process.argv.indexOf(param);
	return (i === -1 ? null : process.argv[i+1]);
}

var port = grab('--port');
var debug = grab('--debug');

if(port) process.env.PORT = port;
if(debug == "true") process.env.DEBUG = true;
