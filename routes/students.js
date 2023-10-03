const router = require("express").Router();
let Student = require("./models/Student");

//create
router.route("/add").post((res,req)=>{ 

    const name = req.body.name;
    const age = req.body.age;
    const gender = req.body.gender;

    const newstudent = new Student({
        name,
        age,
        gender
    })
    
    newstudent.save().then(()=>{
        res.json("add succesfully")
    }).catch((err)=>{
        console.log('err');
    })

})

//read
router.route("/").get((res,req)=>{

    Student.find((Student)=>{
        res.json(Student)
    }).catch((err)=>{
        console.log(err);
    })
})
//update

router.route("/update:id").put(async(req,res)=>{
    let userid = req.body.id;
    const {name, age, gender} = req.body;

    const updateStudent = {
        name,
        age,
        gender
    }

//     const name = req.body.name;
//     const age = req.body.age;
//     const gender = req.body.gender;

//    const updateStudent = new Student({
//     name,
//     age,
//     gender
//    })
 

   const update = await Student.findByIdAndUpdate(userid,updateStudent).then(()=>{
    res.status(200).send({status:"user update", user:update})
   }).catch((err)=>{
    console.log(err);
    res.status(500).send({status:"error with update data"})
   })

})

//delete







module.export = router;






