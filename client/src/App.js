import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Album from './components/album/album';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Album />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
