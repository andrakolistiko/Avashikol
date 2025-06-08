const mongoose = require('mongoose');
//just for changes
const EventoSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: [true, 'El título es obligatorio'],
    trim: true,
    minlength: [3, 'El título debe tener al menos 3 caracteres'],
    maxlength: [100, 'El título no puede tener más de 100 caracteres']
  },
  descripcion: {
    type: String,
    required: [true, 'La descripción es obligatoria'],
    minlength: [10, 'La descripción debe tener al menos 10 caracteres'],
    maxlength: [100, 'La descripción no puede tener más de 100 caracteres']
  },
  fecha: {
    type: Date,
    required: [true, 'La fecha es obligatoria'],
    validate: {
      validator: function(value) {
        return value > new Date();
      },
      message: 'La fecha debe ser en el futuro'
    }
  },
  lugar: {
    type: String,
    required: [true, 'El lugar es obligatorio'],
    trim: true,
    minlength: [3, 'El lugar debe tener al menos 3 caracteres'],
    maxlength: [100, 'El lugar no puede tener más de 200 caracteres']
  },
  precio: {
    type: Number,
    required: [true, 'El precio es obligatorio'],
    min: [0, 'El precio no puede ser negativo']
  },
  imagen: {
    type: String,
    required: [true, 'La URL de la imagen es obligatoria'],
    validate: {
      validator: function(v) {
        return /^https?:\/\/.+\.(jpg|jpeg|png|webp|gif)$/.test(v);
      },
      message: 'Debe ser una URL válida de imagen (jpg, png, etc.)'
    }
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('Evento', EventoSchema);
