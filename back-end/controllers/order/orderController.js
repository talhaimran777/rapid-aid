const mongoose = require('mongoose')
const { validationResult } = require('express-validator')
const User = require('../../models/User')
const Order = require('../../models/Order')
const Task = require('../../models/Task')

// const sendPrivateMessageFromServer = async (req, res) => {
//   const { to, message, user, oldMessages, oldConversations } = req.body
//   const from = user.id
//   const avatar = user.avatar

//   try {
//     const conversation = await Conversation.findOneAndUpdate(
//       {
//         recipients: {
//           $in: [
//             [to, from],
//             [from, to],
//           ],
//         },
//       },
//       {
//         recipients: [to, from],
//         lastMessage: message,
//         date: Date.now(),
//       },
//       { upsert: true, new: true, setDefaultsOnInsert: true }
//     )

//     if (conversation) {
//       // console.log(conversation)
//       // console.log(oldConversations)

//       const newMessage = new Message({
//         conversation: conversation._id,
//         to,
//         from,
//         avatar,
//         message,
//       })

//       oldMessages.push(newMessage)
//       const result = await newMessage.save()
//       req.io.emit(`${to}`, oldMessages)
//       req.io.emit(`${from}`, oldMessages)
//       res.status(201).json({ status: 'SUCCESS', message: result })
//     }
//   } catch (err) {
//     console.log(err)
//     res.status(500).json({ status: 'FAILED', error: err.response })
//   }
// }

const createOrder = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { user, taskId, offerId, taskerId } = req.body
  const { id } = user

  try {
    const task = await Task.findById(taskId)

    const data = {}

    data.hirerId = id
    data.taskId = taskId
    data.offerId = offerId
    data.taskerId = taskerId
    data.orderParticipants = [id, taskerId]

    const newOrder = new Order(data)

    if (newOrder) {
      await newOrder.save()
      task.status = 'assigned'
      await task.save()
      res.status(201).json({ status: 'SUCCESS', data: newOrder })
    }
  } catch (err) {
    console.log('ERROR')
    res.status(500).json({ status: 'FAILED', error: err, message: 'Server Error' })
  }
}

const getOrder = async (req, res) => {
  const errors = validationResult(req)

  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() })
  }

  const { user } = req.body
  const { id } = user

  try {
    const orders = await Order.find()
      .or([{ hirerId: id }, { taskerId: id }])
      .populate('taskId')
      .populate('offerId')

    if (orders?.length) {
      res.status(200).json({ status: 'SUCCESS', data: orders[0] })
    } else {
      res.status(200).json({ status: 'SUCCESS', data: null })
    }
  } catch (err) {
    console.log('ERROR')
    res.status(500).json({ status: 'FAILED', error: err, message: 'Server Error' })
  }
}

module.exports = {
  createOrder,
  getOrder,
}
