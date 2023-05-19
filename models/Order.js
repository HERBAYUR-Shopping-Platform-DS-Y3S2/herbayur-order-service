const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderId: {
    type: String,
    required: true
  },
  orderDate: {
    type: Date,
    required: true
  },
  orderTime: {
    type: String,
    required: true
  },
  items: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'items'
    }
  ],
  quantity: {
    type: Number,
    required: true
  },
  totalPrice: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Order', orderSchema)