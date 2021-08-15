/*eslint comma-dangle: ["error", "always-multiline"]*/
// ** UseJWT import to get config
import useJwt from '@src/auth/jwt/useJwt'
import { LOGIN_INITIATED } from '../action.types/actionTypes'

const config = useJwt.jwtConfig

// ** Handle User Login
export const handleLogin = (data) => {
  return async (dispatch) => {
    try {
      // const res = await axios.post('/api/v1/auth/login', { email, password })

      const res = await useJwt.login(data)
      // const res = axios.get('/api')

      if (res && res.data) {
        console.log(res.data)
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
