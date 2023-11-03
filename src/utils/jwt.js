const jwt = require("jsonwebtoken");

const verifyToken = (token) => {
    return jwt.verify(token, "lukytoken54321"); 
}

const generateToken = (id, email) => {
    return jwt.sign({id, email}, "lukytoken54321", {expiresIn: '1h'});
}

module.exports = {generateToken, verifyToken}