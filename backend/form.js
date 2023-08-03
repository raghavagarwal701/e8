const router=require('express').Router();
let Form=require('./form.model');

// router.route('/').get((req,res)=>{
//     res.json("Hey Raghav");
//     console.log("triggered");
// });

router.route('/add').post((req,res)=>{
    const name=req.body.name;
    const companyName=req.body.companyName;
    const phoneNumber=req.body.phoneNumber;
    const email=req.body.email;
    const newForm=new Form({
        name,
        companyName,
        phoneNumber,
        email,
    });
    newForm.save()
        .then(()=>res.json('Form added!'))
        .catch(err=>{
            res.json('Error:'+err);
        });
});

module.exports=router;