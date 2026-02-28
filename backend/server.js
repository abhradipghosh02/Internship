const express = require('express');
const cors = require('cors');
const path = require('path'); // Added this
const app = express();
const PORT = 3000;

app.use(cors());

// --- ADD THIS SECTION TO LOAD FRONTEND ---
// This serves all files in the frontend folder (CSS, JS, Images)
app.use(express.static(path.join(__dirname, '../frontend')));

// This ensures that visiting http://localhost:3000 loads index.html
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});
// ------------------------------------------

// Your existing API route
app.get('/api/metrics', (req, res) => {
 res.json([
   { id: 1, number: "98%", label: "EFFICIENCY" },
   { id: 2, number: "2.4s", label: "ACCELERATION" },
   { id: 3, number: "0-100", label: "REAL QUICK" }
 ]);
});

app.listen(PORT, () => {
    console.log(`Backend running at http://localhost:${PORT}`);
});
