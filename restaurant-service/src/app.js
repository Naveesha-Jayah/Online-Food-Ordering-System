const express = require('express');
const cors = require('cors');
const errorHandler = require('./middleware/errorHandler');
const restaurantRoutes = require('./routes/restaurantRoutes');
const swaggerSetup = require('./swagger/swaggerConfig');

const app = express();

app.use(cors());
app.use(express.json());

// Swagger (Must be before main routes to prevent ID conflict)
swaggerSetup(app);

// Routes
app.use('/api', restaurantRoutes);

// Error Middleware
app.use(errorHandler);

module.exports = app;
