/*eslint comma-dangle: ["error", "always-multiline"]*/
import useJwt from '@src/auth/jwt/useJwt'
import {
  ADD_COMMENT_INITIATED,
  TASKS_FETCH_INITIATED,
  TASKS_FETCH_SUCCESS,
  TASK_FETCH_FAILED,
  TASK_FETCH_INITIATED,
  TASK_FETCH_SUCCESS,
} from '../../action.types/actionTypes'
import { handleFetchTaskNoUpdatesVersion } from '../../task/fetch'

// ** INITIATING TASKS FETCHING
export const initiateAddComment = () => {
  return (dispatch) => {
    dispatch({ type: ADD_COMMENT_INITIATED })
  }
}

// export const initiateAddComment = () => {
//   return (dispatch) => {
//     dispatch({ type: ADD_COMMENT_INITIATED })
//   }
// }

export const handleAddComment = (data) => {
  return async (dispatch) => {
    dispatch(initiateAddComment())

    // console.log(data)
    try {
      const res = await useJwt.addComment(data)

      if (res && res.data) {
        // dispatch({ type: TASKS_FETCH_SUCCESS, payload: res.data.tasks })

        dispatch(handleFetchTaskNoUpdatesVersion(data.taskId))
        console.log(res.data)
      }
    } catch (err) {
      if (err.res && err.res.data) {
        console.log(err.res.data)
      }
    }
  }
}
