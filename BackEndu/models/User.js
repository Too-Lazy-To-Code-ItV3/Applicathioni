const mongoose = require('mongoose');


const User = mongoose.model('User', {

    Fname: String,
    Lname: String,
    Username: String,
    Email: String,
    Password: String,
    image: String

});

module.exports = User;