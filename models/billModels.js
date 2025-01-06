const mongoose = require('mongoose');

const billSchema = new mongoose.Schema(
    {
        customerId: {
            type: mongoose.Schema.Types.ObjectId,
            default: () => new mongoose.Types.ObjectId(), // Automatically generate a random ObjectId
            required: [true, 'Customer ID is required'],
        },
        itemName: {
            type: String,
            required: [true, 'Item name is required'],
        },
        itemDescription: {
            type: String,
            required: [true, 'Item description is required'],
        },
        quantity: {
            type: Number,
            required: [true, 'Quantity is required'],
            min: [1, 'Quantity must be at least 1'],
        },

        totalPrice: {
            type: Number,
            required: [true, 'Total price is required'],
        },
    },
    { timestamps: true }
);

module.exports = mongoose.model('Bill', billSchema);
