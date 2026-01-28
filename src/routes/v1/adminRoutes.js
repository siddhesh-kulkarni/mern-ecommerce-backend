const express = require('express');

const router = express.Router();

// Import controllers
const adminController = require('../../controller/adminController');

// // Admin routes
// router.post('/login', adminController.login);
// router.post('/register', adminController.register);
// router.get('/profile', adminController.getProfile);
// router.put('/profile', adminController.updateProfile);

module.exports = router;
