import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import app from './App';
import * as serviceWorker from './serviceWorker';
import 'semantic-ui-css/semantic.min.css';
import { Router, Route, Switch} from "react-router-dom";
import history from "./utils/history";
import viewPage from "./containers/ViewPage"

ReactDOM.render(
  <>
    <Router history={history}>
      <Switch>
        <Route exact path="/" component={app} />
        <Route exact path="/course/:id" component={viewPage} />
      </Switch>
    </Router>
  </>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
