const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  orderDate: {
    type: String,
    required: true
  },
  orderTime: {
    type: String,
    required: true
  },
  items: [
    {
      name: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      dose: {
        type: String,
        required: true
      },
      sellerName: {
        type: String,
        required: true
      },
      price: {
        type: String,
        required: true
      },
      desc: {
        type: String,
        required: true
      },
      status: {
        type: String,
        required: true
      },
      image: {
        type: String,
        required: true
      },
      quantity: {
        type: String,
        required: true
      },
    }
  ],
  totalPrice: {
    type: String,
    required: true
  },
  isApproved: {
    type: Boolean,
    required : true
  }
});

module.exports = mongoose.model('Order', orderSchema)