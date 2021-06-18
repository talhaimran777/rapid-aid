import { SET_CURRENT_USER } from '../actions/actionTypes';
const isEmpty = require('is-empty');

const initialState = {
  isAuthenticated: false,
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_USER:
      return {
        ...state,
        isAuthenticated: !isEmpty(action.payload),
        user: action.payload,
      };
    // case USER_LOADING:
    //   return {
    //     ...state,
    //     loading: true,
    //   };
    default:
      return state;
  }
};

export default authReducer;
