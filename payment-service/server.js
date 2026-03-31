require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/config/db');

// Connect to database
connectDB();

const PORT = process.env.PORT || 8084;

const server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`);
    // Close server & exit process
    server.close(() => process.exit(1));
});
