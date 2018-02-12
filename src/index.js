import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import { Provider } from 'react-redux';  
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './config/routes';
import store from './reducers/store';
import { MainContainer } from './containers';

const history = createBrowserHistory();

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <MainContainer>
        <Switch>
          <Routes />
        </Switch>
      </MainContainer>
    </Router>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
