//import url generator module that provide with a new random url
var generateUrl = require("../../modules/urlGen");
var url = require('../../modules/crud');
const util = require('../../modules/debug');

module.exports = function (express) {

    var router = express.Router();

    //Provide the user with the generated url
    //Populate the array with generated url and user provided url
    router.post('/api/v1/url/:url', function (req, res) {

        //object of user url and shorten url
        var newUrl = {
            url: "http://www."+req.params.url,
            shortURL: generateUrl(req.params.url)
        };
		console.log(`User URL: ${newUrl.url}, \nshort URL: ${newUrl.shortURL} `);
        //call the create function to add info to database
        url.create(newUrl, function (err) {
			util.debug('error', err, '20', '500', JSON.stringify(err));
			res.status(500).json(err);
        }, function (data) {
			util.debug('info', "Url created successfully", '20', '200', JSON.stringify(data));
            res.status(200).json(data);
        });

        //provide the user with the new link
        res.send("Shorten url => " + newUrl.shortURL);
    });

    //Get a single url
    router.get('/api/v1/urls/:id', function (req, res) {
        url.find(req.params, function (err) {
			util.debug('error', err, '34', '500', JSON.stringify(err));
        	res.status(500).json(err);
        }, function (data) {
			util.debug('info', "url of id " + req.params.id + " returned successfully", '34', '200', JSON.stringify(data));
            res.status(200).json(data);
        });
    });

    //Get all urls
    router.get('/api/v1/urls', function (req, res) {
        url.findAll(function (err) {
			util.debug('error', err, '45', '500', JSON.stringify(err));
            res.status(500).json(err);
        }, function (data) {
			util.debug('info', "Urls json data returned successfully", '45', '200', JSON.stringify(data));
            res.status(200).json(data);
        });
    });

    //Update a single url
    router.post('/api/v1/urls/:id', function (req, res) {
        req.body.id = req.params.id;
        url.update(req.body, function (err) {
			util.debug('error', err, '56', '500', JSON.stringify(err));
            res.status(500).json(err);
        }, function (data) {
			util.debug('info', "url of id " + req.params.id + " updated successfully", '56', '200', JSON.stringify(data));
			res.status(200).json(data);
        });
    });

    //Delete a single url
    router.delete('/api/v1/urls/:id', function (req, res) {
        url.destroy(req.params, function (err) {
			util.debug('error', err, '68', '500', JSON.stringify(err));
			res.status(500).json(err);
        }, function (data) {
			util.debug('info', "url of id " + req.params.id + " deleted successfully", '68', '200', JSON.stringify(data));
			res.status(200).json(data);
        });
    });

    return router;
};