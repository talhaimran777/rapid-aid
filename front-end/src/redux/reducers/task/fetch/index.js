/*eslint comma-dangle: ["error", "always-multiline"]*/
// import {
//   CLEAR_REGISTER_STATE,
//   TASKS_FETCH_INITIATED,
//   TASKS_FETCH_SUCCESS,
// } from '../../../actions/action.types/actionTypes'

import { TASKS_FETCH_INITIATED, TASKS_FETCH_SUCCESS } from '../../../actions/action.types/actionTypes'

const taskFetchReducer = (state = {}, action) => {
  switch (action.type) {
    case TASKS_FETCH_INITIATED:
      return { inProcess: true }

    case TASKS_FETCH_SUCCESS:
      return { inProcess: false, tasks: action.payload }
    default:
      return state
  }
}

export default taskFetchReducer
