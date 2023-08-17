// Import the Express framework and create a router
const express = require('express');
const router = express.Router();

// Routes
// Define a route for the root URL ('/')
router.get('/', (req, res) => {
    res.send("Hello world");
});

// Export the router to be used in other modules
module.exports = router;
