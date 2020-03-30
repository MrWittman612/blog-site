import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Album from './components/album/album';
import Pricing from './components/pricing/Pricing';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Dashboard from './components/dashboard/Dashboard';
import Blog from './components/blog/Blog';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Album />
          </Route>
          <Route path='/pricing'>
            <Pricing />
          </Route>
          <Route path='/login'>
            <Login />
          </Route>
          <Route path='/register'>
            <Register />
          </Route>
          <Route path='/dashboard'>
            <Dashboard />
          </Route>
          <Route path='/blog'>
            <Blog />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
