module.exports = function(express) {
    const router = express.Router();

    router.use('/', require('./api/url')(express));
    router.use('/', require('./api/crud')(express));
    router.use('/', require('./api/go')(express));

    return router;
};