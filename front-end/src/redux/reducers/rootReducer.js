/*eslint comma-dangle: ["error", "always-multiline"]*/
// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import loginReducer from './login/login.reducer'
import errorsReducer from './error'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  login: loginReducer,
  error: errorsReducer,
})

export default rootReducer
