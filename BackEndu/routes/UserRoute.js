const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const { AllUsers, deleteUser, editUser, addUser, getUserById, login } = require('../controllers/UserController')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());

router.get('/getAll', AllUsers);

router.delete('/delete/:id', deleteUser);

router.put('/edit/:id', editUser);

router.post('/add', addUser);

router.get('/get/:id', getUserById);

router.post('/login', login)

module.exports = router;