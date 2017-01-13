var go = require('../../modules/go');
var http = require('http');

const util = require('../../modules/debug');

module.exports = function (express) {

    var router = express.Router();

    //Get the shorten url and get the correspondent
    router.get('/go/:url', function (req, res) {
        var url = {
            shortURL: "/go/" + req.params.url
        };
        go.find(url, function (err) {
			util.debug('error', err, '11', '500', JSON.stringify(err));
            res.status(500).json(err);
        }, function (data) {
            res.setHeader('Content-Type', 'text/html');
			res.redirect(302, data.url);
        });
    });
    return router;
};