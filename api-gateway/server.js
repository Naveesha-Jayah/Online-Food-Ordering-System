require('dotenv').config();

const app = require('./src/app');

const PORT = process.env.PORT || 8080;

const startGateway = async () => {
  try {
    app.listen(PORT, () => {
      console.log(`
========================================
🚀 API Gateway is running on port ${PORT}
========================================

📍 Gateway URL: http://localhost:8080/api-docs

📌 Available Routes:
  • User Service:       http://localhost:${PORT}/api/users
  • Restaurant Service: http://localhost:${PORT}/api/restaurants
  • Order Service:      http://localhost:${PORT}/api/orders
  • Payment Service:    http://localhost:${PORT}/api/payments
  • Delivery Service:   http://localhost:${PORT}/api/delivery

✅ Health Check: http://localhost:${PORT}/health

========================================
      `);
    });
  } catch (error) {
    console.error('Failed to start API Gateway:', error.message);
    process.exit(1);
  }
};

startGateway();
