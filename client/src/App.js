import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';

import Album from './components/album/album';
import Pricing from './components/pricing/Pricing';

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
        </Switch>
      </div>
    </Router>
  );
}

export default App;
