const loginReducer = (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN_INITIATED':
      return { ...state, inProcess: true };
    case 'LOGIN_SUCCESS':
      return { ...state, status: 'SUCCESS', inProcess: false };
    case 'LOGIN_FAILED':
      return { ...state, status: 'FAILED', inProcess: false };
    default:
      return state;
  }
};

export default loginReducer;
