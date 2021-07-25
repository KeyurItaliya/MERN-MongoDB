const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userName: {
        type: String
    },
    total: {
      type: Number
    },
    address : {
        type: String
    },
    Mobile : {
        type: Number
    },
    paymentStatus: {
      type: Boolean,
      default: false
    }
})

module.exports = mongoose.model('order', orderSchema)