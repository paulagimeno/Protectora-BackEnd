const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formSchema = new Schema({
    fullName: {type: String, required: true},
    city: {type: String, required: true},
    petName: {type: String, required: true},
    phoneNumber: {type: Number, required: true},
    email: {type: String, required: true},
    dni: {type: String, required: true},
    postalCode: {type: Number, required: true},
    otherPets: {type: Boolean, required: true},
    whatPets: {type: String},
    social: {type: String},
    whyAdopt: {type: String, required: true},
    petNeeds: {type: String, required: true},
    petCosts: {type: String, required: true},
    petFood: {type: String, required: true},
    houseType: {type: String, required: true},
    renting: {type: Boolean, required: true},
    petsAllowed: {type: Boolean, required: true},
    movingSoon: {type: Boolean, required: true},
    garden: {type: Boolean, required: true},
    morePeople: {type: Boolean, required: true},
    welcoming: {type: Boolean, required: true},
    visit: {type: Boolean, required: true},
    address: { type: String},
    status: {type:String, enum: ['inProcess', 'denied', 'accepted'], default: 'inProcess'}
}, {
    collection: "form"
});

const Form = mongoose.model('form', formSchema);
module.exports = Form; 