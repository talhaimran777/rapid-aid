/*eslint comma-dangle: ["error", "always-multiline"]*/
// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'
import { LOGIN_INITIATED, LOGIN_SUCCESS, SET_CURRENT_USER } from '../action.types/actionTypes'
import jwt_decode from 'jwt-decode'

const config = useJwt.jwtConfig

// ** Handle User Login
export const handleLogin = (data, history) => {
  return async (dispatch) => {
    try {
      // const res = await axios.post('/api/v1/auth/login', { email, password })

      const response = await useJwt.login(data)
      // const response = axios.get('/api')

      if (response && response.data) {
        // console.log(res.data)
        const { token } = response.data
        // console.log(token)
        useJwt.setToken(token)
        const decoded = jwt_decode(token)
        // console.log(decoded)
        dispatch({ type: LOGIN_SUCCESS, payload: decoded })
        dispatch({ type: SET_CURRENT_USER, payload: decoded })

        history.push('/')
      }
    } catch (err) {
      if (err.response && err.response.data) {
        console.log(err.response.data)
      }
    }
    // dispatch({
    //   type: 'LOGIN',
    //   data,
    //   config,
    //   [config.storageTokenKeyName]: data[config.storageTokenKeyName],
    //   [config.storageRefreshTokenKeyName]:
    //     data[config.storageRefreshTokenKeyName],
    // })
    // // ** Add to user, accessToken & refreshToken to localStorage
    // localStorage.setItem('userData', JSON.stringify(data))
    // localStorage.setItem(
    //   config.storageTokenKeyName,
    //   JSON.stringify(data.accessToken)
    // )
    // localStorage.setItem(
    //   config.storageRefreshTokenKeyName,
    //   JSON.stringify(data.refreshToken)
    // )
  }
}

// ** Handle User Logout
export const handleLogout = () => {
  return (dispatch) => {
    dispatch({
      type: 'LOGOUT',
      [config.storageTokenKeyName]: null,
      [config.storageRefreshTokenKeyName]: null,
    })

    // ** Remove user, accessToken & refreshToken from localStorage
    localStorage.removeItem('userData')
    localStorage.removeItem(config.storageTokenKeyName)
    localStorage.removeItem(config.storageRefreshTokenKeyName)
  }
}

// ** LOGIN INITIATED
export const loginInitiated = () => {
  return (dispatch) => {
    dispatch({ type: LOGIN_INITIATED })
  }
}
