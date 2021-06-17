import { combineReducers } from 'redux';
import errorsReducer from './errors.reducer';
import authReducer from './auth.reducer';
import registerReducer from './register.reducer';
// import counterReducer from './counterReducer';
// import signupReducer from './signupReducer';
// import loginReducer from './loginReducer';
// import dashboardReducer from './dashboard.reducer';

let rootReducer = combineReducers({
  errors: errorsReducer,
  auth: authReducer,
  signup: registerReducer,
  //   signup: signupReducer,
  //   counter: counterReducer,
  //   login: loginReducer,
  //   dashboard: dashboardReducer,
});

export default rootReducer;
