import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Methods from './methods';
import Nav from './components/nav';
import Hooks from './hooks';
import { HooksProvider } from './HooksContext';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <HooksProvider>
      <Router>
        <div className="App">
          <Route path="/" component={Nav} />
          <Switch>
            <Route exact path="/" component={Methods} />
            <Route path="/hooks" component={Hooks} />
          </Switch>
        </div>
      </Router>
    </HooksProvider>
  );
}

export default App;
