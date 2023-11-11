const Pet = require("../models/pet.model");

const registerPet = async (req, res)=> {
    try {
        const petBody = new Pet(req.body)

        if(req.file && req.file.path){
            petBody.images = req.file.path;
        }

        const createdpet = await petBody.save();
        return res.json({ success: true, message: "Agregado con exito", data: createdpet})
    } catch (error) {

    }
};

const allPets = async (req, res) => {
    try {
        const allPets = await Pet.find();
        return res.status(200).json(allPets);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getByID = async (req, res) => {
    try {
        const { id } = req.params
        const idPet = await Pet.findById(id);
        return res.status(200).json(idPet);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updatePet = async (req, res) => {
    try{
        const {id} = req.params;
        const petBody = {...req.body};
        petBody._id = id;

        if(req.file && req.file.path){
            petBody.images = req.file.path;
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