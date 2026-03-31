const express = require('express');
const cors = require('cors');
const { createProxyMiddleware } = require('http-proxy-middleware');
const swaggerUi = require('swagger-ui-express');
require('dotenv').config();

const app = express();

// Middleware
app.use(cors());

// Proxy Middleware for User Service
app.use('/api/users', createProxyMiddleware({
  target: process.env.USER_SERVICE_URL || 'http://localhost:8081',
  changeOrigin: true,
  onProxyRes: function(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

// Proxy Middleware for Restaurant Service
app.use('/api/restaurants', createProxyMiddleware({
  target: process.env.RESTAURANT_SERVICE_URL || 'http://localhost:8082',
  changeOrigin: true,
  onProxyRes: function(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

// Proxy Middleware for Order Service
app.use('/api/orders', createProxyMiddleware({
  target: process.env.ORDER_SERVICE_URL || 'http://localhost:8083',
  changeOrigin: true,
  onProxyRes: function(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

// Proxy Middleware for Payment Service
app.use('/api/payments', createProxyMiddleware({
  target: process.env.PAYMENT_SERVICE_URL || 'http://localhost:8084',
  changeOrigin: true,
  onProxyRes: function(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

// Proxy Middleware for Delivery Service
app.use('/api/delivery', createProxyMiddleware({
  target: process.env.DELIVERY_SERVICE_URL || 'http://localhost:8085',
  changeOrigin: true,
  onProxyRes: function(proxyRes, req, res) {
    proxyRes.headers['Access-Control-Allow-Origin'] = '*';
  }
}));

// Body Parsing Middleware (Placed after proxies to prevent request body consumption)
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Unified Swagger Documentation for all Microservices
const swaggerOptions = {
  explorer: true,
  swaggerOptions: {
    urls: [
      {
        url: '/api/users/swagger.json',
        name: 'User Service'
      },
      {
        url: '/api/restaurants/swagger.json',
        name: 'Restaurant Service'
      },
      {
        url: '/api/orders/swagger.json',
        name: 'Order Service'
      },
      {
        url: '/api/payments/swagger.json',
        name: 'Payment Service'
      },
      {
        url: '/api/delivery/swagger.json',
        name: 'Delivery Service'
      }
    ]
  }
};

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(null, swaggerOptions));

// Gateway Health Check
app.get('/health', (req, res) => {
  res.json({ 
    status: 'API Gateway is running',
    timestamp: new Date().toISOString(),
    services: {
      users: `${process.env.USER_SERVICE_URL || 'http://localhost:8081'}/health`,
      restaurants: `${process.env.RESTAURANT_SERVICE_URL || 'http://localhost:8082'}/health`,
      orders: `${process.env.ORDER_SERVICE_URL || 'http://localhost:8083'}/health`,
      payments: `${process.env.PAYMENT_SERVICE_URL || 'http://localhost:8084'}/health`,
      delivery: `${process.env.DELIVERY_SERVICE_URL || 'http://localhost:8085'}/health`
    }
  });
});

// Root endpoint
app.get('/', (req, res) => {
  res.json({ 
    message: 'Online Food Ordering System - API Gateway',
    version: '1.0.0',
    endpoints: {
      users: 'http://localhost:8080/api/users',
      restaurants: 'http://localhost:8080/api/restaurants',
      orders: 'http://localhost:8080/api/orders',
      payments: 'http://localhost:8080/api/payments',
      delivery: 'http://localhost:8080/api/delivery',
      health: 'http://localhost:8080/health',
      docs: 'http://localhost:8080/api-docs'
    }
  });
});

// 404 Handler
app.use((req, res) => {
  res.status(404).json({ 
    error: 'Route not found',
    path: req.path,
    method: req.method
  });
});

// Error Handler
app.use((err, req, res, next) => {
  console.error('Gateway Error:', err.message);
  res.status(err.status || 500).json({
    error: 'Gateway Error',
    message: err.message
  });
});

module.exports = app;
