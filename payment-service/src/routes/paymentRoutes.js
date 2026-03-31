const express = require('express');
const {
    createPayment,
    getPayments,
    getPaymentById,
    updatePaymentStatus
} = require('../controllers/paymentController');

const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     Payment:
 *       type: object
 *       required:
 *         - orderId
 *         - userId
 *         - amount
 *       properties:
 *         _id:
 *           type: string
 *           description: The auto-generated id of the payment
 *         orderId:
 *           type: string
 *           description: The order ID associated with the payment
 *         userId:
 *           type: string
 *           description: The user ID who made the payment
 *         amount:
 *           type: number
 *           description: The payment amount
 *         paymentMethod:
 *           type: string
 *           enum: [card, cash, online]
 *           default: card
 *           description: The payment method used
 *         status:
 *           type: string
 *           enum: [pending, completed, failed]
 *           default: pending
 *           description: The payment status
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 */

/**
 * @swagger
 * /api/payments:
 *   post:
 *     summary: Create a new payment
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - orderId
 *               - userId
 *               - amount
 *             properties:
 *               orderId:
 *                 type: string
 *               userId:
 *                 type: string
 *               amount:
 *                 type: number
 *               paymentMethod:
 *                 type: string
 *                 enum: [card, cash, online]
 *               status:
 *                 type: string
 *                 enum: [pending, completed, failed]
 *     responses:
 *       201:
 *         description: The created payment
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Missing required fields
 * 
 *   get:
 *     summary: Returns the list of all the payments
 *     responses:
 *       200:
 *         description: The list of the payments
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 count:
 *                   type: number
 *                 data:
 *                   type: array
 *                   items:
 *                     $ref: '#/components/schemas/Payment'
 */
router.route('/')
    .post(createPayment)
    .get(getPayments);

/**
 * @swagger
 * /api/payments/{id}:
 *   get:
 *     summary: Get the payment by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The payment id
 *     responses:
 *       200:
 *         description: The payment description by id
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Payment'
 *       404:
 *         description: The payment was not found
 * 
 *   put:
 *     summary: Update the payment status by id
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: The payment id
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - status
 *             properties:
 *               status:
 *                 type: string
 *                 enum: [pending, completed, failed]
 *     responses:
 *       200:
 *         description: The payment status was updated
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 success:
 *                   type: boolean
 *                 data:
 *                   $ref: '#/components/schemas/Payment'
 *       400:
 *         description: Invalid status value
 *       404:
 *         description: The payment was not found
 */
router.route('/:id')
    .get(getPaymentById)
    .put(updatePaymentStatus);

module.exports = router;
