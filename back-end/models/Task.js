const mongoose = require('mongoose')
const Schema = mongoose.Schema

// Create Schema
const taskSchema = new Schema({
  //   _id: mongoose.Schema.Types.ObjectId,

  user: {
    type: Schema.Types.ObjectId,
  },
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
  status: { type: String, required: true },
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
  },
  creationTime: { type: String, required: true },
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
        required: true,
      },
      avatar: {
        type: String,
        required: true,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
  offers: [
    {
      user: {
        type: Schema.Types.ObjectId,
      },
      text: {
        type: String,
        required: true,
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      },
      date: {
        type: Date,
        default: Date.now,
      },
    },
  ],
})

module.exports = mongoose.model('Task', taskSchema)
