const express = require('express');
const router = express.Router();
const product = require('../models/product');
const { default: mongoose } = require('mongoose');

router.use(express.json());

router.get('/productData', async (req, res) => {
    const allProductData = await product.find()
    res.status(200).json({ allProductData })
})
router.get('/productData/:id', async (req, res) => {
    const { id } = req.params;
    const singleProduct = await product.findOne({ _id: id })
    res.status(200).json({ singleProduct })

})

router.put('/productData/:id', async (req, res) => {
    const { id } = req.params;
    const { productName } = req.body;
    const singleProductUpdate = await product.updateOne({ _id: id }, {productName : productName})
    res.status(200).json({ singleProductUpdate })

})


router.post('/productData', async (req, res) => {
    console.log(req.body)
    const productData = await product.create(req.body);
    res.status(200).json({ productData })
})
module.exports = router;


