const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const direccionesSchema = new Schema({
    name: {type: String, required: true},
    category: {type: String, required: true, enum: ['veterinario', 'peluquería', 'pet friendly', 'educación', 'guardería', 'tienda']},
    latitud: {type: Number, required: true},
    altitud: {type: Number, required:true},
    image: {type: String, required: true},
    favorite: {type: [String]}, 
    score: {type: Number},
    address: {type: String, required: true}, 
    opiniones: {type: [String]}
}, {
    collection: "direcciones"
});

const Direcciones = mongoose.model('direcciones', direccionesSchema);
module.exports = Direcciones;