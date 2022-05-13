
const express = require("express");
require("./config/Conn")

const User = require("./model/User")
const router = require('./routers/server')
const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended : false}))
app.use('/api/user',router)


app.listen(8080)