// Load environment variables from .env file
require('dotenv').config();

// Import the Express framework
const express = require('express');
const expressLayout = require('express-ejs-layouts');

const connectDB = require('./server/config/db');

// Create an instance of the Express application
const app = express();

  
// Connect to DB
connectDB();

app.use(express.static('public'));

// Define the port number
const PORT = process.env.PORT || 5000; // Use the environment variable if available, otherwise use 5000

 // Templating Engine
app.use(expressLayout);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');


app.use('/', require('./server/routes/main'))

// Start the server and listen on the specified port
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
