const router = require('express').Router();

const  {User} = require('../../models');




const getAllUsers = ((req,res) => {
    User.find({})
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err))
})

const createUser = ((req,res)=>{
    User.create(req.body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
})


const getUserById = ((req,res) => {
    User.findOne({_id:req.params.id})
    .then(dbUser => {
        if(!dbUser){
            res.status(404).json({message: "No user with that id"});
            return;
        }
        res.json(dbUser);
        
    })
    .catch(err => {
        console.log("Error Runing")
        res.status(400).json(err);
    });
});




// use router.'route' chaining
router.route('/')
.get(getAllUsers)
.post(createUser);

router.route('/:id')
.get(getUserById)
.put()
.delete();


module.exports = router;
