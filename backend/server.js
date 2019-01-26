const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config();

mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true });
mongoose.connection.on('error', error => console.log(error));

const app = express();

// Middleware
app.use(bodyParser.json({ extended: false }));
app.use(cors());

// Health check
app.get('/ping', (req, res) => {
  res.set('text/plain').status(200).send('pong');
});

// Fallback 404 response
app.get('*', (req, res) => {
  res.status(404).json({ isSuccess: false, error: 'The specified URI is unknown for the REST service.' });
});

const port = process.env.PORT || 3002;

app.listen(port, () => console.log(`Server started on port ${port}`));
