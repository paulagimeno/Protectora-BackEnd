const express = require('express');

const { updateForm, getFormByID, allForms, applyForm} = require('../controllers/forms.controllers');
const router = express.Router();
const upload = require('../../middleware/upload.file');

router.post('/apply', applyForm);
router.get('/', allForms);
router.get('/:id', getFormByID);
router.put('/updateForm/:id', updateForm);

module.exports = router