const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    user:{
        type : 'string',
        require : true
    },
    password:{
        type :'string',
        require : true
    },
    email:{
        type:'string',
        require : true
    }

})

module.exports = mongoose.model('userModel' , userSchema);