const express = require('express');
const router = express.Router();
const eventoCtrl = require('../controllers/eventoControllers');

router.get('/', eventoCtrl.getAllEventos);
router.get('/:id', eventoCtrl.getEventoById);
router.post('/', eventoCtrl.createEvento);
router.put('/:id', eventoCtrl.updateEventoById);
router.delete('/:id', eventoCtrl.deleteEventoById);

module.exports = router;

