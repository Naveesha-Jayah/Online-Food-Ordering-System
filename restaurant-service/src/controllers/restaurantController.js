const axios = require('axios');
require('dotenv').config();
// Get all orders for a restaurant by communicating with order-service
exports.getOrdersForRestaurant = async (req, res, next) => {
  try {
    const restaurantId = req.params.id;
    const orderServiceUrl = process.env.ORDER_SERVICE_URL || 'http://localhost:8083';
    const response = await axios.get(`${orderServiceUrl}/api/orders?restaurantId=${restaurantId}`);
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully',
      data: response.data.data || response.data,
    });
  } catch (error) {
    next(error);
  }
};
const restaurantService = require('../services/restaurantService');

exports.createRestaurant = async (req, res, next) => {
  try {
    const restaurant = await restaurantService.createRestaurant(req.body);
    res.status(201).json({ success: true, message: 'Restaurant created', data: restaurant });
  } catch (error) {
    next(error);
  }
};

exports.getAllRestaurants = async (req, res, next) => {
  try {
    const restaurants = await restaurantService.getAllRestaurants();
    res.status(200).json({ success: true, message: 'Restaurants fetched', data: restaurants });
  } catch (error) {
    next(error);
  }
};

exports.getRestaurantById = async (req, res, next) => {
  try {
    const restaurant = await restaurantService.getRestaurantById(req.params.id);
    res.status(200).json({ success: true, message: 'Restaurant fetched', data: restaurant });
  } catch (error) {
    next(error);
  }
};

exports.updateRestaurant = async (req, res, next) => {
  try {
    const restaurant = await restaurantService.updateRestaurant(req.params.id, req.body);
    res.status(200).json({ success: true, message: 'Restaurant updated', data: restaurant });
  } catch (error) {
    next(error);
  }
};

exports.deleteRestaurant = async (req, res, next) => {
  try {
    const restaurant = await restaurantService.deleteRestaurant(req.params.id);
    res.status(200).json({ success: true, message: 'Restaurant deleted', data: restaurant });
  } catch (error) {
    next(error);
  }
};

exports.addMenuItem = async (req, res, next) => {
  try {
    const menu = await restaurantService.addMenuItem(req.params.id, req.body);
    res.status(201).json({ success: true, message: 'Menu item added', data: menu });
  } catch (error) {
    next(error);
  }
};

exports.getMenuItems = async (req, res, next) => {
  try {
    const menus = await restaurantService.getMenuItems(req.params.id);
    res.status(200).json({ success: true, message: 'Menu items fetched', data: menus });
  } catch (error) {
    next(error);
  }
};

exports.updateMenuItem = async (req, res, next) => {
  try {
    const menu = await restaurantService.updateMenuItem(req.params.menuId, req.body);
    res.status(200).json({ success: true, message: 'Menu item updated', data: menu });
  } catch (error) {
    next(error);
  }
};

exports.deleteMenuItem = async (req, res, next) => {
  try {
    const menu = await restaurantService.deleteMenuItem(req.params.menuId);
    res.status(200).json({ success: true, message: 'Menu item deleted', data: menu });
  } catch (error) {
    next(error);
  }
};