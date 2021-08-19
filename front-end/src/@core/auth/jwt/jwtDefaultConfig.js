/*eslint comma-dangle: ["error", "always-multiline"]*/
// ** Auth Endpoints
export default {
  loginEndpoint: '/api/v1/auth/login',
  registerEndpoint: '/api/v1/auth/register',
  getTasksEndpoint: '/api/v1/task/tasks',
  // refreshEndpoint: '/jwt/refresh-token',
  // logoutEndpoint: '/jwt/logout',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
