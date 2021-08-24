/*eslint comma-dangle: ["error", "always-multiline"]*/
// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import loginReducer from './login/login.reducer'
import errorsReducer from './error'
import registerReducer from './register/register.reducer'
import taskFetchReducer from './task/fetch'
import taskPostReducer from './task/post'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  login: loginReducer,
  register: registerReducer,
  error: errorsReducer,
  // task: {
  //   fetch: taskFetchReducer,
  //   post: taskPostReducer,
  // },

  taskFetch: taskFetchReducer,
  taskPost: taskPostReducer,
})

export default rootReducer
