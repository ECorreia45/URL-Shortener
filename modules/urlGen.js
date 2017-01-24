const util = require('debug_utility_tool');
// load alphanumeric module that generates random alphanumeric id of length 5
const randomId = require('./alphanumeric');

const generateUrl = (url) => {
  // grab the first 3 char of the link and include the basic path
  let newUrl = `/go/${url.substr(0, 3)}`;

  // generate a random alphanumeric length of 5 and add it to the new url
  newUrl += randomId();

  util.debug('Random url created', 2, newUrl);
  return newUrl;
};

// export this module
module.exports = generateUrl;
