const mongoose = require('mongoose')
const {Schema} = mongoose
const NotesSchema = new Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,//telling that this property will store the id of another modal
        ref:"user"//referencing the model by the name that is registered
    },
    title:{
        type:String,
        required:true
    },
    
    description:{
        type:String,
        required:true,
        
    },
    tag:{
        type:String,
        default:"General"
    },
  });
  module.exports = mongoose.model('notes',NotesSchema)