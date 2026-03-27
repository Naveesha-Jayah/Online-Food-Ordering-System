const mongoose = require('mongoose');
const Order = require('../models/Order');

const VALID_STATUSES = ['PENDING', 'CONFIRMED', 'PREPARING', 'DELIVERED', 'CANCELLED'];

const calculateTotalAmount = (items) => {
  if (!Array.isArray(items) || items.length === 0) {
    throw createBadRequest('items is required and must be a non-empty array');
  }

  let total = 0;

  for (const item of items) {
    if (!item.name || typeof item.name !== 'string') {
      throw createBadRequest('each item must include a valid name');
    }
    if (typeof item.quantity !== 'number' || item.quantity <= 0) {
      throw createBadRequest('each item must include quantity > 0');
    }
    if (typeof item.price !== 'number' || item.price < 0) {
      throw createBadRequest('each item must include price >= 0');
    }

    total += item.quantity * item.price;
  }

  return Number(total.toFixed(2));
};

const createBadRequest = (message) => {
  const error = new Error(message);
  error.statusCode = 400;
  return error;
};

const ensureValidObjectId = (id, message) => {
  if (!mongoose.Types.ObjectId.isValid(id)) {
    throw createBadRequest(message);
  }
};

const createOrder = async (payload) => {
  const { userId, restaurantId, items } = payload;

  if (!userId || typeof userId !== 'string') {
    throw createBadRequest('userId is required and must be a string');
  }

  if (!restaurantId || typeof restaurantId !== 'string') {
    throw createBadRequest('restaurantId is required and must be a string');
  }

  const totalAmount = calculateTotalAmount(items);

  const order = await Order.create({
    userId,
    restaurantId,
    items,
    totalAmount,
    status: 'PENDING',
  });

  return order;
};

const getAllOrders = async () => {
  return Order.find().sort({ createdAt: -1 });
};

const getOrderById = async (orderId) => {
  ensureValidObjectId(orderId, 'Invalid order id');

  const order = await Order.findById(orderId);
  if (!order) {
    const error = new Error('Order not found');
    error.statusCode = 404;
    throw error;
  }

  return order;
};

const updateOrderStatus = async (orderId, status) => {
  ensureValidObjectId(orderId, 'Invalid order id');

  if (!status || typeof status !== 'string') {
    throw createBadRequest('status is required and must be a string');
  }

  const normalizedStatus = status.toUpperCase();

  if (!VALID_STATUSES.includes(normalizedStatus)) {
    throw createBadRequest(`status must be one of: ${VALID_STATUSES.join(', ')}`);
  }

  const order = await Order.findByIdAndUpdate(
    orderId,
    { status: normalizedStatus },
    { new: true, runValidators: true }
  );

  if (!order) {
    const error = new Error('Order not found');
    error.statusCode = 404;
    throw error;
  }

  return order;
};

const deleteOrder = async (orderId) => {
  ensureValidObjectId(orderId, 'Invalid order id');

  const order = await Order.findByIdAndDelete(orderId);
  if (!order) {
    const error = new Error('Order not found');
    error.statusCode = 404;
    throw error;
  }

  return order;
};

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  updateOrderStatus,
  deleteOrder,
  VALID_STATUSES,
};
