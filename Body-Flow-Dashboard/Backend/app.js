// DEPENDENCIES
const express = require('express')
const cors = require('cors')

const app = express();

//MIDDLEWARE
require("dotenv").config
app.use(cors());

//CONTROLLERS
//HEALTH CHECK ROUTE
// app.get("/", (req, res) => res.status(200).json({data: `Hello World`}))

module.exports = app