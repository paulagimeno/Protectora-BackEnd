const express = require('express');

const {getByID, registerPet, allPets, updatePet } = require('../controllers/pets.controllers');
const router = express.Router();
const upload = require('../../middleware/upload.file')

router.post('/register', upload.single('images'), registerPet);
router.get('/', allPets);
router.get('/:id', getByID)
router.put('/updatePet/:id', upload.single('images'), updatePet)

module.exports = router;