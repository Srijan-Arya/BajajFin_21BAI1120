const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

// POST endpoint for /bfhl
app.post('/bfhl', (req, res) => {
    const { data } = req.body;
    if (!data || !Array.isArray(data)) {
        return res.status(400).json({ is_success: false, error: 'Invalid data format' });
    }

    const numbers = data.filter(item => /^[0-9]+$/.test(item));
    const alphabets = data.filter(item => /^[a-zA-Z]+$/.test(item));
    const highestLowercase = alphabets.filter(char => char === char.toLowerCase()).sort().pop();

    const response = {
        is_success: true,
        user_id: "srijan",  
        email: "srijan.arya2021@vitstudent.ac.in", 
        roll_number: "21BAI1120",
        numbers: numbers,
        alphabets: alphabets,
        highest_lowercase_alphabet: highestLowercase ? [highestLowercase] : []
    };

    res.status(200).json(response);
});

// GET endpoint for /bfhl
app.get('/bfhl', (req, res) => {
    res.status(200).json({ operation_code: 1 });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
