module.exports = (express) => {
  const router = express.Router();

  /* eslint-disable global-require */
  router.use('/', require('./api/url')(express));
  router.use('/', require('./api/crud')(express));
  router.use('/', require('./api/go')(express));

  return router;
};
