const Evento = require('../models/evento.model');

exports.getEventos = async (req, res) => res.json(await Evento.find());
exports.getEvento = async (req, res) => res.json(await Evento.findById(req.params.id));
exports.createEvento = async (req, res) => res.json(await Evento.create(req.body));
exports.updateEvento = async (req, res) => res.json(await Evento.findByIdAndUpdate(req.params.id, req.body, { new: true }));
exports.deleteEvento = async (req, res) => res.json(await Evento.findByIdAndDelete(req.params.id));

