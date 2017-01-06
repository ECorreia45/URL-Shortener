var url = require('url');
var generateUrl = require("../modules/urlGen");

module.exports = function (express) {

    var router = express.Router();

    router.get('/', function (req, res) {
       res.send(
           "\n** Welcome to the URL Shorten API\n\n" +
           "'This API allows you to take any url and get a shorten version of it.'\n\n\n" +
           "To Star using it:\n\n" +
           "step #1 => Add 'api' on the current url\n" +
           "step #2 => Add api version. 'v1' is the current and only version. " +
           "\n           So you would have 'api/v1'\n" +
           "step #3 => Add the url without 'http://' and without 'www'. " +
           "\n           For example 'api/v1/google.com' "
       );
    });

    router.get('/api', function (req, res) {
        res.send(
            "\n** Still more to go\n\n" +
            "Now specify the version number like this" +
            "\n           'api/v1'\n"
        );
    });

    router.get('/api/v1', function (req, res) {
        res.send(
            "\n** Now specify the URL to be shorten\n\n" +
            "** RULES ***\n\n" +
            "=> Do not include 'http://' \n" +
            "=> Do not include 'www' \n" +
            "\n     For example 'api/v1/google.com'" +
            "\n\n\nCurrent Version: v1\n" +
            "Latest Version: v1\n"
        );
    });

    router.post('/api/v1/:url', function (req, res) {
        var newUrl = generateUrl(req.params.url);

        //provide the user with the new link
        res.send("Shorten url => " + newUrl + "\n\rFull path => " + req.get("host") + "/" + newUrl );
    });

    return router;
};