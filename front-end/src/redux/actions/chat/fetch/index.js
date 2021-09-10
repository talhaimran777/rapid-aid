/*eslint comma-dangle: ["error", "always-multiline"]*/
import useJwt from '@src/auth/jwt/useJwt'
import { CONVERSATIONS_FETCH_INITIATED, CONVERSATIONS_FETCH_SUCCESS } from '../../action.types/actionTypes'

// ** INITIATING CONVERSATIONS FETCHING
export const initiateConversationsFetch = () => {
  return (dispatch) => {
    dispatch({ type: CONVERSATIONS_FETCH_INITIATED })
  }
}

export const handleFetchConversations = () => {
  return async (dispatch) => {
    dispatch(initiateConversationsFetch())
    try {
      const res = await useJwt.getConversations()

      if (res && res.data) {
        dispatch({ type: CONVERSATIONS_FETCH_SUCCESS, payload: res.data })
        console.log(res.data)
      }
    } catch (err) {
      if (err.response && err.response.data) {
        console.log(err.response.data)
      }
    }
  }
}
