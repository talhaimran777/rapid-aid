/*eslint comma-dangle: ["error", "always-multiline"]*/
// ** Auth Endpoints
export default {
  loginEndpoint: '/api/v1/auth/login',
  registerEndpoint: '/api/v1/auth/register',
  getTasksEndpoint: '/api/v1/tasks',
  getTaskEndpoint: '/api/v1/tasks',
  postTaskEndPoint: '/api/v1/tasks',
  addCommentEndPoint: '/api/v1/tasks/comment',
  getOwnProfileEndPoint: '/api/v1/profiles/me',
  // refreshEndpoint: '/jwt/refresh-token',
  // logoutEndpoint: '/jwt/logout',

  // ** This will be prefixed in authorization header with token
  // ? e.g. Authorization: Bearer <token>
  tokenType: 'Bearer',

  // ** Value of this property will be used as key to store JWT token in storage
  storageTokenKeyName: 'accessToken',
  storageRefreshTokenKeyName: 'refreshToken',
}
