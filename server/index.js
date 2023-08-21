const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse request body
const path = require('path');
const cors = require('cors');


const app = express();
const PORT = 4000;

// Middleware
app.use(cors({}));
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));


// Route for GET request
app.get('/', (req, res) => {
  // Replace this with the data you want to return for GET requests
  const data = { message: 'This is a GET request' };
  res.json(data);
});

app.post('/submit', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('Received POST request with form data:');
  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Message:', message);

  try {
    // Replace this with the logic to handle the form data
    const response = { message: 'Enviado Correctamente..' };
    res.json(response);
  } catch (error) {
    console.error('Error handling form data:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
