const mongoose = require('mongoose'); 
const Schema = mongoose.Schema; 


const userSchema = new Schema({
    email:{type: String, required: true}, 
    username: {type: String, required: true}, 
    password: {type: String, required: true}, 
    role: {type: String, default: "user", enum: ["admin", "user"]},
    avatarImage: {type: String, default: ""},
    favoritePets: {type: String}, 
    notifications: {type: String},
    name: {type: String, required:true}, 
    surname: {type: String, required:true}, 
},{
    
    collection: "user"
});






const User = mongoose.model("user", userSchema);
module.exports = User; 
