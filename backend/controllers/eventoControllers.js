const eventoModel = require('../models/eventoModel');

const getAllEventos = async (req, res) => {
    try {
        const eventos = await eventoModel.find();
        res.status(200).json(eventos);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const getEventoById = async (req, res) => {
    try {
        const evento = await eventoModel.findById(req.params.id);
        if (!evento) {
            return res.status(404).json({ message: 'Evento not found' });
        }
        res.status(200).json(evento);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const createEvento = async (req, res) => {
    const evento = new eventoModel(req.body);
    try {
        const savedEvento = await evento.save();
        res.status(201).json(savedEvento);
    } catch (error) {
        console.error('Error al crear el evento controlador:', error);
        res.status(400).json({ messageCONTROLADOR: error.message });
    }
}
const updateEventoById = async (req, res) => {
    try {
        const updatedEvento = await eventoModel.findByIdAndUpdate(
            req.params.id,
            req.body, { new: true });

        if (!updatedEvento) {
            return res.status(404).json({ message: 'Evento not found' });
        }
        res.status(200).json(updatedEvento);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}
const deleteEventoById = async (req, res) => {
    try {
        const deletedEvento = await eventoModel.findByIdAndDelete(req.params.id);
        if (!deletedEvento) {
            return res.status(404).json({ message: 'Evento not found' });
        }
        res.status(200).json({ message: 'Evento deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    getAllEventos,
    getEventoById,
    createEvento,
    updateEventoById,
    deleteEventoById
};
//just for changes