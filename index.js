const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const dotenv = require('dotenv');
const app = express();

// Load environment variables
dotenv.config();

// Middleware
app.use(cors());
app.use(express.json()); // Parse JSON request bodies

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI, {
          useNewUrlParser: true,
          useUnifiedTopology: true,
})
          .then(() => console.log('MongoDB connected'))
          .catch(err => console.log('MongoDB connection error:', err));

// Simple route for testing
app.get('/', (req, res) => {
          res.send('Hello from the backend!');
});

// Define the port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
});