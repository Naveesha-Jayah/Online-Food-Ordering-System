const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
    orderId: {
        type: String,
        required: [true, 'Order ID is required']
    },
    userId: {
        type: String,
        required: [true, 'User ID is required']
    },
    amount: {
        type: Number,
        required: [true, 'Amount is required']
    },
    paymentMethod: {
        type: String,
        enum: ['card', 'cash', 'online'],
        default: 'card'
    },
    status: {
        type: String,
        enum: ['pending', 'completed', 'failed'],
        default: 'pending'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Payment', paymentSchema);
