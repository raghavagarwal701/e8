const mongoose=require('mongoose');

const Schema=mongoose.Schema;

const formSchema=new Schema({
    name:{type:String,required:true},
    companyName:{type:String,required:true},
    phoneNumber:{type:String,required:true},
    email:{type:String,required:true},
},{
    timestamps:true,
})

const form=mongoose.model('Form',formSchema);

module.exports=form;