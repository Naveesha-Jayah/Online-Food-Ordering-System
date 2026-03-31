const Restaurant = require('../models/Restaurant');
const Menu = require('../models/Menu');

class RestaurantService {
  async createRestaurant(data) {
    if (!data.name || !data.location) {
      throw { statusCode: 400, message: 'Name and location are required' };
    }
    return await Restaurant.create(data);
  }

  async getAllRestaurants() {
    return await Restaurant.find();
  }

  async getRestaurantById(id) {
    const restaurant = await Restaurant.findById(id);
    if (!restaurant) throw { statusCode: 404, message: 'Restaurant not found' };
    return restaurant;
  }

  async updateRestaurant(id, data) {
    const restaurant = await Restaurant.findByIdAndUpdate(id, data, { new: true });
    if (!restaurant) throw { statusCode: 404, message: 'Restaurant not found' };
    return restaurant;
  }

  async deleteRestaurant(id) {
    const restaurant = await Restaurant.findByIdAndDelete(id);
    if (!restaurant) throw { statusCode: 404, message: 'Restaurant not found' };
    await Menu.deleteMany({ restaurantId: id });
    return restaurant;
  }

  async addMenuItem(restaurantId, data) {
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) throw { statusCode: 404, message: 'Restaurant not found' };
    if (!data.name || data.price === undefined) {
      throw { statusCode: 400, message: 'Name and price are required' };
    }
    data.restaurantId = restaurantId;
    return await Menu.create(data);
  }

  async getMenuItems(restaurantId) {
    const restaurant = await Restaurant.findById(restaurantId);
    if (!restaurant) throw { statusCode: 404, message: 'Restaurant not found' };
    return await Menu.find({ restaurantId, available: true });
  }

  async updateMenuItem(menuId, data) {
    const menu = await Menu.findByIdAndUpdate(menuId, data, { new: true });
    if (!menu) throw { statusCode: 404, message: 'Menu item not found' };
    return menu;
  }

  async deleteMenuItem(menuId) {
    const menu = await Menu.findByIdAndDelete(menuId);
    if (!menu) throw { statusCode: 404, message: 'Menu item not found' };
    return menu;
  }
}

module.exports = new RestaurantService();