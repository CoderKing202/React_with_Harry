const mongoose = require('mongoose')

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        // unique:true
    },
    password:{
        type:String,
        required:true//function run when a new document will be inserted 
    },
    date:{
        type:Date,
        default:Date.now//function run when a new document will be inserted 
    },
  });
  module.exports = mongoose.model('users',userSchema)