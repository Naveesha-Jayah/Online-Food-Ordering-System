const express = require('express');
const router = express.Router();
const {
  createDelivery,
  getAllDeliveries,
  getDeliveryById,
  updateDelivery,
  deleteDelivery,
  updateDeliveryStatus,
  assignDeliveryPerson,
  getDeliveriesByStatus,
  getDeliveryByOrderId,
} = require('../controllers/deliveryController');

/**
 * @swagger
 * tags:
 *   name: Deliveries
 *   description: Delivery management APIs
 */

/**
 * @swagger
 * /api/delivery:
 *   post:
 *     summary: Create a new delivery
 *     tags: [Deliveries]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               orderId:
 *                 type: string
 *               customerName:
 *                 type: string
 *               address:
 *                 type: string
 *               phone:
 *                 type: string
 *               deliveryStatus:
 *                 type: string
 *               deliveryPerson:
 *                 type: string
 *               estimatedTime:
 *                 type: string
 *     responses:
 *       201:
 *         description: Created
 *       400:
 *         description: Bad Request
 */
router.post('/', createDelivery);

/**
 * @swagger
 * /api/delivery:
 *   get:
 *     summary: Get all deliveries
 *     tags: [Deliveries]
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/', getAllDeliveries);

/**
 * @swagger
 * /api/delivery/{id}:
 *   get:
 *     summary: Get a delivery by ID
 *     tags: [Deliveries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
router.get('/:id', getDeliveryById);

/**
 * @swagger
 * /api/delivery/{id}:
 *   put:
 *     summary: Update a delivery full details
 *     tags: [Deliveries]
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
 *               address:
 *                 type: string
 *               estimatedTime:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
router.put('/:id', updateDelivery);

/**
 * @swagger
 * /api/delivery/{id}:
 *   delete:
 *     summary: Delete a delivery
 *     tags: [Deliveries]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
router.delete('/:id', deleteDelivery);

/**
 * @swagger
 * /api/delivery/{id}/status:
 *   put:
 *     summary: Update delivery status
 *     tags: [Deliveries]
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
 *               status:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
router.put('/:id/status', updateDeliveryStatus);

/**
 * @swagger
 * /api/delivery/{id}/person:
 *   put:
 *     summary: Assign a delivery person
 *     tags: [Deliveries]
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
 *               person:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
router.put('/:id/person', assignDeliveryPerson);

/**
 * @swagger
 * /api/delivery/status/{status}:
 *   get:
 *     summary: Get deliveries by status
 *     tags: [Deliveries]
 *     parameters:
 *       - in: path
 *         name: status
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 */
router.get('/status/:status', getDeliveriesByStatus);

/**
 * @swagger
 * /api/delivery/order/{orderId}:
 *   get:
 *     summary: Get a delivery by order ID
 *     tags: [Deliveries]
 *     parameters:
 *       - in: path
 *         name: orderId
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Success
 *       404:
 *         description: Not Found
 */
router.get('/order/:orderId', getDeliveryByOrderId);

module.exports = router;
