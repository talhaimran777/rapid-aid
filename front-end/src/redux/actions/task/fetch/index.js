/*eslint comma-dangle: ["error", "always-multiline"]*/
import useJwt from '@src/auth/jwt/useJwt'
import {
  TASKS_FETCH_INITIATED,
  TASKS_FETCH_SUCCESS,
  TASK_FETCH_INITIATED,
  TASK_FETCH_SUCCESS,
} from '../../action.types/actionTypes'

// ** INITIATING TASKS FETCHING
export const initiateTasksFetch = () => {
  return (dispatch) => {
    dispatch({ type: TASKS_FETCH_INITIATED })
  }
}

// ** INITIATING TASK FETCHING
export const initiateTaskFetch = () => {
  return (dispatch) => {
    dispatch({ type: TASK_FETCH_INITIATED })
  }
}
// ** GET ALL TASKS
// export const getTasks = () => {
//   return async (dispatch) => {
//     alert('Hello')
//     try {
//       const response = await useJwt.getTasks()

//       if (response && response.data) {
//         console.log(res.data)
//       }
//     } catch (err) {
//       if (err.response && err.response.data) {
//         console.log(err.response.data)
//       }
//     }
//   }
// }

export const handleFetchTasks = () => {
  return async (dispatch) => {
    dispatch(initiateTasksFetch())
    try {
      const res = await useJwt.getTasks()

      if (res && res.data) {
        dispatch({ type: TASKS_FETCH_SUCCESS, payload: res.data.tasks })
        console.log(res.data)
      }
    } catch (err) {
      if (err.res && err.res.data) {
        console.log(err.res.data)
      }
    }
  }
}

export const handleFetchTask = (id) => {
  return async (dispatch) => {
    dispatch(initiateTaskFetch())
    try {
      const res = await useJwt.getTask(id)

      if (res && res.data) {
        // dispatch({ type: TASK_FETCH_SUCCESS, payload: res.data.task })
        console.log(res.data)
      }
    } catch (err) {
      if (err.res && err.res.data) {
        console.log(err.res)
      }
    }
  }
}
