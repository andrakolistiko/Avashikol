const express = require('express');
const router = express.Router();
const eventoCtrl = require('../controllers/evento.controller');

router.get('/', eventoCtrl.getEventos);
router.get('/:id', eventoCtrl.getEvento);
router.post('/', eventoCtrl.createEvento);
router.put('/:id', eventoCtrl.updateEvento);
router.delete('/:id', eventoCtrl.deleteEvento);

module.exports = router;