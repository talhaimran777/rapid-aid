import './App.css';
import TopMenu from './components/sub.components/navbar';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

// Components
import Home from './components/home';
import Tasks from './components/tasks';
import PostTask from './components/postTask';
function App() {
  return (
    <div className='App'>
      <Router>
        <TopMenu />
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/tasks' component={Tasks} />
          <Route exact path='/postTask' component={PostTask} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
