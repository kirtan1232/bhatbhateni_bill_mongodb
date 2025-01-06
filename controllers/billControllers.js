// controllers/billController.js
const Bill = require('../models/billModels');

// Create a new bill
exports.createBill = async (req, res) => {
    try {
        const { customerId, itemName, itemDescription, quantity, totalPrice } = req.body;

        const newBill = new Bill({
            customerId,
            itemName,
            itemDescription,
            quantity,
            totalPrice,
        });

        const savedBill = await newBill.save();
        res.status(201).json({ message: 'Bill created successfully', bill: savedBill });
    } catch (error) {
        res.status(500).json({ message: 'Error creating bill', error: error.message });
    }
};

// Get all bills
exports.getAllBills = async (req, res) => {
    try {
        const bills = await Bill.find();
        res.status(200).json(bills);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bills', error: error.message });
    }
};

// Get a single bill by ID
exports.getBillById = async (req, res) => {
    try {
        const bill = await Bill.findById(req.params.id);
        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }
        res.status(200).json(bill);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching bill', error: error.message });
    }
};

// Delete a bill
exports.deleteBill = async (req, res) => {
    try {
        const bill = await Bill.findByIdAndDelete(req.params.id);
        if (!bill) {
            return res.status(404).json({ message: 'Bill not found' });
        }
        res.status(200).json({ message: 'Bill deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting bill', error: error.message });
    }
};
