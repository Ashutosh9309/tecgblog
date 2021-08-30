const mongoose = require('mongoose');
const url = 'mongodb+srv://Ashutosh:ashutoshtiwari@cluster0.hoqxg.mongodb.net/Storybooks?retryWrites=true&w=majority';


const connectDb = async()=>{
    try{
        mongoose.connect(url);
        console.log('Mongodb connected')

    }catch(error){
        console.log(error)
    }
}


module.exports = connectDb