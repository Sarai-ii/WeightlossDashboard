/// === DEPENDENCIES ===
const express = require('express');
const cors = require("cors");
const authenticate = require('./middleware/auth')
const authRoutes = require('./routes/authRoutes');

// === CONFIGURATION ===
const app = express();

// === MIDDLEWARE ===
app.use(cors());
app.use(express.json());

// ==== CONTROLLERS ===
app.use('/auth', authRoutes)

// === 404 PAGE === 
app.get("*", (req, res) => {
    res.status(404).send("Page not found");
});

//HEALTH CHECK ROUTE
// app.get("/", (req, res) => res.status(200).json({data: `Hello World`}))

module.exports = app