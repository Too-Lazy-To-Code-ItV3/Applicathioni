const express = require('express')
const mongoose = require('mongoose')
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();

UserRoutes = require('./routes/UserRoute');
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/User', UserRoutes);


//connect to mongoDb 
const connectionParams = {
    useNewUrlParser: true,
    useUnifiedTopology: true
}

mongoose.connect(process.env.DATABASE, connectionParams)
    .then(() => {
        console.log('Connected to the database ')
    })
    .catch((err) => {
        console.error(`Error connecting to the database. n${err}`);
    })

app.listen(5000, () => {
    console.log("Server running on port 5000")
})
