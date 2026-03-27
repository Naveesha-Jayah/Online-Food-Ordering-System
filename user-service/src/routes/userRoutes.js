const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { protect } = require('../middleware/authMiddleware');

/**
 * Route Definitions for /api/users
 */

// POST /api/users/register - Register a new user
router.post('/register', userController.registerUser);

// POST /api/users/login    - Authenticate user
router.post('/login', userController.loginUser);

// GET /api/users/profile   - Get logged in user profile (protected)
router.get('/profile', protect, userController.getProfile);

// GET /api/users           - Get all users
router.get('/', userController.getAllUsers);

// GET /api/users/:id       - Get user by ID
// PUT /api/users/:id       - Update user by ID
// DELETE /api/users/:id    - Delete user by ID
router.route('/:id')
    .get(userController.getUserById)
    .put(userController.updateUser)
    .delete(userController.deleteUser);

module.exports = router;
