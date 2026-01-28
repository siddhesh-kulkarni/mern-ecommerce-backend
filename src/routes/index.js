const express = require('express');

const router = express.Router();

// Import route handlers
const adminRoutes = require('./v1/adminRoutes');

// Mount routes
router.use('/admin', adminRoutes);

// Health check
router.get('/health', (req, res) => {
    res.status(200).json({ message: '✅ API is running' });
});

module.exports = router;
