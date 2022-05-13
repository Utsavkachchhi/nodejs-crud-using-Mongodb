const {Router} = require('express')
const router =  new Router();
const {AddUser, GetUser, GetUserById,UpdateUser,DeleteUser} = require("../controllers/UserController.js")


router.post('/',AddUser)
router.get('/',GetUser)
router.get('/:id',GetUserById)
router.patch('/:id',UpdateUser)
router.delete('/:id',DeleteUser)

module.exports = router
