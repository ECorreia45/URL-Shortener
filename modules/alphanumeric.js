const util = require('./debug');

var randomAlphaNumeric = () => {
  // const to receive new random id
  let rndID = '';
  // lists of lowercase letter and numbers
  const alphanumeric = 'abcdefghijklmnopqrstuvwxyz0123456789';

  // loop 5 times
  for (let i = 0; i < 5; i += 1) {
    // added each character grabbed at random locations from alphanumeric string
    rndID += alphanumeric.charAt(Math.floor(Math.random() * alphanumeric.length));
  }

  // util.debug('info', 'New random ID created', ['10', __filename], 'OK', rndID);
  return rndID;
};

module.exports = randomAlphaNumeric;
