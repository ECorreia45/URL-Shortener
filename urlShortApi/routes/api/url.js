module.exports = function (express) {

    var router = express.Router();

    //Set the welcome message and basic API instruction on the base home url
    router.get('/', function (req, res) {
       res.send(
           "\n** Welcome to the URL Shorten API\n\n" +
           "'This API allows you to take any url and get a shorten version of it.'\n\n" +
           "To Star using it:\n\n" +
           "step #1 => Add 'api' on the current url\n" +
           "step #2 => Add api version. 'v1' is the current and only version. " +
           "\n           So you would have 'api/v1'\n" +
           "step #3 => Add the url without 'http://' and without 'www'. " +
           "\n           For example 'api/v1/google.com' "
       );
    });

    //Provide help with the next step to follow
    router.get('/api', function (req, res) {
        res.send(
            "\n** Still more to go\n\n" +
            "Now specify the version number like this" +
            "\n           'api/v1'\n"
        );
    });

    //Provide API versions and current version with some extra instruction
    router.get('/api/v1', function (req, res) {
        res.send(
            "\n** Now specify the URL to be shorten\n\n" +
            "** RULES ***\n\n" +
            "=> Do not include 'http://' \n" +
            "=> Do not include 'www' \n" +
            "\n     For example 'api/v1/google.com'\n\n" +
            "*** CRUD ****\n\n" +
            "=> To get ALL Data type 'api/v1/url' with GET method\n" +
            "=> To get ONE Data type 'api/v1/url/:id' with GET method\n" +
            "=> To Delete ONE Data type 'api/v1/url/:id' with DELETE method\n" +
            "=> To UPDATE ONE Data type 'api/v1/url/:id' with POST method\n" +
            "\n\n\nCurrent Version: v1\n" +
            "Latest Version: v1\n\n"
        );
    });

    return router;
};