const express = require('express');
const cors = require('cors');
const swaggerUi = require('swagger-ui-express');

const orderRoutes = require('./routes/orderRoutes');
const swaggerSpec = require('./swagger/swaggerConfig');
const errorHandler = require('./middleware/errorHandler');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Order service is healthy',
    data: null,
  });
});

// Swagger Documentation (Must be before main routes to prevent ID conflict)
app.use('/api/orders/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
app.get('/api/orders/swagger.json', (req, res) => {
  res.json(swaggerSpec);
});

app.use('/api/orders', orderRoutes);

app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    data: null,
  });
});

app.use(errorHandler);

module.exports = app;
