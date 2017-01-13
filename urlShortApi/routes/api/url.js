const util = require('../../modules/debug');

module.exports = (express) => {
  const router = express.Router();

  // Provide help with the next step to follow
  router.get('/api', (req, res) => {
    util.debug('info', '/api endpoint accessed successfully', '9', res.statusCode, null);
    res.send(
      `\n** Still more to go\n\n
      Now specify the version number like this\n
      \n           'api/v1'`);
  });

  // Provide API versions and current version with some extra instruction
  router.get('/api/v1', (req, res) => {
    util.debug('info', '/api/v1 endpoint accessed successfully', '19', res.statusCode, null);
    res.send(
      `\n** Now specify the URL to be shorten using POST method like this\n
      \n           'api/v1/url/google.com'`);
  });

  return router;
};
