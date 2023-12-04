const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors'); // Import the cors middleware


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' folder
app.use(cors()); // Enable CORS for all routes

// API endpoint for check-in
app.post('/checkin', (req, res) => {
    const { name } = req.body;
    const currentTime = new Date().toLocaleTimeString();

    if (name) {
        res.json({ message: `Check-in ${currentTime} successful`, enterTime: new Date() });
    } else {
        console.error('Invalid check-in request:', req.body);
        res.status(400).json({ error: 'Name is required' });
    }
});

// API endpoint for check-out
app.post('/checkout', (req, res) => {
    const { name } = req.body;
    const currentTime = new Date().toLocaleTimeString();

    if (name) {
        res.json({ message: `Check-out ${currentTime} successful`, exitTime: new Date() });
    } else {
        console.error('Invalid check-out request:', req.body);
        res.status(400).json({ error: 'Name is required' });
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});




