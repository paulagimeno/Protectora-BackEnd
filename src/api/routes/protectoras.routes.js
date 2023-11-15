const express = require('express'); 

const { getByEmail, registerProtectora, loginProtectora, profileProtectora, allProtectoras, updateProtectora } = require('../controllers/protectoras.controlers');
const { isAuth } = require('../../middleware/auth');
const router = express.Router();
const upload = require('../../middleware/upload.file');

router.post('/register', registerProtectora);
router.post('/login', loginProtectora);
router.get('/profile', [isAuth], profileProtectora);
router.get('/', allProtectoras);
router.get('/:email', getByEmail);
router.put('/updateProtectora/:id', upload.single('image'), updateProtectora);

module.exports = router; 
