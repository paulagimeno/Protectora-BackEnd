const User = require("../api/models/user.model");
const Protectora = require('../api/models/protectora.model');

const validatePassword = (pass) => {

    const regex = /[A-Za-z\d$@$!%*?&]{8,15}/;
    return regex.test(pass)
}

const validateEmailDB = async (emailUser) => {
    try {
        const validateEmail = await User.findOne({ email: emailUser })
        return validateEmail;
    } catch (error) {
        console.log(error)
    }

}

const validateProtectoraEmailDB = async (emailProtectora) => {
    try {
        const validateEmail = await Protectora.findOne({ email: emailProtectora })
        return validateEmail;
    } catch (error) {
        console.log(error)
    }

}


module.exports = { validateEmailDB, validatePassword, validateProtectoraEmailDB}