const express = require('express');
const router = express.Router();
const bodyParser = require("body-parser");
const { AllItems, deleteItem, editItem, addItem, getItemById,upload} = require('../controllers/ItemController')

router.use(bodyParser.urlencoded({ extended: false }))
router.use(bodyParser.json());

router.get('/getAll', AllItems);

router.delete('/delete/:id', deleteItem);

router.put('/edit/:id', editItem);

router.post('/add',upload.any('image'),addItem);

router.get('/get/:id', getItemById);


module.exports = router;