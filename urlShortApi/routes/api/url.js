module.exports = function (express) {

    var router = express.Router();

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
            "\n** Now specify the URL to be shorten like this\n\n" +
            "\n           'api/v1/google.com'\n"
        );
    });

    return router;
};