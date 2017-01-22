// import url generator module that provide with a new random url
const generateUrl = require('../../modules/urlGen');
const url = require('../../modules/crud');
const util = require('debug_utility_tool');

module.exports = (express) => {
  const router = express.Router();

  // Provide the user with the generated url
  // Populate the array with generated url and user provided url
  router.get('/api/v1/url/:url', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    // object of user url and shorten url
    const newUrl = {
      url: `http://www.${req.params.url}`,
      shortURL: generateUrl(req.params.url),
    };
    util.debug(`Short URL generated from ${newUrl.url}`, 2, newUrl);
    // call the create function to add info to database
    url.create(newUrl, (err) => {
      // util.debug(err, 0);
      res.status(500).json(err);
    }, (data) => {
      util.debug('Url created successfully', 2, data);
      res.status(200).json(data);
    });
    // provide the user with the new link
    res.json({Short_URL: newUrl.shortURL });
  });

  // Get a single url
  router.get('/api/v1/urls/:id', (req, res) => {
    url.find(req.params, (err) => {
      util.debug(err, 0);
      res.status(500).json(err);
    }, (data) => {
      util.debug(`url of id ${req.params.id} returned successfully`, 2, data);
      res.status(200).json(data);
    });
  });

  // Get all urls
  router.get('/api/v1/urls', (req, res) => {
    url.findAll((err) => {
      util.debug( err, 0);
      res.status(500).json(err);
    }, (data) => {
      util.debug('Urls json data returned successfully', 2, data);
      res.status(200).json(data);
    });
  });

  // Update a single url
  router.post('/api/v1/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      util.debug(err, 0);
      res.status(500).json(err);
    }, (data) => {
      util.debug(`url of id ${req.params.id} updated successfully`, 2, data);
      res.status(200).json(data);
    });
  });

  // Delete a single url
  router.delete('/api/v1/urls/:id', (req, res) => {
    url.destroy(req.params, (err) => {
      util.debug(err, 0);
      res.status(500).json(err);
    }, (data) => {
      util.debug(`url of id ${req.params.id} deleted successfully`, 2, data);
      res.status(200).json(data);
    });
  });

  return router;
};
