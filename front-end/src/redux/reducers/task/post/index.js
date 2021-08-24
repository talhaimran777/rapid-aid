/*eslint comma-dangle: ["error", "always-multiline"]*/
// import {
//   CLEAR_REGISTER_STATE,
//   TASKS_FETCH_INITIATED,
//   TASKS_FETCH_SUCCESS,
// } from '../../../actions/action.types/actionTypes'

import { POST_TASK_INITIATED } from '../../../actions/action.types/actionTypes'

const taskPostReducer = (state = {}, action) => {
  switch (action.type) {
    case POST_TASK_INITIATED:
      return { inProcess: true }
    default:
      return state
  }
}

export default taskPostReducer
