const dotenv = require('dotenv');
const app = require('./src/app');
const connectDB = require('./src/config/db');

/**
 * Load Environment Variables
 */
dotenv.config();

/**
 * Main Server Execution
 * 1. Connect to MongoDB
 * 2. Start Express Application on PORT defined in .env
 */
const startServer = async () => {
    try {
        // Connect to MongoDB
        await connectDB();

        const PORT = process.env.PORT || 8081;

        // Start listening
        app.listen(PORT, () => {
            console.log(`User Service is running on port ${PORT}`);
            console.log(`Swagger documentation available at: http://localhost:${PORT}/api-docs`);
        });
    } catch (error) {
        console.error('Failed to start User Service:', error.message);
        process.exit(1);
    }
};

startServer();
