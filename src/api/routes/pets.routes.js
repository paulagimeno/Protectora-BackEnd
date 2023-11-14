const express = require('express');

const {getByID, registerPet, allPets, updatePet } = require('../controllers/pets.controllers');
const router = express.Router();
const upload = require('../../middleware/upload.file')

router.post('/register', upload.single('image'), registerPet);
router.get('/', allPets);
router.get('/:id', getByID)
router.put('/updatePet/:id', upload.single('image'), updatePet)

module.exports = router;