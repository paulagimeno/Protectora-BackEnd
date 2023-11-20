const Direcciones = require('../models/direcciones.model');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const nuevaDireccion = async (req, res)=> {
    try {
        const body = req.body
        const direcciones = new Direcciones(body)
        if(req.file && req.file.path){

            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
            direcciones.image = cloudinaryResponse.secure_url;
        }

        const createddirecciones = await direcciones.save();
        return res.status(201).json(createddirecciones)
    } catch (error) {
        console.error(error);

        return res.status(500).json({ error: 'Internal server error' });
    }
};

const getByID = async (req, res) => {
    try {
        const { id } = req.params
        const idDirecciones = await Direcciones.findById(id);
        return res.status(200).json(idDirecciones);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const getByName = async (req, res) => {
    try {
        const { name } = req.params
        const nameDirecciones = await Direcciones.find({name: name})
        return res.status(200).json(nameDirecciones);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
}; 

const getByCategory = async (req, res) => {
    try {
        const { category } = req.params
        const categoryDirecciones = await Direcciones.find({category: category})
        return res.status(200).json(categoryDirecciones);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const allDirecciones = async (req, res) => {
    try {
        const allDirecciones = await Direcciones.find();
        return res.status(200).json(allDirecciones);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const deleteDireccion = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteDireccion = await Direcciones.findByIdAndDelete(id);
        if (!deleteDireccion) {
            return res.status(404).json({ message: "Direccion does not exist" })
        }
        return res.status(200).json(deleteDireccion)

    } catch (error) {

    }
}

module.exports = { getByID, getByName, allDirecciones, getByCategory, nuevaDireccion, deleteDireccion}
