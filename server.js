require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const cron = require('node-cron');
const mongoose = require('mongoose');
const port = process.env.PORT || 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static('public'));
app.use(bodyParser.json());

// Import Routes
const routeUsers = require('./routes/users');

// Routes
app.use(routeUsers);

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
    .then(() => {
        app.emit('ready');
        console.log('Connected to MongoDB');
    })
    .catch((error) => console.log(error));

// Server
app.on('ready', () => {
    app.listen(port, () => {
        console.log(`Server listening on port ${port}`);
        console.log(`http://localhost:${8000}`);
    });
});