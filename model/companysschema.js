const mongoose = require("mongoose")
const Schema = mongoose.Schema

const ProfileSchema = new Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
      },
   
    field:{
        type:String,
        required:true
    },
    about:{
        type:String,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:Number,
        required:true
    }
})

module.exports=CompanyProfile=mongoose.model("CompanyProfile", ProfileSchema)