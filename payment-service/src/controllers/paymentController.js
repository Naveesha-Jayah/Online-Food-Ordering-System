const Payment = require('../models/Payment');

// @desc    Create a payment
// @route   POST /api/payments
const createPayment = async (req, res, next) => {
    try {
        const { orderId, userId, amount, paymentMethod, status } = req.body;

        if (!orderId || !userId || !amount) {
            return res.status(400).json({
                success: false,
                message: 'Please provide orderId, userId, and amount'
            });
        }

        const payment = await Payment.create({
            orderId,
            userId,
            amount,
            paymentMethod,
            status
        });

        res.status(201).json({
            success: true,
            data: payment
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get all payments
// @route   GET /api/payments
const getPayments = async (req, res, next) => {
    try {
        const payments = await Payment.find();

        res.status(200).json({
            success: true,
            count: payments.length,
            data: payments
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Get single payment
// @route   GET /api/payments/:id
const getPaymentById = async (req, res, next) => {
    try {
        const payment = await Payment.findById(req.params.id);

        if (!payment) {
            return res.status(404).json({
                success: false,
                message: 'Payment not found'
            });
        }

        res.status(200).json({
            success: true,
            data: payment
        });
    } catch (error) {
        next(error);
    }
};

// @desc    Update payment status
// @route   PUT /api/payments/:id
const updatePaymentStatus = async (req, res, next) => {
    try {
        const { status } = req.body;

        if (!status || !['pending', 'completed', 'failed'].includes(status)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid status value'
            });
        }

        const payment = await Payment.findByIdAndUpdate(
            req.params.id,
            { status },
            {
                new: true,
                runValidators: true
            }
        );

        if (!payment) {
            return res.status(404).json({
                success: false,
                message: 'Payment not found'
            });
        }

        res.status(200).json({
            success: true,
            data: payment
        });
    } catch (error) {
        next(error);
    }
};

module.exports = {
    createPayment,
    getPayments,
    getPaymentById,
    updatePaymentStatus
};
