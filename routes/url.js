var url = require('url');
var randomId = require("../modules/alphanumeric");

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
        var thisHost = req.get("host");


        //get user input url
        var userUrl = req.params.url;

        //grab the first 3 char of the link
        var newUrl = "ly/" + userUrl.substr(0,3);

        //generate a random alphanumeric length of 4
        newUrl += randomId();

        //get current url and take everything before 'api'
        //put everything before api, ly/ and the first 3 letters and
        // the random generated alphanumeric together to form a link
        //save with window local storage the new link and user provided url

        //provide the user with the new link
        res.send(thisHost + "/" + newUrl);
    });

    router.get('/ly/:rmdurl', function (req, res) {
        //get rmdurl
        //get window local storage with that url
        //take the user to the page
    });

    return router;

};