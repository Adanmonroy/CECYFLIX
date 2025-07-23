 const mongoose = require('mongoose');

const peliculaSchema = new mongoose.Schema({
  titulo: { type: String, required: true },
  descripcion: String,
  genero: String,
  poster: String
});

module.exports = mongoose.model('Pelicula', peliculaSchema,'peliculas');