const express = require('express');
const cors = require('cors')
const app = express();
const bodyParser = require('body-parser');
const userModel = require('./routers/userModel')
const mongoose = require('mongoose')

app.use('/userModel', userModel);
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(bodyParser.json());






const connectionTOMD = async () => {
    try {
        const uri = 'mongodb://127.0.0.1:27017/newdatabase';
        await mongoose.connect(uri);
        console.log('connected to the mongo database')
        app.listen(4545, () => {
            console.log('server started on the port 4545');
        })

    } catch (err) {
        console.log(err)
    }
}

connectionTOMD();

