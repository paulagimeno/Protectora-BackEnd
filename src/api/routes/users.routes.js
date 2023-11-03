const express = require('express');

const {getByEmail, registerUser, loginUser, profileUser, allUsers, updateUser } = require('../controllers/users.controllers');
const { isAuth } = require('../../middleware/auth')
const router = express.Router();
const upload = require('../../middleware/upload.file')

router.post('/register', registerUser);
router.post('/login', loginUser);
router.get('/profile', [isAuth], profileUser);
router.get('/', allUsers);
router.get('/:email', getByEmail)
router.put('/updateUser/:id', upload.single('avatarImage'), updateUser)

module.exports = router;