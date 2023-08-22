const express = require('express');
const router = express.Router();

// Routes
router.get('', (req, res) => {
    const locals = {
        title: "Ruslan Blog",
        description: "CodingWithRuslan Blog made with Node.js, Express & MongoDB"
    };
    res.render('index', locals); // Pass 'locals' directly to res.render
});

router.get('/about', (req, res) => {
    res.render('about');
});

// Export the router to be used in other modules
module.exports = router;
