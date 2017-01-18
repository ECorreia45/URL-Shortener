// This will grab the data specified when server was served from terminal
function grab(param) {
  const i = process.argv.indexOf(param);
  return (i === -1 ? null : process.argv[i + 1]);
}

const port = grab('--port');
const debug = grab('--debug');

if (port) process.env.PORT = port;
if (debug === 'true') process.env.DEBUG = true;
