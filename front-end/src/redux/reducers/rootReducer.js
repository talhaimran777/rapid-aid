/*eslint comma-dangle: ["error", "always-multiline"]*/
// ** Redux Imports
import { combineReducers } from 'redux'

// ** Reducers Imports
import auth from './auth'
import navbar from './navbar'
import layout from './layout'
import loginReducer from './login/login.reducer'

const rootReducer = combineReducers({
  auth,
  navbar,
  layout,
  login: loginReducer,
})

export default rootReducer
