
const express = require("express");
require("./config/Conn")

const cors = require('cors')
const User = require("./model/User")
const router = require('./routers/server')
const app = express();



var options = {
    "origin": "*",
    "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
  }
  app.use(cors(options));
// app.use(cors())

app.use(express.json());
app.use(express.urlencoded({ extended : false}))
app.use('/api/user',router)


app.listen(8080)