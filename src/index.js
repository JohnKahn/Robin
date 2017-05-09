import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, createNetworkInterface } from 'react-apollo';
import Home from './routes/Home';
import Signup from './routes/Signup';
import Login from './routes/Login';
import Logout from './routes/Logout';
import Profile from './routes/Profile';
// import Stories from './routes/Stories';
import config from './config';

import './static/tachyons.css';
import './static/nprogress.css';

const networkInterface = createNetworkInterface({
  uri: 'https://api.graph.cool/simple/v1/cj26t44p1zfsl0115otvby3gk',
  opts: {
    credentials: 'same-origin'
  }
});

networkInterface.use([{
  applyMiddleware(req, next) {
    if (!req.options.headers) {
      req.options.headers = {};
    }

    if (localStorage.getItem(config.userTokenName)) {
      req.options.headers.authorization = `Bearer ${localStorage.getItem(config.userTokenName)}`;
    }

    next();
  }
}])

const client = new ApolloClient({ networkInterface });

ReactDOM.render(
  (
    <ApolloProvider client={client}>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/signup' component={Signup} />
          <Route path='/login' component={Login} />
          <Route path='/logout' component={Logout} />
          <Route path='/profile' component={Profile} />
          {/*<Route path='/stories' component={Stories} />*/}
        </div>
      </Router>
    </ApolloProvider>
  ),
  document.getElementById('root')
);
