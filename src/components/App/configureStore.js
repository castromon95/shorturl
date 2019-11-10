import {routerMiddleware} from "connected-react-router";
import {applyMiddleware, compose, createStore} from "redux";
import reduxThunk from "redux-thunk";

import reducers from "../../reducers";
import history from "../../history";

export default function configureStore() {
  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  return createStore(
    reducers(history),
    composeEnhancers(applyMiddleware(reduxThunk, routerMiddleware(history)))
  );
}
