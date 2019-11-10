import {combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import {connectRouter} from 'connected-react-router'
import modalReducer from "./modalReducer";
import infoReducer from "./infoReducer";
import loadingReducer from "./loadingReducer";
import userReducer from "./userReducer";

export default (history) => combineReducers({
  form: formReducer,
  info: infoReducer,
  loading: loadingReducer,
  modal: modalReducer,
  router: connectRouter(history),
  user: userReducer
});