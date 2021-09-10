import { CONVERSATIONS_FETCH_INITIATED, CONVERSATIONS_FETCH_SUCCESS } from '../../actions/action.types/actionTypes'

/*eslint comma-dangle: ["error", "always-multiline"]*/
const initialState = {
  chats: [],
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
