const express = require('express');
const app = express();
const product = require('./routers/product');
const { default: mongoose } = require('mongoose');


app.use('/product', product)

const connectionToMD = async () => {
    try {
        const uri = 'mongodb://127.0.0.1:27017/product';
        await mongoose.connect(uri);
        console.log('connected to the database')
        app.listen(4000, () => {
            console.log('server started on the port 4000')
        })

    } catch (err) {
        console.log({ message: 'internal server error in connecting database', err: err.message })
    }
}

connectionToMD();