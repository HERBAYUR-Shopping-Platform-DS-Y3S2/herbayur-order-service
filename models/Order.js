const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
  price: {
    type: String,
    required: true,
  },
  item_Name: {
    type: String,
    required: true,
  },
  confirmationMail: {
    type: String,
    required: false,
  },
  confirmationDate: {
    type: String,
    required: false,
  },
});

module.exports = Order = mongoose.model("Order", OrderSchema);
