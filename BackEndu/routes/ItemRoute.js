const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const { AllItems, deleteItem, editItem, addItem, getItemById} = require('../controllers/ItemController')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());

router.get('/getAll', AllItems);

router.delete('/delete/:id', deleteItem);

router.put('/edit/:id', editItem);

router.post('/add', addItem);

router.get('/get/:id', getItemById);


module.exports = router;