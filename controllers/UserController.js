const User = require("../model/User");

//Add new user
const AddUser = async (req, res) => {
  try {
    console.log("hdsfkbsdjgfuyj");
    console.log(req.body);
    const user = await User.create(req.body);

    const adduser = await user.save();
    res.status(201).send(adduser);
  } catch (e) {
    res.status(400).send(e.message);
  }
};

//Get all user

const GetUser = async (req,res) => {
   try{
     const getuser = await User.find({});
     res.send(getuser);
   }catch(e) {
     res.status(400).send(e.message);
   }
}

// Get user by id
const  GetUserById = async(req,res) => {
  try {
    const _id = req.params.id;
    const getuserbyid = await User.findById(_id);
    res.send(getuserbyid)
  }catch(e) {
    res.status(400).send(e.message);
  }
}

//update user data
const UpdateUser = async(req,res) => {
  try {
    const _id = req.params.id;
    const updateuser = await User.findByIdAndUpdate(_id,req.body,{
      new : true
    })
    res.send(updateuser)
  }catch(e) {
    res.status(500).send(e.message);
  }
}


//delete user data
const DeleteUser = async(req,res) => {
  try{
     const _id = req.params.id;
     const deleteuser = await User.findByIdAndDelete(_id);
     res.send(deleteuser);
  }catch(e) {
    res.status(500).send(e);
  }
}



module.exports = { AddUser, GetUser, GetUserById, UpdateUser, DeleteUser };
