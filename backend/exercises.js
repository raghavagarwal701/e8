const router=require('express').Router();
let Exercise=require('./exercise.model');

// router.route('/').get((req,res)=>{
//     Exercise.find() //.find() returns a promise
//         .then(exercises=>res.json(exercises))
//         .catch(err=>res.status(404).json('Error:'+err));
// });
router.route('/form').get((req,res)=>{
    res.json("Hey Raghav");
    console.log("triggered");
    // Exercise.find() //.find() returns a promise
    //     .then(exercises=>res.json("Hey"))
    //     .catch(err=>res.status(404).json('Error:'+err));
});
router.route('/form').post((req,res)=>{
    const username=req.body.username;
    const companyName=req.body.companyName;
    const phoneNumber=Number(req.body.phoneNumber);
    const email=req.body.email;
    console.log(req.body);
    const newExercise=new Exercise({
        username,
        companyName,
        phoneNumber,
        email,
    });

    newExercise.save() //returns a promise
        .then(()=>res.json('Exercise added!'))
        .catch(err=>{
            res.status(404).json('Error:'+err);
            console.log("Idhar hai error");
        });
});

// router.route('/:id').get((req,res)=>{
//     Exercise.findById(req.params.id)
//         .then(exercise=>res.json(exercise))
//         .catch(err=>res.status(400).json('Error '+err));
// })

// router.route('/:id').delete((req,res)=>{
//     Exercise.findByIdAndDelete(req.params.id)
//         .then(exercise=>res.json(exercise))
//         .catch(err=>res.status(400).json('Error '+err));
// })

// router.route('/update/:id').post((req,res)=>{
//     Exercise.findById(req.params.id)
//         .then(exercise=>{
//             exercise.username=req.body.username;
//             exercise.description=req.body.description;
//             exercise.duration=Number(req.body.duration);
//             exercise.date=Date.parse(req.body.date);

//             exercise.save()
//                 .then(()=>res.json('Exercise updated!'))
//                 .catch(err=>res.status(400).json('Error '+err));
//         })
// })

module.exports=router;