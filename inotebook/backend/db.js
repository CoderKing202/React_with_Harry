const mongoose = require('mongoose') 
const mongoUri = "mongodb://localhost:27017/inotebook"//mongodb://localhost:27017/ => Previous

const connectToMango = ()=>{
    mongoose.connect(mongoUri).then(()=>{console.log("Connected to Mongo Successfully")})
}

module.exports = connectToMango