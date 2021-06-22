import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import jwt_decode from 'jwt-decode';

// DISPATCH
import { useDispatch } from 'react-redux';

// COMPONENTS
import Home from './components/home/home';
import Tasks from './components/tasks/tasks';
import PostTask from './components/postTask/postTask';
import Login from './components/login/login';
import Register from './components/register/register';
import Profile from './components/profile/profile';

// UTILS
import setAuthToken from './utils/setAuthToken';

// AUTH ACTIONS
import { setCurrentUser } from './actions/authActions';

// PRIVATE_ROUTE
import PrivateRoute from './components/private/privateRoute';

function App() {
  const dispatch = useDispatch();

  // Check for token to keep user logged in
  if (localStorage.jwtToken) {
    // Set auth token header auth
    const token = localStorage.jwtToken;
    setAuthToken(token);

    // Decode token and get user info and exp
    const decoded = jwt_decode(token);

    // Set user and isAuthenticated
    dispatch(setCurrentUser(decoded));

    // Check for expired token
    const currentTime = Date.now() / 1000; // to get in milliseconds

    if (decoded.exp < currentTime) {
      // Logout user
      // Remove token from local storage
      localStorage.removeItem('jwtToken');

      // Remove auth header for future requests
      setAuthToken(false);

      // Set current user to empty object {} which will set isAuthenticated to false
      dispatch(setCurrentUser({}));

      // Redirect to login
      window.location.href = './login';
    }
  }
  return (
    <div className='App'>
      <Router>
        {/* <Profile /> */}
        <Switch>
          <Route exact path='/' component={Home} />
          <PrivateRoute exact path='/tasks' component={Tasks} />
          <PrivateRoute exact path='/postTask' component={PostTask} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <PrivateRoute exact path='/:id' component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
