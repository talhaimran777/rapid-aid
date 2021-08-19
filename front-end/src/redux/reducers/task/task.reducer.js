/*eslint comma-dangle: ["error", "always-multiline"]*/
import {
  CLEAR_REGISTER_STATE,
  TASKS_FETCH_INITIATED,
  TASKS_FETCH_SUCCESS,
} from '../../actions/action.types/actionTypes'

const taskReducer = (state = {}, action) => {
  switch (action.type) {
    case TASKS_FETCH_INITIATED:
      return { inProcess: true }

    case TASKS_FETCH_SUCCESS:
      return { inProcess: false, tasks: action.payload }
    default:
      return state
  }
}

export default taskReducer
