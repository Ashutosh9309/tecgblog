const path = require('path')
const express = require('express');
const app = express();
const passport = require('passport');
const port  = process.env.PORT || 8200;
const mongoDb = require('./confing/db')
const session = require('express-session');
const mongoose = require('mongoose');
const MongoStore = require('connect-mongodb-session')(session)

require('./confing/passport')(passport)
//Creating Session
app.use(session({
    secret:'Mysecretekey',
    resave:false,
    saveUninitialized:false,
    store:new MongoStore({mongooseConnection:mongoose.connection})
}))

mongoDb()
//Passport middleware
app.use(passport.initialize());
app.use(passport.session());
//For views
app.set('views','./views/pages');
//set a view engine
app.set('view engine','ejs');
//set a static file
app.use(express.static(path.join(__dirname,'public')))
//Routes
app.use('/', require('./controller/route'))
app.use('/auth/',require('./controller/authRoute'))
app.listen(port,(err)=>{
    if(err) throw err;
    console.log(`Server is running on port ${port}`)
})