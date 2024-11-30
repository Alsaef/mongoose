const mongoose = require('mongoose');

const userSchema=mongoose.Schema({
   name:{type:String,required: true},
   email:{type:String,required: true,unique: true},
   age:{type:Number},
   role:{type:String,enum:['admin','user','super-admin']}
})

const user=mongoose.model('user',userSchema)

module.exports=user