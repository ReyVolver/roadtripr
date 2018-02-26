const Marker = require('../models/marker');
const routes = require('express').Router();

routes.get('/', (req, res) => {
  Marker.find({}, (err, markers) => {
    res.json(markers);
  });
});

routes.post('/create', (req, res) => {
  const { key, name, lat, lng } = req.body;
  const geocode = { lat, lng };

  Marker.create({ key, name, geocode })
    .then((marker) => {
      res.json({
        success: true,
        resource: marker,
      });
    }).catch((err) => {
      res.status(500).json(err);
    });
});

module.exports = routes;
