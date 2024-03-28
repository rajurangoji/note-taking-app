const express = require('express');
const router = express.Router();
const userModel = require('../Models/userModel')
router.use(express.json())

router.get('/user-all', async (req, res) => {
    const allUsers = await userModel.find()
    res.status(200).json({ allUsers })
})

router.post('/data', async (req, res) => {
    const newdata = req.body;
    console.log(newdata)
    const data = await userModel.create(req.body)
    res.status(200).json({ data })
})
module.exports = router;
