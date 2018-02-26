const routes = require('express').Router();
const map = require('./map');

routes.use('/map', map);

routes.use('/', (req, res) => {
  res.json({ route: '/' });
});

module.exports = routes;
