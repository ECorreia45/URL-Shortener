// import url generator module that provide with a new random url
const generateUrl = require('../../modules/urlGen');
const url = require('../../modules/crud');
const util = require('../../modules/debug');

module.exports = (express) => {
  const router = express.Router();

  // Provide the user with the generated url
  // Populate the array with generated url and user provided url
  router.post('/api/v1/url/:url', (req, res) => {
    res.setHeader('Content-Type', 'text/plain');
    // object of user url and shorten url
    const newUrl = {
      url: `http://www.${req.params.url}`,
      shortURL: generateUrl(req.params.url),
    };
    util.debug('info', `Short URL generated from ${newUrl.url}`, ['15', __filename], 'OK', JSON.stringify(newUrl));
    // call the create function to add info to database
    url.create(newUrl, (err) => {
      util.debug('error', err, ['20', __filename], '500', JSON.stringify(err));
      res.status(500).json(err);
    }, (data) => {
      util.debug('info', 'Url created successfully', ['20', __filename], '200', JSON.stringify(data));
      res.status(200).json(data);
    });
    // provide the user with the new link
    res.send(`Shorten url => ${newUrl.shortURL}`);
  });

  // Get a single url
  router.get('/api/v1/urls/:id', (req, res) => {
    url.find(req.params, (err) => {
      util.debug('error', err, ['34', __filename], '500', JSON.stringify(err));
      res.status(500).json(err);
    }, (data) => {
      util.debug('info', `url of id ${req.params.id} returned successfully`, ['34', __filename], '200', JSON.stringify(data));
      res.status(200).json(data);
    });
  });

  // Get all urls
  router.get('/api/v1/urls', (req, res) => {
    url.findAll((err) => {
      util.debug('error', err, ['45', __filename], '500', JSON.stringify(err));
      res.status(500).json(err);
    }, (data) => {
      util.debug('info', 'Urls json data returned successfully', ['45', __filename], '200', JSON.stringify(data));
      res.status(200).json(data);
    });
  });

  // Update a single url
  router.post('/api/v1/urls/:id', (req, res) => {
    req.body.id = req.params.id;
    url.update(req.body, (err) => {
      util.debug('error', err, ['56', __filename], '500', JSON.stringify(err));
      res.status(500).json(err);
    }, (data) => {
      util.debug('info', `url of id ${req.params.id} updated successfully`, ['56', __filename], '200', JSON.stringify(data));
      res.status(200).json(data);
    });
  });

  // Delete a single url
  router.delete('/api/v1/urls/:id', (req, res) => {
    url.destroy(req.params, (err) => {
      util.debug('error', err, ['68', __filename], '500', JSON.stringify(err));
      res.status(500).json(err);
    }, (data) => {
      util.debug('info', `url of id ${req.params.id} deleted successfully`, ['68', __filename], '200', JSON.stringify(data));
      res.status(200).json(data);
    });
  });

  return router;
};
