const router = require('express').Router();

const  {User, Thought} = require('../../models');


// callback for routes /

const getAllUsers = ((req,res) => {
    User.find({})
    .populate({path: 'friends', select: "-__v -_id"})
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err))
})

const createUser = ((req,res)=>{
    User.create(req.body)
    .then(dbUser => res.json(dbUser))
    .catch(err => res.status(400).json(err));
})


// callback for routes with /:id 

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
        console.log("Error Running")
        res.status(400).json(err);
    });
});

const updateUser = ((req,res) => {
    User.findOneAndUpdate(
        {_id:req.params.id},
        req.body,
        {new:true}
        )
        .then(dbUser => {
            if(!dbUser){
                res.status(404).json({message: "No user with that id"});
                return;
            }
            res.json(dbUser);

        })
        .catch(err=>{
            res.status(400).json(err)
        })
});


const deleteUser = ((req,res) => {    
    User.findOneAndDelete({_id:req.params.id})
    .then(dbUser => {
        if(!dbUser){
            res.status(404).json({message:"No user with that id"})
        }
        Thought.deleteMany({_id:{$in: dbUser.thoughts}}).then(console.log) // remove thoughts on the user
        
        
        res.json(dbUser)

    })
    .catch(err => res.json(err))
});


// Friend route callbacks
const addFriend = ((req,res) => {
    User.findOneAndUpdate(
        {_id:req.params.id},
        {$push: {friends : req.params.friendId}},
        {new:true}
    )
    .then(dbUser => {
        if(!dbUser){
            res.status(404).json({message: "No user with that id"})
        }
        res.json(dbUser);
    })
});

const deleteFriend = ((req,res) => {
    User.findOneAndUpdate(
        {_id:req.params.id},
        {$pull: {friends : req.params.friendId}},
        {new:true}
    )
    .then(dbUser => {
        if(!dbUser){
            res.status(404).json({message: "No user with that id"})
        }
        res.json(dbUser);
    })
});




// use 'router.route' chaining
router.route('/')
.get(getAllUsers)
.post(createUser);

router.route('/:id')
.get(getUserById)
.put(updateUser)
.delete(deleteUser);

// add friends reference
router.route('/:id/friends/:friendId')
.post(addFriend)
.delete(deleteFriend)


module.exports = router;
