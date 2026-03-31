const express = require('express');
const router = express.Router();
const restaurantController = require('../controllers/restaurantController');

/**
 * @swagger
 * /api/restaurants:
 *   post:
 *     tags:
 *       - Restaurant
 *     summary: Create a new restaurant
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *               cuisine:
 *                 type: string
 *               rating:
 *                 type: number
 *           example:
 *             name: "Pizza Hut"
 *             location: "Colombo"
 *             cuisine: "Italian"
 *             rating: 4.5
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Restaurant created successfully"
 *               data:
 *                 _id: "rest123"
 *                 name: "Pizza Hut"
 *                 location: "Colombo"
 *                 cuisine: "Italian"
 *                 rating: 4.5
 */
router.post('/restaurants', restaurantController.createRestaurant);

/**
 * @swagger
 * /api/restaurants:
 *   get:
 *     tags:
 *       - Restaurant
 *     summary: Get all restaurants
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Restaurants retrieved successfully"
 *               data:
 *                 - _id: "rest123"
 *                   name: "Pizza Hut"
 *                   location: "Colombo"
 *                   cuisine: "Italian"
 *                   rating: 4.5
 *                 - _id: "rest124"
 *                   name: "Burger King"
 *                   location: "Kandy"
 *                   cuisine: "American"
 *                   rating: 4.2
 */
router.get('/restaurants', restaurantController.getAllRestaurants);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   get:
 *     tags:
 *       - Restaurant
 *     summary: Get a restaurant by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Restaurant retrieved successfully"
 *               data:
 *                 _id: "rest123"
 *                 name: "Pizza Hut"
 *                 location: "Colombo"
 *                 cuisine: "Italian"
 *                 rating: 4.5
 */
router.get('/restaurants/:id', restaurantController.getRestaurantById);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   put:
 *     tags:
 *       - Restaurant
 *     summary: Update a restaurant
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               location:
 *                 type: string
 *           example:
 *             name: "Pizza Hut Updated"
 *             location: "Colombo 07"
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Restaurant updated successfully"
 *               data:
 *                 _id: "rest123"
 *                 name: "Pizza Hut Updated"
 *                 location: "Colombo 07"
 *                 cuisine: "Italian"
 *                 rating: 4.7
 */
router.put('/restaurants/:id', restaurantController.updateRestaurant);

/**
 * @swagger
 * /api/restaurants/{id}:
 *   delete:
 *     tags:
 *       - Restaurant
 *     summary: Delete a restaurant
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Restaurant deleted successfully"
 *               data: null
 */
router.delete('/restaurants/:id', restaurantController.deleteRestaurant);

/**
 * @swagger
 * /api/restaurants/{id}/menu:
 *   post:
 *     tags:
 *       - Menu
 *     summary: Add a menu item to a restaurant
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             name: "Margherita Pizza"
 *             description: "Classic cheese and tomato pizza"
 *             price: 1200
 *             category: "Main Course"
 *             available: true
 *     responses:
 *       201:
 *         description: Created
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Menu item added successfully"
 *               data:
 *                 _id: "menu123"
 *                 name: "Margherita Pizza"
 *                 description: "Classic cheese and tomato pizza"
 *                 price: 1200
 *                 category: "Main Course"
 *                 available: true
 */
router.post('/restaurants/:id/menu', restaurantController.addMenuItem);

/**
 * @swagger
 * /api/restaurants/{id}/menu:
 *   get:
 *     tags:
 *       - Menu
 *     summary: Get menu items for a restaurant
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Menu items retrieved successfully"
 *               data:
 *                 - _id: "menu123"
 *                   name: "Margherita Pizza"
 *                   description: "Classic cheese and tomato pizza"
 *                   price: 1200
 *                   category: "Main Course"
 *                   available: true
 */
router.get('/restaurants/:id/menu', restaurantController.getMenuItems);

/**
 * @swagger
 * /api/restaurants/menu/{menuId}:
 *   put:
 *     tags:
 *       - Menu
 *     summary: Update a menu item
 *     parameters:
 *       - in: path
 *         name: menuId
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           example:
 *             price: 1300
 *             available: false
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Menu item updated successfully"
 *               data:
 *                 _id: "menu123"
 *                 name: "Margherita Pizza"
 *                 price: 1300
 *                 available: false
 */
router.put('/restaurants/menu/:menuId', restaurantController.updateMenuItem);

/**
 * @swagger
 * /api/restaurants/menu/{menuId}:
 *   delete:
 *     tags:
 *       - Menu
 *     summary: Delete a menu item
 *     parameters:
 *       - in: path
 *         name: menuId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *         content:
 *           application/json:
 *             example:
 *               success: true
 *               message: "Menu item deleted successfully"
 *               data: null
 */
router.delete('/restaurants/menu/:menuId', restaurantController.deleteMenuItem);

module.exports = router;

/*
Sample JSON for Postman:

1. Create Restaurant POST /api/restaurants
{
  "name": "Pizza Hut",
  "location": "Colombo",
  "cuisine": "Italian",
  "rating": 4.5
}

2. Add Menu Item POST /api/restaurants/:id/menu
{
  "name": "Margherita Pizza",
  "description": "Classic cheese and tomato pizza",
  "price": 1200,
  "category": "Main Course",
  "available": true
}
*/

/**
 * @swagger
 * /api/restaurants/{id}/orders:
 *   get:
 *     tags:
 *       - Restaurant
 *     summary: Get all orders for a restaurant
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The restaurant ID
 *     responses:
 *       200:
 *         description: A list of orders for the restaurant
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 message:
 *                   type: string
 *                 data:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       userId:
 *                         type: string
 *                       restaurantId:
 *                         type: string
 *                       items:
 *                         type: array
 *                         items:
 *                           type: object
 *                           properties:
 *                             name:
 *                               type: string
 *                             quantity:
 *                               type: number
 *                             price:
 *                               type: number
 *                       totalAmount:
 *                         type: number
 *                       status:
 *                         type: string
 *                       createdAt:
 *                         type: string
 *                         format: date-time
 *       404:
 *         description: Restaurant or orders not found
 */
router.get('/restaurants/:id/orders', restaurantController.getOrdersForRestaurant);