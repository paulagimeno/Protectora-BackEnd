const Pet = require("../models/pet.model");
const cloudinary = require("cloudinary").v2;

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
});

const registerPet = async (req, res)=> {
    try {
        const body = req.body
        const pet = new Pet(body)
        if(req.file && req.file.path){

            const cloudinaryResponse = await cloudinary.uploader.upload(req.file.path);
            pet.image = cloudinaryResponse.secure_url;
        }

        const createdpet = await pet.save();
        return res.status(201).json(createdpet)
    } catch (error) {
        console.error(error);

        return res.status(500).json({ error: 'Internal server error' });
    }
};

const allPets = async (req, res) => {
    try {
        const allPets = await Pet.find();
        return res.status(200).json(allPets);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const getByID = async (req, res) => {
    try {
        const { id } = req.params
        const idPet = await Pet.findById(id);
        return res.status(200).json(idPet);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const updatePet = async (req, res) => {
    try{
        const {id} = req.params;
        const petBody = {...req.body};
        petBody._id = id;

        if(req.file && req.file.path){
            petBody.image = req.file.path;
        }

        const updatePet = await Pet.findByIdAndUpdate(id, petBody, {new: true});

        if(!updatePet){
            return res.status(404).json({message: "pet does not exist"})
        }
        return res.status(200).json(updatePet)
    } catch (error){
        console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
    }

}

module.exports = { updatePet, getByID, allPets, registerPet}