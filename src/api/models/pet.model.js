const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


const petSchema = new Schema({
    name: {type: String, required: true},
    city: {type: String, required: true, enum: ['Madrid', 'Barcelona', 'Valencia', 'Sevilla', 'Bilbao', 'Coruña']},
    species: {type: String, required: true, enum: ['Dog', 'Cat', 'Rabbit', 'Guinea Pig', 'Small mammal', 'Fish', 'Reptile', 'Amphibian', 'Insects', 'Bird']},
    birtday: {type: String, required: true},
    sex: {type: String, required: true, enum: ['male', 'female']},
    size: {type: String, required: true, enum: ['small', 'medium', 'big']},
    personality: {type: [String], required: true},
    history: {type: String, required: true}, 
    vaccinated: {type: Boolean, required: true},
    deparasitized: {type: Boolean, required: true},
    healthy: {type: Boolean, required: true},
    castrated: {type: Boolean, required: true},
    identified: {type: Boolean, required: true},
    chip: {type: Boolean, required: true},
    healthDetails: {type: String}, 
    adoptionReq: {type: String}, 
    adoptionFee: {type: Number, required: true},
    delivery: {type: Boolean, required: true}, 
    age: {type: String, enum: ['baby', 'young', 'old'], required: true},
    adopted: {type: Boolean, required: true, default: "false"},
    adoptiveParent: {type: String}
},{
    
    collection: "pet"
});






const Pet = mongoose.model("pet", petSchema);
module.exports = Pet;