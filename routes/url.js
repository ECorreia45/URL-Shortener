var url = require('url');
var generateUrl = require("../modules/urlGen");

module.exports = function (express) {

    var router = express.Router();

    router.get('/', function (req, res) {
       res.send("Welcome to the URL Shorten API");
    });

    router.get('/api', function (req, res) {
        res.send("Please specify the version (currently: v1) like this '/api/v1' ");
    });

    router.get('/api/v1', function (req, res) {
        res.json({
            currentVersion: "v1",
            latestVersion: "v1",
            allOtherVersions: []
        });
    });

    router.post('/api/v1/:url', function (req, res) {
        var newUrl = generateUrl(req.get("host"), req.params.url);

        //provide the user with the new link
        res.send("Shorten url => " + newUrl[0] + "\n\rFull path => " + newUrl[1] );
    });

    router.get('/ly/:rmdurl', function (req, res) {
        //get rmdurl
        //get window local storage with that url
        //take the user to the page
    });

    return router;

};