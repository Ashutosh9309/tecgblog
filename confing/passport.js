const GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
const User = require('../model/userModel')
module.exports = (passport)=>{
passport.use(new GoogleStrategy({
    clientID:'733970707996-qboproskg05pofkvuqpj5ng7aort6i96.apps.googleusercontent.com' ,
    clientSecret:'nOUuVJVj7P9FZKlpRpMthRM9',
    callbackURL: "http://localhost:8200/auth/google/callback"
  },
  async function(accessToken, refreshToken, profile, cb) {
      const newUser = {
        googleId:profile.id,
        displayName:profile.displayName,
        firstName:profile.name.givenName,
        lastName:profile.name.familyName,
        photos:profile.photos[0].value
      }
      try{
      const user = await User.findOne({googleId:profile.id})
      if(user){
        return cb(null,user)
      }else{
        user = await User.create(newUser)
      }
      }
    catch(err){
      console.log(err)
    }
  })
)
  passport.serializeUser((user,cb)=>{
      return cb(null, user)

  })
  passport.deserializeUser((id, cb)=>{
    User.findById(id,(err,user)=>{
      cb(err, user)
    })
});
};