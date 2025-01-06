// routes/billRoutes.js
const express = require('express');
const router = express.Router();
const billController = require('../controllers/billControllers');

// Create a new bill
router.post('/bill', billController.createBill);

// Get all bills
router.get('/bill', billController.getAllBills);

// Get a single bill by ID
router.get('/bill/:id', billController.getBillById);

// Delete a bill
router.delete('/bill/:id', billController.deleteBill);

module.exports = router;
