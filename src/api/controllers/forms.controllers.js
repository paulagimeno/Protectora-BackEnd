const Form = require('../models/form.model');

const applyForm = async (req, res) => {
    try {
        const body = req.body
        const form = new Form(body)
        const createdform = await form.save();
        return res.status(201).json(createdform)
    } catch (error) {
        console.error(error);
        return res.status(500).json({ error: 'Internal server error' });
    }
}



const allForms = async (req, res) => {
    try {
        const allForms = await Form.find();
        return res.status(200).json(allForms);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const getByUsername = async (req, res) => {
    try {
        const { username } = req.params
        const usernameForm = await Form.find({username: username});
        return res.status(200).json(usernameForm);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const getFormByID = async (req, res) => {
    try {
        const { id } = req.params
        const idForm = await Form.findById(id);
        return res.status(200).json(idForm);
    } catch (error) {
        console.error(error);
        return res.status(500).json(error);
    }
};

const updateForm = async (req, res) => {
    try{
        const {id} = req.params;
        const formBody = {...req.body};
        formBody._id = id;

        const updateForm = await Form.findByIdAndUpdate(id, formBody, {new: true});

        if(!updateForm){
            return res.status(404).json({message: "form does not exist"})
        }
        return res.status(200).json(updateForm)
    } catch (error){
        console.error(error);
    return res.status(500).json({ message: "Internal Server Error" });
    }

};

const deleteForm = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteForm = await Form.findByIdAndDelete(id);
        if (!deleteForm) {
            return res.status(404).json({ message: "Form does not exist" })
        }
        return res.status(200).json(deleteForm)

    } catch (error) {

    }
}



module.exports = { updateForm, getFormByID, allForms, applyForm, deleteForm, getByUsername};