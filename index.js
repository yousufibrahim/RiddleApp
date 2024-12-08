const express = require('express'); // Import Express
const app = express(); // Create an Express app

const PORT = 3000; // Define a port number

// Set up a basic route
app.get('/', (req, res) => {
    res.send('Welcome to the Riddle App!');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});