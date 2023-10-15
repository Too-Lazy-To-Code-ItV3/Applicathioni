const express = require('express')
const mongoose = require('mongoose')
const app = express();
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require('cors');
app.use(cors());


UserRoutes = require('./routes/UserRoute');
ItemRoutes=require('./routes/ItemRoute');
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json())

app.use('/User', UserRoutes);
app.use('/Item', ItemRoutes);


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
