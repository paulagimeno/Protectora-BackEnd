const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const protectoraSchema = new Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },

  city: { type: String },
  street: { type: String },
  number: { type: Number },

  image: { type: String },
  password: { type: String, required: true },
  phone: { type: Number, requires: true },
});

const Protectora = mongoose.model("protectora", protectoraSchema);
module.exports = Protectora;
