const mongoose = require('mongoose');
const EventoSchema = new mongoose.Schema({
  titulo: String,
  descripcion: String,
  fecha: String,
  lugar: String,
  precio: Number,
  imagen: String
});
module.exports = mongoose.model('Evento', EventoSchema);
