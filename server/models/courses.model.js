const mongoose = require("mongoose")

const coursesSchema = new mongoose.Schema({
  name: {
    type: String
  },
  author: {
    type: String
  },
  tags: {
    type: Array
  },
  isPublished: {
    type: Boolean
  },
  price: {
    type: String
  }
})

module.exports = mongoose.model('courses', coursesSchema)