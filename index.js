const express = require('express'); // Import Express
const app = express(); // Create an Express app
const path = require('path'); // Import Path module for working with file paths
const PORT = 3000; // Define a port number

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Default route to serve index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'index.html'));
});

app.get('/add-riddle', (req, res) => {
    res.sendFile(path.join(__dirname, 'features/add-riddle','add-riddle.html'));
});

app.get('/riddle-list', (req, res) => {
    res.sendFile(path.join(__dirname, 'features/riddle-list','riddle-list.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});