const express = require('express');

const { nuevaDireccion, getByName, getByCategory, getByID, allDirecciones, deleteDireccion } = require('../controllers/direcciones.controllers');
const router = express.Router();
const upload = require('../../middleware/upload.file');

router.post('/', upload.single('image'), nuevaDireccion);
router.get('/getByName/:name', getByName);
router.get('/', allDirecciones);
router.get('/getByID/:id', getByID);
router.get('/getByCategory/:category', getByCategory);
router.delete('/delete/:id', deleteDireccion);



module.exports = router