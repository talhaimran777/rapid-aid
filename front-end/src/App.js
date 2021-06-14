import './App.css';
import TopMenu from './components/sub.components/navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Home from './components/home/home';
import Tasks from './components/tasks/tasks';
import PostTask from './components/postTask/postTask';
import Login from './components/login/login';
import Register from './components/register/register';
function App() {
  return (
    <div className='App'>
      <Router>
        <TopMenu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tasks' component={Tasks} />
          <Route exact path='/postTask' component={PostTask} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
