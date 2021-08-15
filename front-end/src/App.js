// ** Router Import
import { useDispatch } from 'react-redux'
import Router from './router/Router'
import useJwt from '@src/auth/jwt/useJwt'
import jwt_decode from 'jwt-decode'
import { LOGIN_SUCCESS, SET_CURRENT_USER } from './redux/actions/action.types/actionTypes'

const App = () => {
  const dispatch = useDispatch()

  if (useJwt.getToken()) {
    const token = useJwt.getToken()
    const decoded = jwt_decode(token)
    dispatch({ type: SET_CURRENT_USER, payload: decoded })
  }
  return <Router />
}

export default App
