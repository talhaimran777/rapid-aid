import {
  CONVERSATIONS_FETCH_INITIATED,
  CONVERSATIONS_FETCH_SUCCESS,
  MESSAGES_FETCH_INITIATED,
  MESSAGES_FETCH_SUCCESS,
} from '../../actions/action.types/actionTypes'

/*eslint comma-dangle: ["error", "always-multiline"]*/
const initialState = {
  showChat: false,
  messages: [],
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

    case MESSAGES_FETCH_INITIATED: {
      return {
        ...state,
      }
    }

    case MESSAGES_FETCH_SUCCESS: {
      return {
        ...state,
        messages: action.payload.messages,
        showChat: true,
      }
    }
    default:
      return state
  }
}

export default chatReducer
