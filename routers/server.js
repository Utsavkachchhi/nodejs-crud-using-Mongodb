const {Router} = require('express')
const router =  new Router();
const {AddUser} = require("../controllers/UserController.js")
// const {AddUser} = require('../controllers/UserController')


router.post('/',AddUser)


module.exports = router
