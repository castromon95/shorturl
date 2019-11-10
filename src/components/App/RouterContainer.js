import React from 'react';
import history from "../../history";
import {Router} from "react-router-dom";
import AppContainer from './AppContainer';
import {ConnectedRouter} from "connected-react-router";


export default () => {
  
  
  return (
    <ConnectedRouter history={history}>
      <Router history={history}>
        <AppContainer/>
      </Router>
    </ConnectedRouter>
  );
  
}