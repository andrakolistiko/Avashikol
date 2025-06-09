const express = require('express');
const router = express.Router();
const eventoCtrl = require('../controllers/eventoControllers');
const validators = require('../middlewares/eventosValidators');
const { isAuthenticated } = require('../oauth/authenticate');

router.get('/' ,eventoCtrl.getAllEventos);
router.get('/:id',validators.validateEventoID, eventoCtrl.getEventoById);
router.post('/',isAuthenticated,validators.validateCreateEventoBody, eventoCtrl.createEvento);
router.put('/:id',isAuthenticated,validators.validateUpdateEventoBody, eventoCtrl.updateEventoById);
router.delete('/:id',isAuthenticated,validators.validateEventoID, eventoCtrl.deleteEventoById);

module.exports = router;

//just for changes