const router = require('express').Router();
const eventoRutas = require('./eventoRoutes');

router.use('/api/eventos', eventoRutas);

module.exports = router;//just for changes