const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    googleId:{
        type:String,
        unique:true,
        required:true
    },
    displayName:{
        type:String,
        required:true,
        unique:true
    },
    firstName:{
        type:String,
        required:true
    },
    lastName:{
        type:String,
        required:true
    },
    photos:{
        type:String,
        required:false
    },
},{ timestamps: { createdAt: 'created_at' }});


module.exports = mongoose.model('Users', userSchema);