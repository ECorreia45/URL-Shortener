const go = require('../../modules/go');
const util = require('../../modules/debug');

module.exports = (express) => {
  const router = express.Router();

  // Get the shorten url and get the correspondent
  router.get('/go/:url', (req, res) => {
    const url = {
      shortURL: `/go/${req.params.url}`,
    };
    go.find(url, (err) => {
      util.debug('error', err, ['11', __filename], '500', JSON.stringify(err));
      res.status(500).json(err);
    }, (data) => {
      res.setHeader('Content-Type', 'text/html');
      res.redirect(302, data.url);
    });
  });
  return router;
};
