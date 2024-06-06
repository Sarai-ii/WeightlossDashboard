// === DEPENDENCIES ===
const express = require('express')
const router = express.Router()
const admin = require('../firebase/firebase.js');
const db = require('../db/dbconfig');
const { verifyFirebaseIdToken } = require('./authMiddleware')

// === MIDDLEWARE ===


// Route for user signup
router.post('/signup', (req, res) => {
    // Signup logic
  });
  
  // Route for user login
  router.post('/login', (req, res) => {
    // Login logic
  });
  
  // Route for user logout
  router.post('/logout', (req, res) => {
    // Logout logic
  });