const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const exerciseSchema=new Schema({
    name:{type:String,required:true},
    companyName:{type:String,required:true},
    phoneNumber:{type:Number,required:true},
    email:{type:String,required:true},
},{
    timestamps:true,
})

const exercise=mongoose.model('Exercise',exerciseSchema);

module.exports=exercise;