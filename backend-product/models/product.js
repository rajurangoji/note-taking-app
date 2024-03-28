const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    productName: {
        type: 'string',
        require: true
    },
    description: {
        type: 'string',
        require: true
    },
    price: {
        type: 'number',
        require: true
    },
    quantity: {
        type: 'number',
        require: true
    },
    category: {
        type: 'string',
        require: true
    },
    brand: {
        type: 'string',
        require: true
    },
    reviews: {
        type: [String],
        default: []
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        default: Date.now,
    }


})

module.exports = mongoose.model('product', productSchema);