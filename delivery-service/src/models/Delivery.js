const mongoose = require('mongoose');

const deliverySchema = new mongoose.Schema(
  {
    orderId: {
      type: String,
      required: true,
    },
    customerName: {
      type: String,
      required: true,
    },
    address: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      required: true,
    },
    deliveryStatus: {
      type: String,
      enum: ['Pending', 'Picked Up', 'On the Way', 'Delivered', 'Cancelled'],
      default: 'Pending',
    },
    deliveryPerson: {
      type: String,
      default: null,
    },
    estimatedTime: {
      type: String,
    },
    deliveredTime: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('Delivery', deliverySchema);
