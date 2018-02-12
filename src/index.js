import React from 'react';
import ReactDOM from 'react-dom';
import { Switch } from 'react-router';
import { Router } from "react-router-dom";
import { createBrowserHistory } from 'history';
import 'semantic-ui-css/semantic.min.css';
import registerServiceWorker from './registerServiceWorker';
import Routes from './config/routes';
import { MainContainer } from './containers';

const history = createBrowserHistory();

ReactDOM.render(
  <Router history={history}>
    <MainContainer>
      <Switch>
        <Routes />
      </Switch>
    </MainContainer>
  </Router>,
  document.getElementById('root')
);
registerServiceWorker();
