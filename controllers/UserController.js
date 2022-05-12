const User = require("../model/User");

const AddUser = async (req, res) => {
  try {
    console.log("hdsfkbsdjgfuyj");
    console.log(req.body);
    const user = await User.create(req.body);

    // const adduser = new User();
    // adduser.firstname = req.body.firstname;
    // adduser.lastname = req.body.lastname
    // adduser.mobile = req.body.mobile
    // adduser.email = req.body.email
    // adduser.course = req.body.course
    // adduser.Address = req.body.Address

    // await  adduser.save();
    res.status(200).json({
      status: 200,
      data: {
        user: user,
      },
    });
  } catch (e) {
    res.send(e.message);
  }
};

module.exports = { AddUser };
