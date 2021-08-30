const express = require('express');
const route = express.Router();
const {ensureAuth, ensureGuest} = require('../middleware/auth')





route.get('/',ensureGuest,(req,res)=>{
    return res.render('login')
});

route.get('/dashboard',ensureAuth,(req,res)=>{
    return res.render('dashboard',{userName:req.user.firstName})
})

module.exports = route