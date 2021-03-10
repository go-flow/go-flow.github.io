/* eslint-disable react/no-array-index-key */
import React from 'react';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';

import { routes } from './modules';

// import spinkit styles
import 'spinkit/spinkit.min.css';
// Import Font Awesome Icons Set
import 'font-awesome/css/font-awesome.min.css';
// Import Simple Line Icons Set
import 'simple-line-icons/css/simple-line-icons.css';

import './assets/styles/style.css';

const App: React.FC = (): React.ReactElement => {
  return (
    <Router>
      <Switch>
        {routes.map((route, key) => {
          return (
            <Route key={key} path={route.path} exact={route.exact} sensitive={route.sensitive} strict={route.strict}>
              {route.layout ? <route.layout route={route} /> : <route.page route={route} />}
            </Route>
          );
        })}
      </Switch>
    </Router>
  );
};

export default App;
