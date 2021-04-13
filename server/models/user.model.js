const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    username: {
        type: String
    },
    password: {
        type: String
    },
    address : {
        type: String
    },
    Mobile : {
        type: Number
    },
})

module.exports = mongoose.model('user', userSchema)