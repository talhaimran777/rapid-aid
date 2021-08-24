const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const taskSchema = new Schema({
  //   _id: mongoose.Schema.Types.ObjectId,
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  budget: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dueDate: {
    type: String,
    required: true,
  },
  status: { true: String },
})

module.exports = mongoose.model('Task', taskSchema)
