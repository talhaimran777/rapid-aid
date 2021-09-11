import { CONVERSATIONS_FETCH_INITIATED, CONVERSATIONS_FETCH_SUCCESS } from '../../actions/action.types/actionTypes'

/*eslint comma-dangle: ["error", "always-multiline"]*/
const initialState = {
  chats: [
    {
      id: 1,
      userId: 1,
      unseenMsgs: 0,
      chat: [
        {
          message: 'Hi',
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message: 'Hello. How can I help You?',
          time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
          senderId: 2,
        },
        {
          message: 'Can I get details of my last transaction I made last month?',
          time: 'Mon Dec 11 2018 07:46:10 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message: 'We need to check if we can provide you such information.',
          time: 'Mon Dec 11 2018 07:45:15 GMT+0000 (GMT)',
          senderId: 2,
        },
        {
          message: 'I will inform you as I get update on this.',
          time: 'Mon Dec 11 2018 07:46:15 GMT+0000 (GMT)',
          senderId: 2,
        },
        {
          message: 'If it takes long you can mail me at my mail address.',
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
      ],
    },
    {
      id: 2,
      userId: 2,
      unseenMsgs: 1,
      chat: [
        {
          message: "How can we help? We're here for you!",
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message: 'Hey John, I am looking for the best admin template. Could you please help me to find it out?',
          time: 'Mon Dec 10 2018 07:45:23 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message: 'It should be Bootstrap 4 compatible.',
          time: 'Mon Dec 10 2018 07:45:55 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message: 'Absolutely!',
          time: 'Mon Dec 10 2018 07:46:00 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message: 'Modern admin is the responsive bootstrap 4 admin template.!',
          time: 'Mon Dec 10 2018 07:46:05 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message: 'Looks clean and fresh UI.',
          time: 'Mon Dec 10 2018 07:46:23 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message: "It's perfect for my next project.",
          time: 'Mon Dec 10 2018 07:46:33 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message: 'How can I purchase it?',
          time: 'Mon Dec 10 2018 07:46:43 GMT+0000 (GMT)',
          senderId: 1,
        },
        {
          message: 'Thanks, from ThemeForest.',
          time: 'Mon Dec 10 2018 07:46:53 GMT+0000 (GMT)',
          senderId: 11,
        },
        {
          message: 'I will purchase it for sure. 👍',
          time: 'Mon Dec 10 2018 07:45:00 GMT+0000 (GMT)',
          senderId: 1,
        },
      ],
    },
  ],
  contacts: [],
  userProfile: {},
  selectedUser: {},
}

const chatReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONVERSATIONS_FETCH_INITIATED: {
      return {
        ...state,
        conversationsFetchInProces: true,
      }
    }

    case CONVERSATIONS_FETCH_SUCCESS: {
      return {
        ...state,
        conversationsFetchInProces: false,
        conversations: action.payload.conversations,
      }
    }
    default:
      return state
  }
}

export default chatReducer
