const mongoose = require('mongoose')
const Conversation = require('../../models/Conversation')
const Message = require('../../models/Message')

// Post private message

const postMessage = async (req, res) => {
  const { to, message, user } = req.body
  const from = user.id
  const avatar = user.avatar

  try {
    const conversation = await Conversation.findOneAndUpdate(
      {
        recipients: [to, from],
      },
      {
        recipients: [to, from],
        lastMessage: message,
        date: Date.now(),
      },
      { upsert: true, new: true, setDefaultsOnInsert: true }
    )

    if (conversation) {
      const newMessage = new Message({
        conversation: conversation._id,
        to,
        from,
        avatar,
        message,
      })

      const result = await newMessage.save()
      res.status(201).json({ status: 'SUCCESS', message: result })
    }
  } catch (err) {
    console.log(err)
    res.status(500).json({ status: 'FAILED', error: err.response })
  }
}

module.exports = {
  postMessage,
}
