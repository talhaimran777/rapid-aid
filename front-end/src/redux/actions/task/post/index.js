import useJwt from '@src/auth/jwt/useJwt'
import { POST_TASK_INITIATED } from '../../action.types/actionTypes'

export const initiatePostTask = () => {
  return (dispatch) => {
    dispatch({ type: POST_TASK_INITIATED })
  }
}

export const handlePostTask = (data) => {
  return async (dispatch) => {
    dispatch(initiatePostTask())

    try {
      const response = await useJwt.postTask(data)
      if (response && response.data) {
        //   dispatch(updateAdSettingsSuccess(response.data))
        console.log(response.data)
      }
    } catch (err) {
      if (err.response && err.response.data) {
        console.log(err.response.data)
      }
    }
    // dispatch({ type: 'POST_TASK_INITIATED' })
  }
}
