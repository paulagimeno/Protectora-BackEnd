const express = require('express');

const { updateForm, getFormByID, allForms, applyForm, deleteForm} = require('../controllers/forms.controllers');
const router = express.Router();
const upload = require('../../middleware/upload.file');

router.post('/apply', upload.none(), applyForm);
router.get('/', allForms);
router.get('/:id', getFormByID);
router.put('/updateForm/:id', upload.none(), updateForm);
router.delete('/delete/:id', deleteForm);

module.exports = router