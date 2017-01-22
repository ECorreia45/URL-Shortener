const util = require('debug_utility_tool');

module.exports = (express) => {
  const router = express.Router();

  // Provide help with the next step to follow
  router.get('/api', (req, res) => {
    util.debug('/api endpoint accessed successfully', 2);
    res.json({step: "1", next: 'enter /v1', demo: '/api/v1'});
  });

  // Provide API versions and current version with some extra instruction
  router.get('/api/v1', (req, res) => {
    util.debug('/api/v1 endpoint accessed successfully');
    res.json(
      {step: "2", next: 'GET Short URL: /api/v1/url/ + your url'}
      );
  });

  return router;
};
