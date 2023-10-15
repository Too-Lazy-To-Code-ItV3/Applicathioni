const mongoose = require('mongoose');


const Item= mongoose.model('Item', {

    name: String,
    price:Number,
    description:String,
    image: String

});

module.exports = Item;