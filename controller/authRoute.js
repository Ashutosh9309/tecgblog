const express = require('express');
const authRoute = express.Router();
const passport = require('passport');


authRoute.get('/google',
passport.authenticate('google', { scope: ['profile'] }));

authRoute.get('/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect('/dashboard');
  });

authRoute.get('/logout',(req,res)=>{
    req.logOut()
    res.redirect('/')
})

  module.exports = authRoute