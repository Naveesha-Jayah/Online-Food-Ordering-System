const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'Payment Microservice API',
            version: '1.0.0',
            description: 'API documentation for the Payment Microservice',
        },
        servers: [
            {
                url: 'http://localhost:8080',
                description: 'API Gateway'
            },
            {
                url: 'http://localhost:8084',
                description: 'Payment Service (Direct)'
            },
        ],
    },
    apis: ['./src/routes/*.js'],
};

const specs = swaggerJsdoc(options);

const swaggerDocs = (app) => {
    app.use('/api/payments/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
    app.get('/api/payments/swagger.json', (req, res) => {
        res.json(specs);
    });
};

module.exports = swaggerDocs;
