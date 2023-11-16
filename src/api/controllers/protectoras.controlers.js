const Protectora = require('../models/protectora.model');
const { validateProtectoraEmailDB, validatePassword } = require("../../utils/validator");
const bycrypt = require("bcrypt");
const { generateToken } = require("../../utils/jwt");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const registerProtectora = async (req, res) => {
    try {

        const protectoraBody = new Protectora(req.body)
        const valEmail = await validateProtectoraEmailDB(req.body.email)
        if (!valEmail) {
            if (validatePassword(req.body.password)) {
                protectoraBody.password = bycrypt.hashSync(protectoraBody.password, 10)
                const createdprotectora = await protectoraBody.save();
                return res.json({ success: true, message: "Agregado con exito", data: createdprotectora })
            } else {
                return res.json({ success: false, message: "La contraseña no cumple con el patron" })
            }
        }
        return res.json({ success: false, message: "Email ya existe" })

    } catch (error) {

    }
}
const loginProtectora = async (req, res) => {
    try {
        const protectoraInfo = req.body;
        const protectoraDB = await validateProtectoraEmailDB(protectoraInfo.email);
        if (!protectoraDB) {
            return res.json({ success: false, message: "Email no existe" })
        }
        if (!bycrypt.compareSync(protectoraInfo.password, protectoraDB.password)) {
            return res.json({ success: false, message: "La contraseña no coincide" })
        }
        const token = generateToken(protectoraDB._id, protectoraDB.email);
        return res.json({ success: true, message: "login realizado", token: token, protectoraInfo: protectoraDB })

    } catch (error) {

    }

}
const profileProtectora = async (req, res) => {
    try {
        return res.status(200).json(req.protectoraProfile)
    } catch (error) {

    }
}

const getProtectoraByID = async (req, res) => {
    try {
        const { id } = req.params
        const idProtectora = await Protectora.findById(id);
        return res.status(200).json(idProtectora);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const getByEmail = async (req, res) => {
    try {
        const { email } = req.params
        const emailProtectora = await Protectora.find({email: email});
        return res.status(200).json(emailProtectora);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const allProtectoras = async (req, res) => {
    try {
        const allProtectoras = await Protectora.find();
        return res.status(200).json(allProtectoras);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updateProtectora = async (req, res) => {
    try{
        const {id} = req.params;
        const protectoraBody = {...req.body};
        protectoraBody._id = id;

        if(req.file && req.file.path){
            protectoraBody.image = req.file.path;
        }

        const updateProtectora = await Protectora.findByIdAndUpdate(id, protectoraBody, {new: true});

        if(!updateProtectora){
            return res.status(404).json({message: "protectora does not exist"})
        }
        return res.status(200).json(updateProtectora)
    } catch (error){
        console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
    }

}



module.exports = { getProtectoraByID, getByEmail, registerProtectora, loginProtectora, profileProtectora, allProtectoras, updateProtectora }